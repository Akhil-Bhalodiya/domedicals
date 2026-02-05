import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      mobileImage:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=500&fit=crop&crop=center",
      desktopImage:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&h=600&fit=crop",
      title: "Advanced Ophthalmic Solutions",
      description:
        "Cutting-edge technology for cataract, refractive, and retinal care",
    },
    {
      mobileImage:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center",
      desktopImage:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=600&fit=crop",
      title: "Patient-First Approach",
      description:
        "Every decision begins and ends with the patient's wellbeing",
    },
    {
      mobileImage:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop&crop=center",
      desktopImage:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&h=600&fit=crop",
      title: "Surgeon Collaboration",
      description: "Partnering with leading ophthalmologists worldwide",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
          
          {/* Image container with better positioning */}
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center md:hidden"
              style={{
                objectPosition: "center 30%",
              }}
            />
            {/* Desktop Image */}
            <img
              src={slide.desktopImage}
              alt={slide.title}
              className="hidden md:block w-full h-full object-cover object-center"
              style={{
                objectPosition: "center 30%",
              }}
            />
          </div>
          
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="w-full max-w-7xl md:mx-40 lg:mx-40 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
              <div className="max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <Link
                    to="/products"
                    className="bg-white text-gray-900 font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    View Products
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-white/10 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 p-2 sm:p-2.5 md:p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 p-2 sm:p-2.5 md:p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1.5 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8 h-2 sm:h-2"
                : "bg-white/50 hover:bg-white/80 w-2 h-2 sm:w-3 sm:h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
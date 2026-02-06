import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Cataract Specialist",
      text: "The technology and support from Domedicals have transformed our surgical outcomes.",
      image: "SC",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Retinal Surgeon",
      text: "Exceptional quality and reliable service. A true partner in patient care.",
      image: "MR",
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Cornea Specialist",
      text: "Their patient-first approach aligns perfectly with our practice philosophy.",
      image: "LT",
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide for mobile (2 seconds)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 second rotation
    
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Hear from ophthalmologists who trust Domedicals for their practice needs
          </p>
        </div>

        {/* Mobile Slider (md:hidden = hidden on 768px and above) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-all h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-primary-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm">
                      "{testimonial.text}"
                    </p>
                    <div className="flex text-amber-400 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider Controls */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button> */}

          {/* Mobile Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - EXACTLY SAME AS BEFORE */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-600 text-md">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex text-amber-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile auto-rotation indicator */}
        {/* <div className="md:hidden text-center mt-6">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-600 font-medium">
              Auto-rotating every 2 seconds
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
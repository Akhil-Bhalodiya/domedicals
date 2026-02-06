import React, { useState, useEffect, useRef } from "react";
import {
  Target,
  Users,
  Eye,
  Heart,
  Award,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ArrowRight,
  Shield,
  Star,
  Globe,
  Lightbulb,
  Compass,
  Zap,
  TrendingUp,
  Play,
  ExternalLink,
} from "lucide-react";

import { Link } from "react-router-dom";

const OurPurpose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPurposeSlide, setCurrentPurposeSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // COMPLETELY NEW SLIDER IMAGES
  const heroSlides = [
    {
      image:
        "https://images.pexels.com/photos/3470032/pexels-photo-3470032.jpeg",
      title: "Our Purpose",
      subtitle: "Advancing Eye Care Through Clinical Innovation",
    },
    {
      image:
        "https://images.pexels.com/photos/4769120/pexels-photo-4769120.jpeg",
      title: "Surgical Precision",
      subtitle: "Enhancing Vision with Advanced Technology",
    },
    {
      image:
        "https://images.pexels.com/photos/33916255/pexels-photo-33916255.jpeg",
      title: "Global Partnership",
      subtitle: "Collaborating with Ophthalmologists Worldwide",
    },
    {
      image:
        "https://images.pexels.com/photos/6129207/pexels-photo-6129207.jpeg",
      title: "Patient Outcomes",
      subtitle: "Quality of Vision, Quality of Life",
    },
  ];

  const purposePoints = [
    {
      icon: Target,
      title: "Clinical Excellence",
      description:
        "Delivering predictable performance across all patient profiles",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Surgical Confidence",
      description:
        "Technologies that integrate seamlessly into clinical practice",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Focus on quality of vision and quality of life outcomes",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Working closely with ophthalmic specialists worldwide",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const rolePoints = [
    "Offering a curated portfolio of trusted cataract, refractive, and retinal solutions from leading ophthalmic manufacturers.",
    "Enabling ophthalmologists to choose the right technology for each patient through access to diverse, high-quality brands.",
    "Bridging global innovation with local clinical needs through reliable distribution and professional support.",
    "Committed to ethical partnerships, consistent availability, and service excellence across the ophthalmic care continuum.",
  ];

  // COMPLETELY NEW MISSION & VISION IMAGES
  const visionImage =
    "https://images.pexels.com/photos/11119415/pexels-photo-11119415.jpeg";
  const missionImage =
    "https://images.pexels.com/photos/11198237/pexels-photo-11198237.jpeg";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextPurposeSlide = () => {
    setCurrentPurposeSlide((prev) =>
      prev === purposePoints.length - 1 ? 0 : prev + 1,
    );
  };

  const prevPurposeSlide = () => {
    setCurrentPurposeSlide((prev) =>
      prev === 0 ? purposePoints.length - 1 : prev - 1,
    );
  };

  // Main hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Purpose points auto slide for mobile (2 seconds)
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      nextPurposeSlide();
    }, 2000); // 2 second rotation

    return () => clearInterval(interval);
  }, [isMobile, purposePoints.length]);

  const iframeRef = useRef(null);

  const handleContainerClick = () => {
    // Open YouTube in a new tab when the video container is clicked
    window.open("https://www.youtube.com/watch?v=69apY2LYMZ8", "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider Section - 800px height - UNCHANGED */}
      <section className="relative h-[800px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20">
              <div className="absolute bottom-0 left-0 w-full">
                <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                      <Star className="w-4 h-4 mr-2 text-white" />
                      <span className="text-white">
                        Our Commitment to Eye Care
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                        Learn More
                      </button>
                      <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>

        {/* Slider indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Purpose Section - FIXED LAYOUT */}
      <section className="py-16 bg-white">
        <div className="w-[90%] mx-auto">
          {/* Our Purpose Text Content - Full width */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Purpose</h2>
            </div>
            <div className="md:flex sm:gap-6  md:gap-6">
              <div className="space-y-6  md:w-[60%]">
                <p className="text-gray-700 text-lg">
                  Our purpose is to support ophthalmologists across{" "}
                  <strong className="text-primary-600">
                    cataract, refractive, and retinal care
                  </strong>{" "}
                  by providing clinically reliable technologies that help
                  deliver meaningful visual outcomes for your patients.
                </p>
                <p className="text-gray-700 text-lg">
                  We believe eye care extends beyond a single procedure or
                  product category. Whether restoring vision through cataract
                  surgery, enhancing visual performance with refractive
                  solutions, or supporting long-term retinal health, our focus
                  remains consistent –{" "}
                  <strong className="text-primary-600">
                    improving your patient's quality of vision and quality of
                    life.
                  </strong>
                </p>
                <p className="text-gray-700 text-lg">
                  Each product in our portfolio is developed with a clear
                  understanding of real-world clinical needs. Through close
                  collaboration with ophthalmic specialists, we design solutions
                  that integrate seamlessly into clinical practice, offering{" "}
                  <strong className="text-primary-600">
                    predictable performance, surgical confidence, and long-term
                    stability
                  </strong>{" "}
                  across a wide range of patient profiles.
                </p>
              </div>
              <div className="space-y-6  md:w-[40%]">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                  onClick={handleContainerClick}
                  title="Click to watch on YouTube"
                >
                  {/* YouTube iframe with autoplay (muted) */}
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/69apY2LYMZ8?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&loop=0&playlist=69apY2LYMZ8"
                    title="Domedicals Introduction"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />

                  {/* Overlay with play button and YouTube indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </div>
                    <div className="bg-black/70 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center">
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose Points Grid - SEPARATE SECTION */}
          <div>
            {/* Mobile Slider for Purpose Points */}
            <div className="sm:hidden relative mb-8">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPurposeSlide * 100}%)`,
                  }}
                >
                  {purposePoints.map((point, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-3">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all duration-300 h-full">
                        {/* Mobile: Flex layout, icon left, text right */}
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <point.icon className="w-6 h-6 text-white" />
                          </div>

                          <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                              {point.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Slider Controls */}
              {/* <button
                onClick={prevPurposeSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                aria-label="Previous point"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={nextPurposeSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                aria-label="Next point"
              >
                <ChevronRightIcon className="w-4 h-4 text-gray-700" />
              </button> */}

              {/* Mobile Slider Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {purposePoints.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPurposeSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPurposeSlide
                        ? "bg-primary-600 w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to point ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid - EXACTLY SAME AS BEFORE */}
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {purposePoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  {/* Mobile: Flex layout, Desktop: Keep original block layout */}
                  <div className="flex sm:block items-start gap-4">
                    {/* Icon - same styling, just flex-shrink-0 for mobile */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-lg flex items-center justify-center flex-shrink-0 sm:mb-4`}
                    >
                      <point.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text content - same styling, no changes for desktop */}
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile auto-rotation indicator */}
            {/* <div className="sm:hidden text-center mt-6">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs text-gray-600 font-medium">
                  Auto-rotating every 2 seconds
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Role in Advancing Eye Care - UNCHANGED */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Role in Advancing Eye Care
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Bridging innovation with clinical excellence across the ophthalmic
              continuum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rolePoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - UPDATED FOR MOBILE (Content first, then image) */}
      <section className="py-16 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left on desktop, First on mobile */}
            <div className="order-1 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  To be the most trusted partner in ophthalmic care,
                  transforming vision outcomes through innovative technology and
                  unwavering commitment to clinical excellence.
                </p>
                <p className="text-gray-700 text-lg">
                  We envision a world where every patient has access to the
                  highest quality eye care, supported by technologies that are
                  both advanced and accessible to ophthalmologists worldwide.
                </p>
                <div className="bg-primary-50 rounded-xl p-6 mt-6">
                  <div className="flex items-start">
                    <Lightbulb className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Future Focus
                      </h4>
                      <p className="text-gray-700">
                        Driving innovation that anticipates the evolving needs
                        of eye care professionals and their patients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW Vision Image - Right on desktop, Second on mobile */}
            <div className="relative order-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={visionImage}
                  alt="Vision - Advanced Eye Care Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Compass className="w-5 h-5 mr-2" />
                      <span className="font-medium">Guiding Innovation</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      Leading the Future of Eye Care
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - UPDATED FOR MOBILE (Content first, then image) */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Right on desktop, First on mobile */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  To empower ophthalmologists with clinically validated
                  technologies that enhance surgical precision, improve patient
                  outcomes, and advance the field of eye care globally.
                </p>
                <p className="text-gray-700 text-lg">
                  We are committed to understanding and addressing the evolving
                  needs of eye care professionals, providing comprehensive
                  support, education, and access to the latest innovations.
                </p>
                <div className="bg-secondary-50 rounded-xl p-6 mt-6">
                  <div className="flex items-start">
                    <TrendingUp className="w-8 h-8 text-secondary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Continuous Growth
                      </h4>
                      <p className="text-gray-700">
                        Committed to ongoing improvement and supporting the
                        professional development of eye care specialists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW Mission Image - Left on desktop, Second on mobile */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={missionImage}
                  alt="Mission - Surgical Excellence"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Zap className="w-5 h-5 mr-2" />
                      <span className="font-medium">Empowering Surgeons</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      Excellence in Every Procedure
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - UNCHANGED */}
      <section className="py-16 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of ophthalmologists who trust Domedicals for
              advanced ophthalmic solutions and unparalleled support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all inline-flex items-center justify-center">
                Contact Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default OurPurpose;

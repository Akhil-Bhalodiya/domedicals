import React, { useState, useEffect } from "react";
import { Target, Shield, Heart, Users, ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: Target,
      title: "Precision Technology",
      description:
        "State-of-the-art equipment for accurate diagnostics and treatment",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Highest industry standards with rigorous quality checks",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every decision made with patient wellbeing in mind",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Working with leading ophthalmologists worldwide",
      color: "from-purple-500 to-violet-500",
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
      setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 second rotation
    
    return () => clearInterval(interval);
  }, [isMobile, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="md:py-16 sm:py-2 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Mobile Slider (md:hidden = hidden on 768px and above) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    {/* Flex layout for mobile - icon left, text right */}
                    <div className="flex items-start">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 mr-4`}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
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
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next feature"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button> */}

          {/* Mobile Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - EXACTLY SAME AS YOUR CURRENT DESIGN */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Flex container for mobile alignment - Keep as is for desktop */}
              <div className="flex flex-col md:block">
                <div className="flex items-start md:block">
                  {/* Icon container - adjusted for mobile */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 md:mb-4 flex-shrink-0`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Text content - with margin left on mobile */}
                  <div className="md:ml-0 ml-4 md:mt-0">
                    <h3 className="font-bold text-gray-900 text-xl mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
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

export default FeaturesSection;
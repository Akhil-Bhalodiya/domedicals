import React, { useState, useEffect } from "react";

const AssociationsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const associations = [
    {
      name: "biotech",
      image: "/images/biotech.png",
      imageClass: "h-24",
    },
    {
      name: "Rayner",
      image: "/images/rayner.png",
      imageClass: "h-24",
    },
    {
      name: "HASA OPTIX",
      image: "/images/hasa.png",
      imageClass: "h-24",
    },
    {
      name: "allotex",
      image: "/images/allotex.png",
      imageClass: "h-24",
    },
    {
      name: "EMTRON",
      image: "/images/emtron.png",
      imageClass: "h-24",
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide for mobile (2 seconds)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === associations.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 second rotation
    
    return () => clearInterval(interval);
  }, [isMobile, associations.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Associations
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg mx-auto">
            Partnering with leading ophthalmic technology manufacturers worldwide
          </p>
        </div>

        {/* Mobile Slider - Only Logos */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {associations.map((company, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="h-30 w-72 mx-auto bg-white rounded-lg flex items-center justify-center p-1 border-2 border-gray-300 shadow-sm">
                    <img
                      src={company.image}
                      alt={`${company.name} logo`}
                      className={`${company.imageClass} w-auto object-contain mx-auto`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {associations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - EXACTLY SAME AS BEFORE */}
        <div className="hidden md:flex flex-wrap gap-16 justify-center">
          {associations.map((company, index) => (
            <div key={index} className="text-center w-48 group">
              <div className="h-30 w-48 mx-auto bg-white rounded-lg flex items-center justify-center p-1 border-2 border-gray-300 shadow-sm group-hover:border-primary-400 group-hover:shadow-md transition-all duration-300">
                <img
                  src={company.image}
                  alt={`${company.name} logo`}
                  className={`${company.imageClass} w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsSection;
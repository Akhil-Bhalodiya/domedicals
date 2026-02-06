import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SurgeonCollaboration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const surgeons = [
    { 
      name: "Dr. Sarah Chen", 
      specialty: "Cataract Specialist",
      image: "https://images.pexels.com/photos/8376318/pexels-photo-8376318.jpeg" // Add your image URL here
    },
    { 
      name: "Dr. Michael Rodriguez", 
      specialty: "Refractive Surgeon",
      image: "https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg" // Add your image URL here
    },
    { 
      name: "Dr. Emily Thompson", 
      specialty: "Retinal Specialist",
      image: "https://images.pexels.com/photos/4173248/pexels-photo-4173248.jpeg" // Add your image URL here
    },
    { 
      name: "Dr. James Wilson", 
      specialty: "Cornea Expert",
      image: "https://images.pexels.com/photos/6129452/pexels-photo-6129452.jpeg" // Add your image URL here
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide for mobile (2 seconds)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === surgeons.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 second rotation
    
    return () => clearInterval(interval);
  }, [isMobile, surgeons.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === surgeons.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? surgeons.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Surgeon Collaboration
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Working with leading ophthalmologists to advance eye care
          </p>
        </div>

        {/* Mobile Slider (sm:hidden = hidden on 640px and above) */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {surgeons.map((surgeon, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                        {surgeon.image ? (
                          <img 
                            src={surgeon.image} 
                            alt={surgeon.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-2xl font-bold text-primary-600">
                            {surgeon.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">
                      {surgeon.name}
                    </h4>
                    <p className="text-primary-600 text-md font-medium">
                      {surgeon.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {surgeons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to surgeon ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - EXACTLY SAME AS BEFORE */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {surgeons.map((surgeon, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                  {surgeon.image ? (
                    <img 
                      src={surgeon.image} 
                      alt={surgeon.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-primary-600">
                      {surgeon.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-1">
                {surgeon.name}
              </h4>
              <p className="text-primary-600 text-md font-medium">
                {surgeon.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurgeonCollaboration;
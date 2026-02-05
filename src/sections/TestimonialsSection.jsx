import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Trusted by Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from ophthalmologists who trust Domedicals for their practice
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
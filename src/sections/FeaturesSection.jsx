import React from "react";
import { Target, Shield, Heart, Users } from "lucide-react";

const FeaturesSection = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Flex container for mobile alignment */}
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
      </div>
    </section>
  );
};

export default FeaturesSection;
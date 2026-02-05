import React from "react";
import { Clock, Users, Star, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "5000+", label: "Surgeons Supported", icon: Users },
    { number: "99%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-md">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
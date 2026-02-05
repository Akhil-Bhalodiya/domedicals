import React from "react";

const SurgeonCollaboration = () => {
  const surgeons = [
    { name: "Dr. XYZ", specialty: "Cataract Specialist" },
    { name: "Dr. ABC", specialty: "Refractive Surgeon" },
    { name: "Dr. XYZ", specialty: "Retinal Specialist" },
    { name: "Dr. ABC", specialty: "Cornea Expert" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Surgeon Collaboration
          </h2>
          <p className="text-gray-600 text-lg">
            Working with leading ophthalmologists to advance eye care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {surgeons.map((surgeon, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">
                    {surgeon.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
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
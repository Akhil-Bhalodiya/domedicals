import React from "react";
import { CheckCircle } from "lucide-react";

const PatientFirstSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Patient-First Philosophy
          </h2>
          <p className="text-gray-600 max-w-3xl text-md mx-auto">
            At the heart of everything we do is a simple belief:{" "}
            <strong>
              every clinical decision should begin and end with the patient.
            </strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Patients
            </h3>
            <p className="text-gray-700 text-md mb-6">
              As a distributor of multiple ophthalmic brands across cataract,
              refractive, and retinal care, our role is not to promote a
              single solution, but to enable informed choice, so
              ophthalmologists can select the most appropriate technology for
              each individual patient.
            </p>
            <div className="space-y-4">
              {[
                "Personalized treatment approach",
                "Evidence-based technology selection",
                "Continuous care and support",
                "Quality-driven solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Choice that serves the patient",
                description:
                  "By offering access to diverse, trusted ophthalmic technologies, we support personalized treatment decisions rather than one-size-fits-all solutions.",
              },
              {
                number: "02",
                title: "Support for clinical judgment",
                description:
                  "We respect the expertise of ophthalmologists and focus on providing accurate product information, availability, and technical support, allowing clinicians to decide what is best for their patients.",
              },
              {
                number: "03",
                title: "Quality without compromise",
                description:
                  "Across cataract, refractive, and retinal care, we deliver high-quality products that meet the needs of patients and healthcare providers.",
              },
              {
                number: "04",
                title: "Continuity of care",
                description:
                  "Our commitment to quality extends beyond the product itself. We provide comprehensive care services, including consultations, follow-up appointments, and ongoing support to ensure optimal outcomes for our patients.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    {principle.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-gray-600 text-md">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientFirstSection;
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of ophthalmologists who trust Domedicals for
            advanced ophthalmic solutions and unparalleled support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
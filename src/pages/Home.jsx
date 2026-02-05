// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Play,
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Target,
//   Heart,
//   Shield,
//   Users,
//   Award,
//   Star,
//   Zap,
//   Clock,
//   Eye,
// } from "lucide-react";

// const Home = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Image slider data
//   const slides = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&h=600&fit=crop",
//       title: "Advanced Ophthalmic Solutions",
//       description:
//         "Cutting-edge technology for cataract, refractive, and retinal care",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=600&fit=crop",
//       title: "Patient-First Approach",
//       description:
//         "Every decision begins and ends with the patient's wellbeing",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&h=600&fit=crop",
//       title: "Surgeon Collaboration",
//       description: "Partnering with leading ophthalmologists worldwide",
//     },
//   ];

//   // Association logos
//   const associations = [
//     { name: "biotech", description: "access to innovation" },
//     { name: "Rayner", description: "" },
//     { name: "HASA OPTIX", description: "Belgium" },
//     { name: "allotex", description: "" },
//     { name: "EMTRON", description: "" },
//   ];

//   // Surgeon collaborations
//   const surgeons = [
//     { name: "Dr. XYZ", specialty: "Cataract Specialist" },
//     { name: "Dr. ABC", specialty: "Refractive Surgeon" },
//     { name: "Dr. XYZ", specialty: "Retinal Specialist" },
//     { name: "Dr. ABC", specialty: "Cornea Expert" },
//   ];

//   const stats = [
//     { number: "15+", label: "Years Experience", icon: Clock },
//     { number: "5000+", label: "Surgeons Supported", icon: Users },
//     { number: "99%", label: "Satisfaction Rate", icon: Star },
//     { number: "24/7", label: "Support Available", icon: Zap },
//   ];

//   const features = [
//     {
//       icon: Target,
//       title: "Precision Technology",
//       description:
//         "State-of-the-art equipment for accurate diagnostics and treatment",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: Shield,
//       title: "Quality Assurance",
//       description: "Highest industry standards with rigorous quality checks",
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       icon: Heart,
//       title: "Patient-Centered",
//       description: "Every decision made with patient wellbeing in mind",
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       icon: Users,
//       title: "Expert Collaboration",
//       description: "Working with leading ophthalmologists worldwide",
//       color: "from-purple-500 to-violet-500",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Dr. Sarah Chen",
//       role: "Cataract Specialist",
//       text: "The technology and support from Domedicals have transformed our surgical outcomes.",
//       image: "SC",
//     },
//     {
//       name: "Dr. Michael Rodriguez",
//       role: "Retinal Surgeon",
//       text: "Exceptional quality and reliable service. A true partner in patient care.",
//       image: "MR",
//     },
//     {
//       name: "Dr. Lisa Thompson",
//       role: "Cornea Specialist",
//       text: "Their patient-first approach aligns perfectly with our practice philosophy.",
//       image: "LT",
//     },
//   ];

//   // Next/Previous slide handlers
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <div className="relative overflow-hidden">
//       {/* Section 1: Hero Image Slider - Starts below navbar */}
//       <section className="relative h-[800px] overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 z-20">
//               {/* Text container at bottom left - ADJUST HERE */}
//               <div className="absolute bottom-0 left-0 w-full">
//                 <div className="w-[90%] max-w-7xl mx-38 px-0 pb-16">
//                   {/* 👇 CONTROL HORIZONTAL POSITION HERE - Change ml-0 to move right */}
//                   <div className="max-w-2xl ml-0">
//                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                       {slide.title}
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
//                       {slide.description}
//                     </p>
//                     <div className="flex space-x-4">
//                       <Link
//                         to="/products"
//                         className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
//                       >
//                         View Products
//                       </Link>
//                       <Link
//                         to="/contact"
//                         className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
//                       >
//                         Contact Us
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Slider Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5 text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
//         >
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>

//         {/* Slider Indicators */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === currentSlide
//                   ? "bg-white w-6"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* OLD HOME PAGE SECTIONS START HERE */}

//       {/* Section 2: Stats Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Our Purpose with Video */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                 Our Purpose
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Our purpose is to support ophthalmologists across{" "}
//                 <strong>cataract, refractive and retinal care</strong> by
//                 providing clinically reliable technologies that help deliver{" "}
//                 <strong>meaningful visual outcomes for your patients</strong>.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 We believe eye care extends beyond a single procedure or product
//                 category. Whether restoring vision through cataract surgery,
//                 enhancing visual performance with refractive solutions or
//                 supporting long-term retinal health, our focus remains
//                 consistent –{" "}
//                 <strong>
//                   improving your patient's quality of vision and quality of
//                   life.
//                 </strong>
//               </p>
//               <Link
//                 to="/our-purpose"
//                 className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
//               >
//                 Read More
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
//                 <iframe
//                   src="https://www.youtube.com/embed/69apY2LYMZ8"
//                   title="Domedicals Introduction"
//                   className="absolute inset-0 w-full h-full"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
//                     <Play className="w-7 h-7 text-primary-600 ml-1" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 4: Features Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <div
//                   className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
//                 >
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-lg mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 5: Patient-First Philosophy - New Design */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Patient-First Philosophy
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               At the heart of everything we do is a simple belief:{" "}
//               <strong>
//                 every clinical decision should begin and end with the patient.
//               </strong>
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* Left Column - Main Philosophy */}
//             <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Commitment to Patients
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 As a distributor of multiple ophthalmic brands across cataract,
//                 refractive, and retinal care, our role is not to promote a
//                 single solution, but to enable informed choice, so
//                 ophthalmologists can select the most appropriate technology for
//                 each individual patient.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "Personalized treatment approach",
//                   "Evidence-based technology selection",
//                   "Continuous care and support",
//                   "Quality-driven solutions",
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Principles */}
//             <div className="space-y-6">
//               {[
//                 {
//                   number: "01",
//                   title: "Choice that serves the patient",
//                   description:
//                     "By offering access to diverse, trusted ophthalmic technologies, we support personalized treatment decisions rather than one-size-fits-all solutions.",
//                 },
//                 {
//                   number: "02",
//                   title: "Support for clinical judgment",
//                   description:
//                     "We respect the expertise of ophthalmologists and focus on providing accurate product information, availability, and technical support, allowing clinicians to decide what is best for their patients.",
//                 },
//                 {
//                   number: "03",
//                   title: "Quality without compromise",
//                   description:
//                     "Across cataract, refractive, and retinal care, we deliver high-quality products that meet the needs of patients and healthcare providers.",
//                 },
//                 {
//                   number: "04",
//                   title: "Continuity of care",
//                   description:
//                     "Our commitment to quality extends beyond the product itself. We provide comprehensive care services, including consultations, follow-up appointments, and ongoing support to ensure optimal outcomes for our patients.",
//                 },
//               ].map((principle, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 hover:shadow-sm transition-all"
//                 >
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
//                       {principle.number}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900 text-md mb-1">
//                         {principle.title}
//                       </h4>
//                       <p className="text-gray-600 text-sm">
//                         {principle.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 6: Surgeon Collaboration - New Design */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Surgeon Collaboration
//             </h2>
//             <p className="text-gray-600">
//               Working with leading ophthalmologists to advance eye care
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {surgeons.map((surgeon, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
//                   <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-sm">
//                     <div className="text-2xl font-bold text-primary-600">
//                       {surgeon.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </div>
//                   </div>
//                 </div>
//                 <h4 className="font-bold text-gray-900 text-lg mb-1">
//                   {surgeon.name}
//                 </h4>
//                 <p className="text-primary-600 text-sm font-medium">
//                   {surgeon.specialty}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 7: Testimonials */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Trusted by Experts
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Hear from ophthalmologists who trust Domedicals for their practice
//               needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-all"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-lg flex items-center justify-center text-white font-bold mr-4">
//                     {testimonial.image}
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-primary-600 text-sm">
//                       {testimonial.role}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic text-sm">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="flex text-amber-400 mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current" />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 8: Our Associations - With Hover Effects */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Our Associations
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Partnering with leading ophthalmic technology manufacturers
//               worldwide
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-16">
//             {[
//               {
//                 name: "biotech",
//                 image: "/logos/biotech.png",
//                 imageClass: "h-24",
//               },
//               {
//                 name: "Rayner",
//                 image: "/logos/rayner.png",
//                 description: "",
//                 imageClass: "h-24",
//               },
//               {
//                 name: "HASA OPTIX",
//                 image: "/logos/hasa.png",
//                 imageClass: "h-24",
//               },
//               {
//                 name: "allotex",
//                 image: "/logos/allotex.png",
//                 imageClass: "h-24",
//               },
//               {
//                 name: "EMTRON",
//                 image: "/logos/emtron.png",
//                 imageClass: "h-24",
//               },
//             ].map((company, index) => (
//               <div key={index} className="text-center w-48 group">
//                 <div className="h-30 w-48 mx-auto bg-white rounded-lg flex items-center justify-center mb-4 p-1 border-2 border-gray-300 shadow-sm group-hover:border-primary-400 group-hover:shadow-md transition-all duration-300">
//                   <div className="text-center">
//                     <img
//                       src={company.image}
//                       alt={`${company.name} logo`}
//                       className={`${company.imageClass} w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300`}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 9: CTA Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="w-[90%] max-w-7xl mx-auto">
//           <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl p-10 text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Ready to Transform Your Practice?
//             </h2>
//             <p className="text-white/90 mb-8 max-w-2xl mx-auto">
//               Join thousands of ophthalmologists who trust Domedicals for
//               advanced ophthalmic solutions and unparalleled support.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="bg-white text-primary-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all"
//               >
//                 Schedule a Demo
//               </Link>
//               <Link
//                 to="/products"
//                 className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
//               >
//                 View Products
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import HeroSlider from "../sections/HeroSlider";
import StatsSection from "../sections/StatsSection";
import PurposeSection from "../sections/PurposeSection";
import FeaturesSection from "../sections/FeaturesSection";
import PatientFirstSection from "../sections/PatientFirstSection";
import SurgeonCollaboration from "../sections/SurgeonCollaboration";
import TestimonialsSection from "../sections/TestimonialsSection";
import AssociationsSection from "../sections/AssociationsSection";
import CTASection from "../sections/CTASection";


const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <HeroSlider />
      <StatsSection />
      <PurposeSection />
      <FeaturesSection />
      <PatientFirstSection />
      <SurgeonCollaboration />
      <TestimonialsSection />
      <AssociationsSection />
      <CTASection />
    </div>
  );
};

export default Home;
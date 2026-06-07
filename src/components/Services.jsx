import React from "react";
import {
  RiCustomerService2Fill,
  RiMapPinLine,
  RiSmartphoneLine,
  RiUserStarLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const services = [
  {
    icon: <RiCustomerService2Fill />,
    title: "24/7 Support",
    description: "We are available around the clock for any kind of support you need.",
    gradient: "from-[#1FACEA] to-[#0B81F7]",
    glow: "#0B81F7",
  },
  {
    icon: <RiMapPinLine />,
    title: "UK Coverage",
    description: "We are covering across the entire UK, finding the right fit wherever you are.",
    gradient: "from-[#7574E5] to-[#9B68E6]",
    glow: "#9B68E6",
  },
  {
    icon: <RiSmartphoneLine />,
    title: "Mobile App",
    description: "Our mobile app is making life easy for workers on the go.",
    gradient: "from-[#43AF74] to-[#36D97C]",
    glow: "#36D97C",
  },
  {
    icon: <RiUserStarLine />,
    title: "Training",
    description: "We provide all types of training, face to face and online, for all roles.",
    gradient: "from-[#2980b9] to-[#5dade2]",
    glow: "#2980b9",
  },
  {
    icon: <RiMoneyDollarCircleLine />,
    title: "Pay Rates",
    description: "We are providing great pay rates for all the roles across all sectors.",
    gradient: "from-[#8e44ad] to-[#c39bd3]",
    glow: "#8e44ad",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "DBS Checks",
    description: "We help you to apply for DBS and right to work checks seamlessly.",
    gradient: "from-[#007991] to-[#44a5b9]",
    glow: "#007991",
  },
];

const Services = () => {
  return (
    <section id="Services" className="py-20 bg-[#e0e5ec]">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0B81F7]" />
            <span className="text-sm font-semibold text-[#0B81F7] uppercase tracking-wider">
              Our Promise
            </span>
          </div>
          <h2 className="text-[#2d3748] mb-4">
            We Promise,{" "}
            <span className="text-gradient-primary">We Will</span>{" "}
            Protect You
          </h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            With 5+ years of experience, our services are designed to give you
            the best support from start to finish. Every job matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, description, gradient, glow }) => (
            <div
              key={title}
              className="neu-out rounded-2xl p-6 neu-hover group transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                style={{ boxShadow: `0 8px 20px ${glow}33` }}
              >
                <span className="text-white text-2xl">{icon}</span>
              </div>

              {/* Divider */}
              <div
                className="h-0.5 w-12 rounded-full mb-4 opacity-60"
                style={{ background: `linear-gradient(to right, transparent, ${glow})` }}
              />

              <h5 className="text-[#2d3748] mb-2">{title}</h5>
              <p className="text-[#718096] p2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

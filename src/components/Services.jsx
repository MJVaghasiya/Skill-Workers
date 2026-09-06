import React from "react";
import {
  RiCustomerService2Line,
  RiMapPinLine,
} from "react-icons/ri";
import { TfiMobile } from "react-icons/tfi";
import { TbTaxPound } from "react-icons/tb";


const TrainingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L3 8L12 13L21 8L12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 10.5V15C7 16.5 9.5 18 12 18C14.5 18 17 16.5 17 15V10.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 8V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Dbs = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.35 3.836q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414q.564.035 1.124.08c1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5l3-3.75" />
  </svg>


)


const services = [
  {
    icon: <RiCustomerService2Line />,
    title: "24/7 Support",
    description: "We are available around the clock for any kind of support you need.",
    gradient: "from-primary-light to-primary",
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
    icon: <TfiMobile />,
    title: "Mobile App",
    description: "Our mobile app is making life easy for workers on the go.",
    gradient: "from-[#43AF74] to-[#36D97C]",
    glow: "#36D97C",
  },
  {
    icon: <TrainingIcon />,
    title: "Training",
    description: "We provide all types of training, face to face and online, for all roles.",
    gradient: "from-[#2980b9] to-[#5dade2]",
    glow: "#2980b9",
  },
  {
    icon: <TbTaxPound />,
    title: "Pay Rates",
    description: "We are providing great pay rates for all the roles across all sectors.",
    gradient: "from-[#8e44ad] to-[#c39bd3]",
    glow: "#8e44ad",
  },
  {
    icon: <Dbs />,
    title: "DBS Checks",
    description: "We help you to apply for DBS and right to work checks seamlessly.",
    gradient: "from-[#007991] to-[#44a5b9]",
    glow: "#007991",
  },
];

const Services = () => {
  return (
    <section id="Services">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="p3 font-medium text-primary">
              Our Services
            </span>
          </div>
          <h2 className="text-black-100 mb-3 sm:mb-4">
           We Support Your {" "}
            <span className="text-gradient-primary">Career Journey</span>
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto px-2 p">
We connect skilled workers with trusted employers, providing guidance and support throughout every stage of their career journey.          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map(({ icon, title, description, gradient, glow }) => (
            <div
              key={title}
              className="neu-out rounded-2xl p-6 sm:p-7 lg:p-8 neu-hover group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div
                  className={`p-3 sm:p-3.5 w-fit h-fit rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105`}
                >
                  <span className="text-white services-icon">{icon}</span>
                </div>

                <h5 className="text-black-100 mb-2">{title}</h5>
                {/* Divider */}
                <div
                  className="h-0.5 w-[30%] rounded-full mb-3 sm:mb-4 opacity-60"
                  style={{ background: `linear-gradient(to right, transparent, ${glow})` }}
                />

                <p className="text-slate-100 p2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

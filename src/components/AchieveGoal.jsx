import React from "react";
import goalImg from "../../dist/assets/team.webp";
// import { IoMdCheckmark } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  { label: "Join Us", color: "#0B81F7" },
  { label: "Work With Us", color: "#9B68E6" },
  { label: "Achieve Target", color: "#2980b9" },
];

const benefits = [
  "Flexibility in working hours",
  "24/7 dedicated support",
  "Find the perfect role for you",
];

const AchieveGoal = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="p3 font-medium text-primary">
                We're always with you
              </span>
            </div>

            <h4 className="text-black-100 mb-8 max-w-4/5 w-full">
              Together, We Can Do{" "}
              <span className="text-gradient-primary">Great Things</span>
            </h4>

            {/* Steps */}
            <div className="flex flex-wrap items-center gap-3 mb-8 py-4 px-6 w-fit neu-in rounded-2xl">
              {steps.map(({ label, color }, i) => (
                <React.Fragment key={label}>
                  <span
                    className="font-medium p3"
                    style={{ color }}
                  >
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <MdOutlineKeyboardDoubleArrowRight className="text-black/60 text-xl" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Benefits */}
            <ul className="space-y-5 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 p2">
                    <IoMdCheckmarkCircleOutline className="text-primary font-bold text-[28px]" />
                  <span className="text-[#4a5568] font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://skillworkers.co.uk/candidate/"
              target="_blank"
              rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 w-fit"
            >
              Join Our Team
            </a>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            {/* Image frame */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={goalImg}
                alt="Achieve Goal"
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieveGoal;

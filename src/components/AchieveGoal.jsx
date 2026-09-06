import React from "react";
import goalImg from "/assets/team.webp";
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="p3 font-medium text-primary">
                We're always with you
              </span>
            </div>

            <h3 className="text-black-100 mb-6 sm:mb-8 max-w-xl w-full">
              Together, We Can Do{" "}
              <span className="text-gradient-primary">Great Things</span>
            </h3>
            <p className="mb-6 sm:mb-8 max-w-2xl w-full">
              At Skill Workers, we connect talented individuals with trusted employers across a wide range of industries. From job search to placement, our team provides expert guidance and ongoing support to help you build a successful career.
            </p>
            {/* Steps */}
            <div className="flex flex-wrap items-center justify-center xs:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 py-3 px-4 sm:py-3.5 sm:px-6 w-full xs:w-fit neu-in rounded-2xl">
              {steps.map(({ label, color }, i) => (
                <React.Fragment key={label}>
                  <span
                    className="font-semibold p3"
                    style={{ color }}
                  >
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <MdOutlineKeyboardDoubleArrowRight className="text-black/50 text-lg" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Benefits */}
            {/* <ul className="space-y-3.5 sm:space-y-5 mb-6 sm:mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 p2">
                  <IoMdCheckmarkCircleOutline className="text-primary font-bold text-xl sm:text-2xl shrink-0" />
                  <span className="text-[#4a5568] font-medium">{benefit}</span>
                </li>
              ))}
            </ul> */}

            <a
              href="https://skillworkers.co.uk/candidate/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn neu-btn-primary transition-all duration-300 w-full xs:w-auto text-sm font-semibold px-6 py-3"
            >
              Join Our Team
            </a>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            {/* Image frame */}
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
              <img
                src={goalImg}
                alt="Achieve Goal"
                className="w-full h-auto object-contain max-h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieveGoal;

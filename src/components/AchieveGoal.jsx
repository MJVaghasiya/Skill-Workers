import React from "react";
import goalImg from "../assets/Capture-removebg-preview.png";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  { label: "Join Us", color: "#0B81F7" },
  { label: "Work With Us", color: "#9B68E6" },
  { label: "Achieve Target", color: "#36D97C" },
];

const benefits = [
  "Flexibility in working hours",
  "24/7 dedicated support",
  "Find the perfect role for you",
];

const AchieveGoal = () => {
  return (
    <section className="py-20 bg-[#e0e5ec]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="neu-out rounded-3xl p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 neu-in rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0B81F7] pulse-dot" />
                <span className="text-sm font-semibold text-[#0B81F7]">
                  We're always with you
                </span>
              </div>

              <h2 className="text-[#2d3748] mb-5">
                Together, We Can Do{" "}
                <span className="text-gradient-primary">Great Things</span>
              </h2>

              {/* Steps */}
              <div className="flex flex-wrap items-center gap-3 mb-8 p-4 neu-in rounded-2xl">
                {steps.map(({ label, color }, i) => (
                  <React.Fragment key={label}>
                    <span
                      className="font-semibold text-sm"
                      style={{ color }}
                    >
                      {label}
                    </span>
                    {i < steps.length - 1 && (
                      <FaArrowRight className="text-[#b8bec7] text-xs" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl neu-out-sm flex items-center justify-center flex-shrink-0">
                      <IoMdCheckmark className="text-[#0B81F7] font-bold" />
                    </div>
                    <span className="text-[#4a5568] font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 neu-btn-primary text-white px-8 py-4 rounded-2xl font-semibold hover:text-white transition-all duration-300"
              >
                Join Our Team <FaArrowRight className="text-sm" />
              </a>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center py-6">
              {/* Image frame */}
              <div className="relative w-full max-w-[420px] neu-out-lg rounded-3xl overflow-hidden flex items-center justify-center p-6">
                <img
                  src={goalImg}
                  alt="Achieve Goal"
                  className="w-full h-auto object-contain max-h-[340px]"
                />
              </div>

              {/* Floating stat cards */}
              <div className="absolute top-0 -right-2 neu-out rounded-2xl px-4 py-3 text-center">
                <div className="text-lg font-bold text-gradient-primary font-display">5+</div>
                <div className="text-xs text-[#718096]">Years Exp.</div>
              </div>
              <div className="absolute -bottom-2 -left-2 neu-out rounded-2xl px-4 py-3 text-center">
                <div className="text-lg font-bold text-gradient-primary font-display">500+</div>
                <div className="text-xs text-[#718096]">Placements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieveGoal;

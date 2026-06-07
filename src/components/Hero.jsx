import React, { useState, useEffect } from "react";
import heroBanner from "../assets/hero-banner.webp";
import {
  RiCustomerService2Fill,
  RiMapPinLine,
} from "react-icons/ri";

const stats = [
  { value: "500+", label: "Placements" },
  { value: "5+", label: "Years Exp." },
  { value: "24/7", label: "Support" },
  { value: "UK Wide", label: "Coverage" },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-[#e0e5ec] pt-24 pb-16 flex items-center overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B81F7] pulse-dot" />
              <span className="text-sm font-medium text-[#0B81F7]">
                UK's Best Recruitment Agency
              </span>
            </div>

            <h1 className="text-[#2d3748] mb-5">
              Empowering{" "}
              <span className="text-gradient-primary">Lives</span>{" "}
              Through{" "}
              <span className="relative">
                Work
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gradient rounded-full opacity-40" />
              </span>
            </h1>

            <p className="text-[#718096] mb-8 max-w-xl">
              The most trusted healthcare & support workers recruitment agency in the
              UK. We connect skilled professionals with meaningful opportunities
              across the nation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn-primary text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:text-white"
              >
                Get Started Now →
              </a>
              <a
                href="#Services"
                className="neu-btn px-8 py-4 rounded-2xl font-semibold text-base text-[#2d3748] hover:text-[#0B81F7]"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="neu-in rounded-xl px-5 py-3 text-center min-w-[80px]">
                  <div className="text-xl font-bold text-gradient-primary font-display" >
                    {value}
                  </div>
                  <div className="text-xs text-[#718096] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Decorative outer ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#0B81F7]/20 spin-slow" />
            <div className="absolute w-[340px] h-[340px] rounded-full border border-[#0B81F7]/10 spin-slow" style={{ animationDirection: "reverse" }} />

            {/* Main image container */}
            <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
              <div className="w-full h-full rounded-full neu-out-lg overflow-hidden flex items-center justify-center">
                <img
                  src={heroBanner}
                  alt="Skill Workers Hero"
                  className="w-[90%] h-[90%] object-cover rounded-full"
                />
              </div>

              {/* Floating badge – Available 24/7 */}
              <div className="absolute -left-8 top-12 neu-out rounded-2xl px-4 py-3 flex items-center gap-2 shadow-lg">
                <div className="w-8 h-8 rounded-xl bg-primary-gradient flex items-center justify-center">
                  <RiCustomerService2Fill className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2d3748]">Available</div>
                  <div className="text-[10px] text-[#0B81F7] font-semibold">24/7 Support</div>
                </div>
              </div>

              {/* Floating badge – UK Wide */}
              <div className="absolute -right-6 bottom-16 neu-out rounded-2xl px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary-gradient flex items-center justify-center">
                  <RiMapPinLine className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2d3748]">UK Wide</div>
                  <div className="text-[10px] text-[#718096]">Coverage</div>
                </div>
              </div>

              {/* Floating badge – 500+ Placed */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 neu-out rounded-2xl px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
                <span className="text-sm font-semibold text-[#2d3748]">500+ Workers Placed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

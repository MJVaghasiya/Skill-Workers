import React, { useState, useEffect } from "react";
import heroBanner from "/assets/hero-banner.webp";
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
    <section className="flex items-center overflow-hidden pt-7 ">
      <div className="container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-4 py-2 mb-10">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="p3 font-medium text-primary">
                UK's Best Recruitment Agency
              </span>
            </div>

            <h1 className="text-black-100 mb-8">
              Empowering{" "}
              <span className="text-gradient-primary">Lives</span>{" "}
              Through{" "}
              <span className="relative">
                Work
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gradient rounded-full opacity-40" />
              </span>
            </h1>

            <p className="text-slate-500 mb-10 max-w-[80%] w-full p2">
              The most trusted healthcare & support workers recruitment agency in the
              UK. We connect skilled professionals with meaningful opportunities
              across the nation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-8 mb-10">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300"
              >
                Get Started Now
              </a>
              <a
                href="#Services"
                className="btn neu-btn"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="neu-in rounded-xl px-6 py-3 text-center min-w-[80px]">
                  <div className="p2 font-bold text-primary font-display mb-1" >
                    {value}
                  </div>
                  <div className="p3 text-slate-500 font-medium">{label}</div>
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
            {/* Main image container */}
            <div className="relative lg:size-[450px] size-[320px]">
              <div className="w-full h-full rounded-full neu-out-lg spin-slow overflow-hidden flex items-center justify-center">
                <img
                  src={heroBanner}
                  alt="Skill Workers Hero"
                  className="w-[90%] h-[90%] object-cover rounded-full"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
import heroBanner from "/assets/hero-banner.webp";

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
    <section className="flex items-center overflow-hidden pt-4 sm:pt-6 lg:pt-8">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="p3 font-medium text-primary">
                UK's Best Recruitment Agency
              </span>
            </div>

            <h1 className="text-black-100 mb-4 sm:mb-6">
              Empowering{" "}
              <span className="text-gradient-primary">Lives</span>{" "}
              Through{" "}
              <span className="relative inline-block">
                Work
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gradient rounded-full opacity-40" />
              </span>
            </h1>

            <p className="text-slate-100 mb-6 sm:mb-8 max-w-full lg:max-w-[90%] p">
              The most trusted healthcare & support workers recruitment agency in the
              UK. We connect skilled professionals with meaningful opportunities
              across the nation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 w-full xs:w-auto">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 w-full xs:w-auto text-sm font-semibold px-6 py-3"
              >
                Get Started Now
              </a>
              <a
                href="#Services"
                className="btn neu-btn w-full xs:w-auto text-sm font-medium px-6 py-3"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full">
              {stats.map(({ value, label }) => (
                <div key={label} className="neu-in rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-center">
                  <div className="p2 font-bold text-primary font-display mb-0.5">
                    {value}
                  </div>
                  <div className="p3 text-slate-100 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 py-4 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main image container */}
            <div className="relative w-[250px] h-[250px] xs:w-[290px] xs:h-[290px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] lg:w-[440px] lg:h-[440px] max-w-[85vw] max-h-[85vw] mx-auto">
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

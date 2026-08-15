import React, { useState } from "react";
import img1 from "/assets/Care-at-home.webp";
import img2 from "/assets/personal-support-worker.webp";
import img3 from "/assets/hospital-service.webp";
import img4 from "/assets/nurse1.webp";
import img5 from "/assets/domestic-worker.webp";
import img6 from "/assets/chef.webp";
import img7 from "/assets/clining.webp";
import img8 from "/assets/delievery-driver.webp";
import img9 from "/assets/Shop-service.webp";
import { FaArrowRight } from "react-icons/fa";

const roles = [
  { img: img1, title: "Health Care Assistance", tag: "Healthcare" },
  { img: img2, title: "Support Worker", tag: "Social Care" },
  { img: img3, title: "Hospital Service", tag: "Healthcare" },
  { img: img4, title: "Nurse", tag: "Healthcare" },
  { img: img5, title: "Domestic Worker", tag: "Domestic" },
  { img: img6, title: "Chef", tag: "Hospitality" },
  { img: img7, title: "Cleaning Service", tag: "Facilities" },
  { img: img8, title: "Delivery Driver", tag: "Logistics" },
  { img: img9, title: "Shop Keeper", tag: "Retail" },
];

const FitIn = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="p3 font-medium text-primary">
              Explore Roles
            </span>
          </div>
          <h2 className="text-black-100 mb-5.5">Where Do You <span className="text-gradient-primary">Fit In?</span></h2>
          <p className="text-slate-100 max-w-[60%] mx-auto">
            Delivering quality skilled workers through diverse people in diverse roles — there's a
            good chance we'll have an opportunity perfectly suited to you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {roles.map(({ img, title, tag }, i) => (
            <div
              key={title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="neu-out rounded-2xl overflow-hidden neu-hover cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden before:block before:content-[''] before:pt-[66%]">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute top-0 left-0"
                />
                {/* Tag */}
                <div className="absolute top-3 left-3 neu-out-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-primary">{tag}</span>
                </div>
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex items-end justify-center pb-4 transition-opacity duration-300 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href="https://skillworkers.co.uk/candidate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-sm font-semibold hover:text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl"
                  >
                    Apply Now <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>

              {/* Label */}
              <div className="px-4 py-3 bg-white">
                <h6 className="text-black-100 text-sm font-semibold">{title}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://skillworkers.co.uk/candidate/"
            target="_blank"
            rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 w-fit mx-auto">
            View All Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default FitIn;

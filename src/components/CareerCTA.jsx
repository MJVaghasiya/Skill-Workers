import React from "react";
import { Briefcase, Mail } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden neu-out-sm rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 text-center">

          {/* Decorative soft gradient blobs, kept subtle to match neumorphic bg */}
          <span className="pointer-events-none absolute -left-16 -top-16 size-56 sm:size-72 rounded-full bg-primary/10 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-20 -right-10 size-56 sm:size-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="p3 font-medium text-primary">Take The Next Step</span>
            </div>

            <h2 className="text-black-100 mb-4 sm:mb-6">
              Ready to Start Your{" "}
              <span className="text-gradient-primary">Career Journey?</span>
            </h2>

            <p className="text-slate-100 mb-8 sm:mb-10 max-w-xl mx-auto p">
              Find opportunities across healthcare, hospitality, logistics, and
              more.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 w-full xs:w-auto inline-flex items-center justify-center gap-2"
              >
                <Briefcase className="size-4" />
                Browse Jobs
              </a>
              <a
                href="#Contact"
                className="btn neu-btn w-full xs:w-auto inline-flex items-center justify-center gap-2"
              >
                <Mail className="size-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;

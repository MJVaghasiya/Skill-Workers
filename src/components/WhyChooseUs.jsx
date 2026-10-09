import React from "react";
import { ShieldCheck, HeartHandshake, Compass, TrendingUp } from "lucide-react";
import whyChooseImg from "../../dist/assets/why-choose-us.webp";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Employers",
    description: "Work with reputable organisations across the UK.",
    bg: "bg-blue-500",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "We're with you at every step of your journey.",
    bg: "bg-purple-500",
  },
  {
    icon: Compass,
    title: "Flexible Opportunities",
    description: "Find roles that fit your lifestyle and goals.",
    bg: "bg-green-500",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Build a better future with ongoing guidance.",
    bg: "bg-teal-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="flex items-center w-full gap-10 lg:gap-16 justify-between">

          {/* Image - left on desktop, on top on mobile */}
          <div className="relative w-[40%] flex justify-center lg:justify-start">
            <div className="relative w-full h-full rounded-3xl beore:content-[''] before:relative before:pt-[125%] before:block overflow-hidden block">
              <img
                src={whyChooseImg}
                alt="Why choose Skill Workers"
                className="w-full h-full object-cover absolute top-0 left-0"
              />

              {/* Floating badge chip */}
              {/* <div className="absolute -bottom-5 -right-4 sm:-right-6 flex items-center gap-3 neu-out-sm rounded-xl bg-white px-4 py-3">
                <div className="flex size-10 items-center justify-center rounded-full neu-in">
                  <HeartHandshake className="size-5 text-primary" />
                </div>
                <div className="leading-tight text-left">
                  <p className="p3 font-semibold text-black-100">People Support</p>
                  <p className="p3 font-semibold text-black-100">Better Futures</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Content - right on desktop, below image on mobile */}
          <div className="w-1/2">
            {/* <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="p3 font-medium text-primary">Why Choose Us</span>
            </div> */}

            <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <span className="size-2 rounded-full bg-primary pulse-dot" />
              <span className="p3 font-medium text-primary">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-black-100 mb-3 sm:mb-4">
              Why Choose{" "}
              <span className="text-gradient-primary">Skill Workers</span>?
            </h2>

            <p className="mb-6 sm:mb-8 p">
              We go beyond recruitment. Our focus is on people, support and
              opportunities that make a real difference in your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10 about-cards">
              {features.map(({ icon: Icon, title, description, bg }) => (
                <div key={title} className="cards shadow-neu-out-sm">
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                    <Icon className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="p2 font-medium mb-1">{title}</h3>
                    <p className="p3 text-gray-500 font-normal">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#About"
              className="btn neu-btn-primary transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

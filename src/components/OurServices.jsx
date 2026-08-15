import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import img1 from "/assets/our-services.jpeg";
import {
  PiFlowerFill,
  PiStarFourFill,
  PiDiamondsFourFill,
} from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";
import { GiSupersonicArrow } from "react-icons/gi";
import { BiSolidMapPin } from "react-icons/bi";

const serviceCards = [
  {
    icon: <PiFlowerFill />,
    title: "Only the Best",
    description:
      "We offer only the best healthcare, support workers and related services to our clients. Our team is dedicated to providing excellent quality services that matter to our visitors, customers and clients.",
    color: "#0B81F7",
    gradient: "from-primary-light to-primary",
  },
  {
    icon: <PiStarFourFill />,
    title: "Outstanding Quality",
    description:
      "We believe in providing outstanding quality healthcare support, support workers and related services that are fully insured to our clients. Our mission is to ensure the best care possible.",
    color: "#9B68E6",
    gradient: "from-[#7574E5] to-[#9B68E6]",
  },
  {
    icon: <SiBuymeacoffee />,
    title: "24/7 Care Services",
    description:
      "With our 24/7 care services, you can rest assured that your health matters will be addressed promptly without sacrificing your daily routines. We value your health and wellbeing.",
    color: "#36D97C",
    gradient: "from-[#43AF74] to-[#36D97C]",
  },
  {
    icon: <GiSupersonicArrow />,
    title: "Training",
    description:
      "We offer various types of training, both in-person and online. Face-to-face sessions, personal and direct. Virtual classes too, for those who elect. Our aim's to cater to all learning styles.",
    color: "#2980b9",
    gradient: "from-[#2980b9] to-[#5dade2]",
  },
  {
    icon: <PiDiamondsFourFill />,
    title: "Payment Methods",
    description:
      "We accept a range of payment methods to make it as easy as possible for you to pay for our services. These include credit and debit cards, PayPal, and bank transfers.",
    color: "#8e44ad",
    gradient: "from-[#8e44ad] to-[#c39bd3]",
  },
  {
    icon: <BiSolidMapPin />,
    title: "Near Your Area",
    description:
      "We prioritize finding jobs close to your area. Your convenience is paramount to us. Our commitment is to ensure accessibility to the workplace. We aim to locate opportunities nearby for you.",
    color: "#007991",
    gradient: "from-[#007991] to-[#44a5b9]",
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen pt-40">
      <Navbar />
      <PageHeader title="Services of Skill Workers" breadcrumb="Services" />

      {/* Intro */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="p3 font-medium text-primary">
                  What We Offer
                </span>
              </div>

              <h2 className="text-black-100 mb-5">Our Services</h2>
              <p className="text-slate-100">
                At SkillWorkers, we offer guaranteed excellence in healthcare support,
                support workers and related services. We pride ourselves on being different from the
                competition by providing unique and valuable aspects that differentiate us from others.
              </p>
            </div>
            <div className="neu-out rounded-3xl overflow-hidden h-64 lg:h-auto">
              <img src={img1} alt="Our Services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map(({ icon, title, description, gradient, color }) => (
              <div key={title} className="neu-out rounded-2xl p-7 neu-hover group">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 24px ${color}33` }}
                >
                  <span className="text-white text-2xl">{icon}</span>
                </div>
                {/* Accent line */}
                <div
                  className="h-0.5 w-10 rounded-full mb-4"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
                />
                <h5 className="text-black-100 mb-3">{title}</h5>
                <p className="text-slate-100 p2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container">
          <div className="neu-out rounded-3xl p-10 lg:p-14 text-center">
            <h3 className="text-black-100 mb-5.5">
              Ready to Find Your{" "}
              <span className="text-gradient-primary">Perfect Role?</span>
            </h3>
            <p className="text-slate-100 max-w-xl mx-auto mb-8">
              Join hundreds of workers who have found meaningful employment through SkillWorkers.
            </p>
            <a
              href="https://skillworkers.co.uk/candidate/"
              target="_blank"
              rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 w-fit mx-auto">
              Apply Now 
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;

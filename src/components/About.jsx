import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import img1 from "/assets/Happy-Clients.webp";
import img2 from "/assets/About1.webp";
import img3 from "/assets/About2.webp";
import { IoMdCheckmark } from "react-icons/io";
import { RiGroupLine, RiHeartLine, RiShieldCheckLine, RiAwardLine } from "react-icons/ri";

const values = [
  { icon: <RiHeartLine />, title: "Client First", desc: "We put our clients and workers at the heart of everything we do." },
  { icon: <RiShieldCheckLine />, title: "Fully Compliant", desc: "All workers are fully vetted, DBS checked and right-to-work verified." },
  { icon: <RiGroupLine />, title: "Team Driven", desc: "Our experienced team works tirelessly to match the right people to roles." },
  { icon: <RiAwardLine />, title: "5+ Years", desc: "Established track record of delivering quality staffing solutions across the UK." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-40">
      <Navbar />
      <PageHeader title="About Skill Workers" breadcrumb="About Us" />

      {/* Our Background */}
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="p3 font-medium text-primary">
                  Our Story
                </span>
              </div>
              <h2 className="text-black-100 mb-5">Our Background</h2>
              <p className="text-slate-100 mb-5">
                Welcome to SkillWorkers. We are a UK based company providing healthcare support,
                support workers and related services. Our mission is to offer the best workers to our clients.
              </p>
              <p className="text-slate-100 mb-8">
                We started our journey with a commitment to our core values and customers.
                Our team is dedicated to providing excellent quality services to our clients.
                We believe in <span className="text-primary font-semibold">EVERY JOB MATTERS</span>.
              </p>
              <ul className="space-y-3">
                {["UK Based Company", "Healthcare & Support Specialists", "Fully Vetted Workers", "5+ Years Experience"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg neu-out-sm flex items-center justify-center shrink-0">
                      <IoMdCheckmark className="text-primary text-sm" />
                    </div>
                    <span className="text-[#4a5568] font-medium p2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="neu-out rounded-3xl overflow-hidden">
              <img src={img1} alt="Happy Clients" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-black-100 mb-3">Our Core Values</h2>
            <p className="text-slate-100 max-w-xl mx-auto">
              Everything we do is driven by these principles that put people first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="neu-out rounded-2xl p-6 neu-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{icon}</span>
                </div>
                <h5 className="text-black-100 mb-2">{title}</h5>
                <p className="text-slate-100 p2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Quality Care */}
      <section className="mb-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Main image */}
                <div className="neu-out rounded-3xl overflow-hidden">
                  <img
                    src={img2}
                    alt="High Quality Care"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>

                {/* Overlapping accent image */}
                <div className="absolute -bottom-8 -right-6 w-2/3 sm:-right-10 neu-out rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={img3}
                    alt="Compassionate Home Care"
                    className="w-full h-40 sm:h-52 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="p3 font-medium text-primary">
                  Quality Care
                </span>
              </div>
              <h2 className="text-black-100 mb-5">
                High Quality{" "}
                <span className="text-gradient-primary">Home Care</span>
              </h2>
              <p className="text-slate-100 mb-5">
                SkillWorkers is the most reliable and trustworthy Home Health Care
                Service in the UK, providing excellent home care solutions to
                patients who are dealing with injury or illness.
              </p>
              <p className="text-slate-100">
                We are committed to meeting all of your health needs and go above
                and beyond to ensure you get the best care available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

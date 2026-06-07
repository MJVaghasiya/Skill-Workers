import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import img1 from "../assets/Happy-Clients.webp";
import img3 from "../assets/About2.webp";
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
    <div className="bg-[#e0e5ec] min-h-screen">
      <Navbar />
      <PageHeader title="About Skill Workers" breadcrumb="About Us" />

      {/* Our Background */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0B81F7]" />
                <span className="text-sm font-semibold text-[#0B81F7] uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-[#2d3748] mb-5">Our Background</h2>
              <p className="text-[#718096] mb-5">
                Welcome to SkillWorkers. We are a UK based company providing healthcare support,
                support workers and related services. Our mission is to offer the best workers to our clients.
              </p>
              <p className="text-[#718096] mb-8">
                We started our journey with a commitment to our core values and customers.
                Our team is dedicated to providing excellent quality services to our clients.
                We believe in <span className="text-[#0B81F7] font-semibold">EVERY JOB MATTERS</span>.
              </p>
              <ul className="space-y-3">
                {["UK Based Company", "Healthcare & Support Specialists", "Fully Vetted Workers", "5+ Years Experience"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg neu-out-sm flex items-center justify-center flex-shrink-0">
                      <IoMdCheckmark className="text-[#0B81F7] text-sm" />
                    </div>
                    <span className="text-[#4a5568] font-medium p2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="neu-out rounded-3xl overflow-hidden">
              <img src={img1} alt="Happy Clients" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#e0e5ec]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-[#2d3748] mb-3">Our Core Values</h2>
            <p className="text-[#718096] max-w-xl mx-auto">
              Everything we do is driven by these principles that put people first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="neu-out rounded-2xl p-6 neu-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{icon}</span>
                </div>
                <h5 className="text-[#2d3748] mb-2">{title}</h5>
                <p className="text-[#718096] p2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Quality Care */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 neu-out rounded-3xl overflow-hidden">
              <img src={img3} alt="High Quality Care" className="w-full h-[420px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 neu-out-sm rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#36D97C]" />
                <span className="text-sm font-semibold text-[#36D97C] uppercase tracking-wider">
                  Quality Care
                </span>
              </div>
              <h2 className="text-[#2d3748] mb-5">
                High Quality{" "}
                <span className="text-gradient-primary">Home Care</span>
              </h2>
              <p className="text-[#718096] mb-5">
                SkillWorkers is the most reliable and trustworthy Home Health Care Service in the UK,
                providing excellent home care solutions to patients who are dealing with injury or illness.
              </p>
              <p className="text-[#718096]">
                We are committed to meeting all of your health needs and go above and beyond to
                ensure you get the best care available.
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

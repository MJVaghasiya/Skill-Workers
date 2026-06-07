import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Icon PNG.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";

const socials = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "#", label: "WhatsApp" },
  { icon: <FaTelegramPlane />, href: "#", label: "Telegram" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#e0e5ec] pt-16 pb-6">
      <div className="container">
        <div className="neu-out rounded-3xl p-8 lg:p-12 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:pr-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl neu-in flex items-center justify-center">
                  <img src={logoImg} alt="Skill Workers" className="w-7 h-7 object-contain" />
                </div>
                <span className="font-display font-bold text-2xl text-[#2d3748]">
                  Skill<span className="text-[#0B81F7]">Workers</span>
                </span>
              </div>
              <p className="text-[#718096] text-[15px] leading-7 mb-6">
                <span className="font-bold text-[#0B81F7]">EVERY JOB MATTERS.</span>
                <br />
                Empowering lives through meaningful work across the UK.
              </p>
              {/* Socials */}
              <div className="flex gap-2 flex-wrap">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl neu-out-sm flex items-center justify-center text-[#718096] hover:text-[#0B81F7] transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div>
              <p className="text-[#2d3748] uppercase tracking-widest mb-5 font-bold text-base">Menu</p>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/AboutUs", label: "About Us" },
                  { to: "/OurServices", label: "Services" },
                  { to: "/Job", label: "Job Search" },
                  { to: "/ContactUs", label: "Contact Us" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-[#718096] hover:text-[#0B81F7] transition-colors duration-300 p2 underline-anim"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-[#2d3748] uppercase tracking-widest mb-5 font-bold text-base">Services</p>
              <ul className="space-y-3">
                {[
                  "Health Care Assistance",
                  "Support Worker",
                  "Social Care & Housing",
                  "Nursing",
                  "DBS Checks",
                  "Training",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-[#718096] p2 hover:text-[#0B81F7] transition-colors duration-300 cursor-pointer underline-anim">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
              <p className="text-[#2d3748] uppercase tracking-widest mb-5 font-bold text-base">Get In Touch</p>
              <ul className="space-y-3 mb-7">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg neu-in flex items-center justify-center flex-shrink-0">
                    <IoCallOutline className="text-[#0B81F7] text-sm" />
                  </div>
                  <a href="tel:02039852252" className="text-[#718096] p2 hover:text-[#0B81F7]">
                    02039852252
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg neu-in flex items-center justify-center flex-shrink-0">
                    <IoMailOutline className="text-[#0B81F7] text-sm" />
                  </div>
                  <a href="mailto:info@skillworkers.co.uk" className="text-[#718096] p2 hover:text-[#0B81F7]">
                    info@skillworkers.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg neu-in flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IoLocationOutline className="text-[#0B81F7] text-sm" />
                  </div>
                  <span className="text-[#718096] p2">United Kingdom</span>
                </li>
              </ul>

              {/* Newsletter */}
              <p className="text-[#2d3748] uppercase tracking-widest mb-3 font-bold text-base">Newsletter</p>
              {subscribed ? (
                <div className="neu-in rounded-xl px-4 py-3 text-[#36D97C] text-sm font-semibold">
                  ✓ Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email..."
                    className="neu-input flex-1 px-4 py-2.5 rounded-xl text-sm text-[#2d3748] placeholder-[#b8bec7] focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="neu-btn-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:text-white transition-all duration-300"
                  >
                    OK
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          <p className="text-[#718096] text-sm">
            © {new Date().getFullYear()} SkillWorkers. All rights reserved.
          </p>
          <p className="text-[#718096] text-sm">
            Made with ❤ in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

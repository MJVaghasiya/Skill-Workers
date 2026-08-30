import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "/assets/footer-logo.svg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";

const socials = [
  { icon: <FaFacebookF className="footer-social-icon"/>, href: "#", label: "Facebook" },
  { icon: <FaXTwitter className="footer-social-icon"/>, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn className="footer-social-icon"/>, href: "#", label: "LinkedIn" },
  { icon: <FaWhatsapp className="footer-social-icon"/>, href: "#", label: "WhatsApp" },
  { icon: <FaTelegramPlane className="footer-social-icon"/>, href: "#", label: "Telegram" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError("Enter your email");
      return;
    }

    setEmailError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer>
      <div className="container">
        <div className="neu-out rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 mb-6 sm:mb-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.4fr_0.7fr_0.8fr_1.5fr] items-start">

            {/* Brand */}
            <div className="w-full xl:pr-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <img src={logoImg} alt="Skill Workers" className="object-contain w-44 sm:w-52 lg:w-60 h-auto" />
              </div>

              <p className="p2 font-bold text-primary mb-2">EVERY JOB MATTERS.</p>
              <p className="text-slate-100 text-[13px] sm:text-[14px] 2xl:text-[15px] leading-relaxed mb-6 w-full max-w-[90%]">
                Empowering lives through meaningful work across the UK.
              </p>

              <div className="flex gap-2.5 sm:gap-3.5 flex-wrap">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu-out-sm flex items-center justify-center text-slate-100 hover:text-primary transition-colors duration-300 shrink-0"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div className="w-full">
              <p className="text-black-100 uppercase tracking-widest mb-4 sm:mb-5 font-bold text-xs sm:text-sm">Menu</p>
              <ul className="space-y-2.5 sm:space-y-3">
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
                      className="text-slate-100 hover:text-primary transition-colors duration-300 p2 underline-anim"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="w-full">
              <p className="text-black-100 uppercase tracking-widest mb-4 sm:mb-5 font-bold text-xs sm:text-sm">Services</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  "Health Care Assistance",
                  "Support Worker",
                  "Social Care & Housing",
                  "Nursing",
                  "DBS Checks",
                  "Training",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-slate-100 p2 hover:text-primary transition-colors duration-300 cursor-pointer underline-anim">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="w-full">
              <p className="text-black-100 uppercase tracking-widest mb-4 sm:mb-5 font-bold text-xs sm:text-sm">Get In Touch</p>
              <ul className="space-y-2.5 sm:space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <IoCallOutline className="text-primary text-lg sm:text-xl shrink-0" />
                  <a href="tel:02039852252" className="text-slate-100 p2 hover:text-primary break-all">
                    02039852252
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IoMailOutline className="text-primary text-lg sm:text-xl shrink-0" />
                  <a href="mailto:info@skillworkers.co.uk" className="text-slate-100 p2 hover:text-primary break-all">
                    info@skillworkers.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IoLocationOutline className="text-primary text-lg sm:text-xl shrink-0" />
                  <span className="text-slate-100 p2">United Kingdom</span>
                </li>
              </ul>

              <p className="p3 text-black-100 uppercase tracking-widest mb-2.5 font-bold">Newsletter</p>
              {subscribed ? (
                <div className="neu-in rounded-xl px-4 py-3 text-primary-light p3 font-semibold">
                  ✓ Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col xs:flex-row gap-2 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="Your email..."
                      className="neu-input flex-1 min-w-0 px-4 py-2.5 rounded-xl p3 text-black-100 placeholder-slate-100 focus:outline-none w-full"
                    />
                    <button
                      type="submit"
                      className="btn neu-btn-primary px-5 py-2.5 w-full xs:w-auto shrink-0 text-sm font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-xs sm:text-sm">{emailError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 px-2 text-center sm:text-left">
          <p className="text-slate-100 text-xs sm:text-sm">
            © {new Date().getFullYear()} SkillWorkers. All rights reserved.
          </p>
          <p className="text-slate-100 text-xs sm:text-sm">
            Made with ❤ in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

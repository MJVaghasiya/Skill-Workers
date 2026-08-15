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
        <div className="neu-out rounded-3xl p-6 sm:p-8 lg:p-12 mb-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.4fr_0.7fr_0.8fr_1.5fr] items-start">

            {/* Brand */}
            <div className="w-full xl:pr-8">
              <div className="flex items-center gap-3 mb-5">
                <img src={logoImg} alt="Skill Workers" className="object-contain w-52 sm:w-60 lg:w-70" />
              </div>

              <p className="p2 font-bold text-primary mb-2">EVERY JOB MATTERS.</p>
              <p className="text-slate-100 2xl:text-[15px] text-[14px] leading-7 mb-7 w-full max-w-[90%]">
                Empowering lives through meaningful work across the UK.
              </p>

              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="size-10 sm:size-11 rounded-xl neu-out-sm flex items-center justify-center text-slate-100 hover:text-primary transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div className="w-full">
              <p className="text-black-100 uppercase tracking-widest mb-5 font-bold">Menu</p>
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
              <p className="text-black-100 uppercase tracking-widest mb-5 font-bold">Services</p>
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
                    <span className="text-slate-100 p2 hover:text-primary transition-colors duration-300 cursor-pointer underline-anim">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="w-full">
              <p className="text-black-100 uppercase tracking-widest mb-5 font-bold">Get In Touch</p>
              <ul className="space-y-3 mb-7">
                <li className="flex items-center gap-3">
                  <IoCallOutline className="text-primary text-xl shrink-0" />
                  <a href="tel:02039852252" className="text-slate-100 p2 hover:text-primary break-all">
                    02039852252
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IoMailOutline className="text-primary text-xl shrink-0" />
                  <a href="mailto:info@skillworkers.co.uk" className="text-slate-100 p2 hover:text-primary break-all">
                    info@skillworkers.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IoLocationOutline className="text-primary text-xl shrink-0" />
                  <span className="text-slate-100 p2">United Kingdom</span>
                </li>
              </ul>

              <p className="p3 text-black-100 uppercase tracking-widest mb-3 font-bold">Newsletter</p>
              {subscribed ? (
                <div className="neu-in rounded-xl px-4 py-3 text-primary-light p3 font-semibold">
                  ✓ Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="Your email..."
                      className="neu-input flex-1 px-4 py-2.5 rounded-xl p3 text-black-100 placeholder-slate-100 focus:outline-none w-full"
                    />
                    <button
                      type="submit"
                      className="btn neu-btn-primary px-4 py-2.5 w-full sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          <p className="text-slate-100 text-sm">
            © {new Date().getFullYear()} SkillWorkers. All rights reserved.
          </p>
          <p className="text-slate-100 text-sm">
            Made with ❤ in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

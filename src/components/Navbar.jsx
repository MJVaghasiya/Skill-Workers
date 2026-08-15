import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "/assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/AboutUs", label: "About Us" },
    { to: "/OurServices", label: "Services" },
    { to: "/Job", label: "Job Search" },
    { to: "/ContactUs", label: "Contact" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "neu-out py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="md:w-1/5 sm:w-[35%] w-2/5">
                <img src={logoImg} alt="Skill Workers" className=" object-contain" />
              {/* <span
                className="font-display font-bold text-xl text-black-100 group-hover:text-primary transition-colors duration-300"
              >
                Skill<span className="text-primary">Workers</span>
              </span> */}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-xl p2 transition-all duration-300 ${
                    isActive(to)
                      ? "neu-in text-primary font-semibold"
                      : "text-[#4a5568] hover:text-primary hover:neu-out-sm"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 "
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl neu-out-sm flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-black-100 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black-100 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black-100 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-surface-bg transition-transform duration-500 ease-in-out neu-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-5 border-b border-black/10">
          <span className="p2 font-semibold text-black-100">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl neu-out-sm flex items-center justify-center text-black-100"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(to)
                  ? "neu-in text-primary font-semibold"
                  : "text-[#4a5568] hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://skillworkers.co.uk/candidate/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 neu-btn-primary text-white px-6 py-3 rounded-xl text-sm font-semibold text-center hover:text-white"
          >
            Apply Now →
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;

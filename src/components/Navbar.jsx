import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/Logo PNG.webp";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div
        className={`mx-4 lg:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled ? "neu-out" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl neu-out-sm flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Skill Workers" className="w-8 h-8 object-contain" />
              </div>
              <span
                className="font-display font-bold text-xl text-[#2d3748] group-hover:text-[#0B81F7] transition-colors duration-300"
              >
                Skill<span className="text-[#0B81F7]">Workers</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 underline-anim ${
                    isActive(to)
                      ? "neu-in text-[#0B81F7] font-semibold"
                      : "text-[#4a5568] hover:text-[#0B81F7] hover:neu-out-sm"
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
                className="neu-btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:text-white"
              >
                Apply Now →
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl neu-out-sm flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#2d3748] transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#2d3748] transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#2d3748] transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mx-4 mt-2 overflow-hidden transition-all duration-500 rounded-2xl ${
          isOpen ? "max-h-[400px] neu-out" : "max-h-0"
        }`}
      >
        <nav className="p-4 flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(to)
                  ? "neu-in text-[#0B81F7] font-semibold"
                  : "text-[#4a5568] hover:text-[#0B81F7]"
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
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "/assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "neu-out py-2 sm:py-2.5 lg:py-3 shadow-md"
            : "bg-surface-bg/90 backdrop-blur-md lg:bg-transparent py-2.5 sm:py-3.5 lg:py-5"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoImg}
                alt="Skill Workers"
                className="h-8 xs:h-9 sm:h-10 md:h-11 w-auto max-w-[160px] xs:max-w-[190px] sm:max-w-[230px] object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
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
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="https://skillworkers.co.uk/candidate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn neu-btn-primary transition-all duration-300 text-sm font-semibold px-6 py-2.5"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl neu-out-sm flex flex-col items-center justify-center gap-1.5 transition-all duration-300 shrink-0 cursor-pointer active:scale-95"
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
        className={`lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-surface-bg transition-transform duration-300 ease-in-out neu-out flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-black/10 shrink-0">
          <span className="text-base font-semibold text-black-100 font-display">Skill Workers</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl neu-out-sm flex items-center justify-center text-black-100 cursor-pointer hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2 flex-grow">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(to)
                  ? "neu-in text-primary font-semibold"
                  : "text-[#4a5568] hover:text-primary hover:neu-out-sm"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-black/10">
            <a
              href="https://skillworkers.co.uk/candidate/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn neu-btn-primary w-full text-white px-6 py-3 rounded-xl text-sm font-semibold text-center hover:text-white flex items-center justify-center gap-2"
            >
              Apply Now →
            </a>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;

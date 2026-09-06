import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import logoImg from "/assets/hero-banner.webp";
import {
  IoCallSharp,
  IoMail,
  IoLocationOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactInfo = [
  {
    icon: <IoCallSharp />,
    label: "Phone",
    value: "02039852252",
    href: "tel:02039852252",
    color: "#0B81F7",
    gradient: "from-primary-light to-primary",
  },
  {
    icon: <IoMail />,
    label: "Email",
    value: "info@skillworkers.co.uk",
    href: "mailto:info@skillworkers.co.uk",
    color: "#9B68E6",
    gradient: "from-[#7574E5] to-[#9B68E6]",
  },
  {
    icon: <IoLocationOutline />,
    label: "Location",
    value: "United Kingdom",
    href: "#",
    color: "#36D97C",
    gradient: "from-[#43AF74] to-[#36D97C]",
  },
];

const socials = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <FaWhatsapp />, label: "WhatsApp" },
  { icon: <FaTelegramPlane />, label: "Telegram" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Enter your first name";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Enter your last name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Enter your email";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Enter your phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send("service_ce4ys97", "template_3ylrcpl", formData, "T_nEBjQvl28OUWv5U")
      .then(() => {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", { position: "top-right" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28">
      <Navbar />
      <ToastContainer />
      <PageHeader title="Contact Skill Workers" breadcrumb="Contact Us" />

      {/* Contact Cards */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12">
            {contactInfo.map(({ icon, label, value, href, gradient, color }) => (
              <a
                key={label}
                href={href}
                className="neu-out rounded-2xl p-4 sm:p-5 lg:p-6 flex items-center gap-4 neu-hover group hover:text-inherit"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 6px 16px ${color}33` }}
                >
                  <span className="text-white text-lg sm:text-xl">{icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="text-black-100 font-semibold text-sm truncate">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid gap-6 lg:grid-cols-5 lg:gap-8 xl:gap-10">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <div className="neu-out rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Logo spin */}
                  <div className="flex items-center justify-center mx-auto mb-5 sm:mb-6 spin-slow">
                    <img src={logoImg} alt="Skill Workers" className="size-10 sm:size-20 object-contain" />
                  </div>

                  <h4 className="text-black-100 text-center mb-2">Get In Touch</h4>
                  <p className="text-slate-100 text-center p2 mb-6 sm:mb-8">
                    If you need assistance earlier than scheduled, please leave your name and phone
                    number so we can contact you and figure out how to meet your needs.
                  </p>
                </div>

                {/* Social Icons */}
                <div className="mt-4 sm:mt-auto pt-4 border-t border-black/5">
                  <p className="text-xs font-bold text-slate-100 uppercase tracking-wider text-center mb-3 sm:mb-4">
                    Follow Us
                  </p>
                  <div className="flex justify-center gap-2.5 sm:gap-3 flex-wrap">
                    {socials.map(({ icon, label }) => (
                      <button
                        key={label}
                        aria-label={label}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu-btn flex items-center justify-center text-slate-100 hover:text-primary transition-colors duration-300 cursor-pointer"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <div className="neu-out rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8">
                <h4 className="text-black-100 mb-5 sm:mb-6">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                    {[
                      { name: "firstName", placeholder: "First Name", type: "text" },
                      { name: "lastName", placeholder: "Last Name", type: "text" },
                      { name: "email", placeholder: "Email Address", type: "email" },
                      { name: "phoneNumber", placeholder: "Phone Number", type: "tel" },
                    ].map(({ name, placeholder, type }) => (
                      <div key={name}>
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          className="neu-input w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-sm text-black-100 placeholder-[#4a5568] focus:outline-none"
                        />
                        {errors[name] && (
                          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors[name]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mb-5 sm:mb-6">
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="neu-input w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-sm text-black-100 placeholder-[#4a5568] focus:outline-none resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn neu-btn-primary transition-all duration-300 w-full sm:w-auto px-8 py-3 text-sm font-semibold"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

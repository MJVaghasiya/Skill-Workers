import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import logoImg from "../assets/Icon PNG.png";
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
    gradient: "from-[#1FACEA] to-[#0B81F7]",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_ce4ys97", "template_3ylrcpl", formData, "T_nEBjQvl28OUWv5U")
      .then(() => {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", { position: "top-right" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-[#e0e5ec] min-h-screen">
      <Navbar />
      <ToastContainer />
      <PageHeader title="Contact Skill Workers" breadcrumb="Contact Us" />

      {/* Contact Cards */}
      <section className="py-10">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {contactInfo.map(({ icon, label, value, href, gradient, color }) => (
              <a
                key={label}
                href={href}
                className="neu-out rounded-2xl p-6 flex items-center gap-4 neu-hover group hover:text-inherit"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 6px 16px ${color}33` }}
                >
                  <span className="text-white text-xl">{icon}</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#718096] uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="text-[#2d3748] font-semibold text-sm">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <div className="neu-out rounded-3xl p-8 h-full flex flex-col">
                {/* Logo spin */}
                <div className="w-20 h-20 rounded-full neu-out-sm flex items-center justify-center mx-auto mb-6 spin-slow">
                  <img src={logoImg} alt="Skill Workers" className="w-12 h-12 object-contain" />
                </div>

                <h4 className="text-[#2d3748] text-center mb-2">Get In Touch</h4>
                <p className="text-[#718096] text-center p2 mb-8">
                  If you need assistance earlier than scheduled, please leave your name and phone
                  number so we can contact you and figure out how to meet your needs.
                </p>

                {/* Social Icons */}
                <div className="mt-auto">
                  <p className="text-xs font-bold text-[#718096] uppercase tracking-wider text-center mb-4">
                    Follow Us
                  </p>
                  <div className="flex justify-center gap-3">
                    {socials.map(({ icon, label }) => (
                      <button
                        key={label}
                        aria-label={label}
                        className="w-10 h-10 rounded-xl neu-btn flex items-center justify-center text-[#718096] hover:text-[#0B81F7] transition-colors duration-300"
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
              <div className="neu-out rounded-3xl p-8">
                <h4 className="text-[#2d3748] mb-7">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
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
                          required
                          className="neu-input w-full px-5 py-3.5 rounded-xl text-sm text-[#2d3748] placeholder-[#4a5568] focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="neu-input w-full px-5 py-4 rounded-xl text-sm text-[#2d3748] placeholder-[#4a5568] focus:outline-none resize-none mb-6"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto neu-btn-primary text-white px-10 py-4 rounded-2xl font-semibold text-base hover:text-white transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message →"}
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

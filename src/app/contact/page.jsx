"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import { Mail, PhoneCall, MapPin } from "lucide-react";
import Footer from "../Components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", website: "", message: "" });
        setStatus("");
      } else {
        toast.error("❌ Failed to send message. Please try again.");
        setStatus("");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setStatus("");
    }
  };

  return (
    <div className="pt-28">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-50 text-gray-800">
        {/* Hero Banner */}
        <div className="relative h-80 w-full">
          <Image
            src="/img/bg/5.jpg"
            alt="Fabricshade Banner"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Let’s Get in Touch</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Whether you have a question, need a custom lamp shade, or just
              want to say hello <br/>we're always happy to hear from you. Reach out
              anytime and we’ll respond as soon as possible.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition">
                <PhoneCall className="text-gray-500"/>
                <a href="tel:+919892432682" className="font-semibold text-lg">
                   9892 4326 82
                </a>
              </div>
              <div className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition">
                <PhoneCall className="text-gray-500"/>
                <a href="tel:+918850440880" className="font-semibold text-lg">
                  8850 4408 80
                </a>
              </div>
              <div className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition">
                <Mail  className="text-gray-500"/>
                <a
                  href="mailto:info@fabricshadeindia.in"
                  className="font-medium text-lg"
                >
                  info@fabricshadeindia.in
                </a>
              </div>
            </div>

            <div className="mt-8 text-gray-700 space-y-2">
              <p className="font-medium text-lg">Our Office</p>
              <address className="not-italic leading-relaxed">
                Shiv Shankar Industrial Estate No.1, Building No.3,
                <br />
                Gala No.1, Behind Burma Shell Petrol Pump,
                <br />
                Naikpada Waliv, Vasai (East) - 401 208, India
              </address>
              <a
                href="https://maps.app.goo.gl/nLART8ZrR7XPiKbc9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-pink-600 hover:underline text-sm mt-2"
              >
                <MapPin size={16} /> View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white shadow-xl p-8 rounded-2xl border border-pink-100"
            >
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange}
                placeholder="Website (optional)"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-pink-700 transition-transform transform hover:scale-105 shadow-md"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

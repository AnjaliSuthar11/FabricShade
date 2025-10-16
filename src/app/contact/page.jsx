"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import { Mail, PhoneCall } from "lucide-react";
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

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      res.toast("✅ Message sent successfully!");
      setForm({ name: "", email: "", website: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-28">
    <Navbar/>
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <div className="relative h-80 w-full">
        <Image
          src="/img/bg/5.jpg"
          alt="Fabricshade Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Let’s Get in Touch</h2>
<p className="mb-6 text-gray-700">
  Whether you have a question, need a custom lamp shade, or just want to say hello — we're always happy to hear from you. Reach out to us anytime and we’ll respond as soon as possible.
</p>

          <h3 className="text-2xl font-bold text-pink-600">(+91)- 9892 4326 82</h3>
          <p className="text-gray-600 mb-8">info@fabricshadeindia.in</p>

          <div className="space-y-2 text-gray-700 mt-6">
  <p className="font-medium text-lg">Our Office</p>
  <address className="not-italic">
    Sai Shakti Building No.1, Shop No.1, Mahajanwadi, <br />
    Ovaripada, Dahisar (East), <br />
    Mumbai - 400068, India
  </address>
  <a
    href="https://www.google.com/maps/place/Mahajanwadi,+Ovaripada,+Dahisar+East,+Mumbai,+Maharashtra+400068,+India"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:underline text-sm"
  >
    📍 View on Google Maps
  </a>
</div>

        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-lg p-6 rounded-2xl">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <input
              name="website"
              type="text"
              value={form.website}
              onChange={handleChange}
              placeholder="Website (optional)"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-700 transition"
            >
              Send Message
            </button>

            {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
          </form>
        </div>
      </div>

      <Footer/>
    </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ Auto-hide success/error messages after 3 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/myzvzyqe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-300 mb-10">
          Have a question or want to collaborate? Fill out the form or reach me directly.
        </p>

        {/* ⭐ Contact Info Section */}
        <div className="bg-[#001121] border border-gray-700 rounded-xl p-6 mb-10 shadow-lg w-full">

          {/* PHONE */}
          <p className="text-lg font-semibold text-[#E9B949]">📞 Phone</p>
          <p className="text-gray-300 mb-4 break-words">
            +234 8140524754
          </p>

          {/* EMAIL */}
          <p className="text-lg font-semibold text-[#E9B949]">📧 Email</p>
          <p className="text-gray-300 break-words">
            adeyemiogunnaike02@gmail.com
          </p>
        </div>


        {/* ⭐ Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949] resize-none"
          />

          <button
            type="submit"
            className="bg-[#E9B949] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#d9a53c] transition-all"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* ⭐ Success / Error Messages */}
          {status === "success" && (
            <p className="text-green-400 mt-2 animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 mt-2">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

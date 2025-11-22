"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  // Variants
  const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <motion.section
      className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeUp}
        >
          Contact Me
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"
          variants={fadeUp}
        ></motion.div>

        <motion.p
          className="text-gray-300 mb-10"
          variants={fadeUp}
        >
          Have a question or want to collaborate? Fill out the form or reach me directly.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="bg-[#001121] border border-gray-700 rounded-xl p-6 mb-10 shadow-lg w-full"
          variants={fadeUp}
        >
          <p className="text-lg font-semibold text-[#E9B949]">📞 Phone</p>
          <p className="text-gray-300 mb-4 break-words">+234 8140524754</p>

          <p className="text-lg font-semibold text-[#E9B949]">📧 Email</p>
          <p className="text-gray-300 break-words">adeyemiogunnaike02@gmail.com</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          variants={fadeUp}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
            variants={fadeUp}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
            variants={fadeUp}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-[#001121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E9B949] resize-none"
            variants={fadeUp}
          />

          <motion.button
            type="submit"
            className="bg-[#E9B949] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#d9a53c] transition-all"
            variants={fadeUp}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <motion.p
              className="text-green-400 mt-2 animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              className="text-red-400 mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

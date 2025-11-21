'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here (API call or email service)
    alert('Message sent!'); // placeholder
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-300 mb-10">
          Have a question or want to collaborate? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

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
            Send Message
          </button>
        </form>

      
      </div>
    </section>
  );
}

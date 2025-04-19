
import React, { useState } from "react";
import { Button } from "react";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Message sent! (Placeholder functionality)");
      setFormData({ name: "", email: "", message: "" });
    };
  
    return (
      <section id="contact" className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-[#3A86FF] dark:text-[#A0C4FF] mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-slate-700 dark:text-white"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-slate-700 dark:text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-slate-700 dark:text-white"
          ></textarea>
          <Button type="submit" className="bg-[#3A86FF] hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Send Message
          </Button>
        </form>
      </section>
    );
  }

  export default Contact;
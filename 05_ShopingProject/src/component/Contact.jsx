import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully ✅");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300">
          We are here to help you with your fashion needs
        </p>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl text-black font-bold mb-6">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border text-black font-bold text-xl p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border text-black font-bold text-xl p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full text-black font-bold text-xl border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl text-black font-bold mb-2">📍 Address</h3>
            <p className="text-gray-600">
              FashionHub Store, Gurgaon, Haryana, India
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl text-black font-bold mb-2">📞 Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-black mb-2">📧 Email</h3>
            <p className="text-gray-600">support@fashionhub.com</p>
          </div>

          {/* Map placeholder */}
          <div className="bg-white p-4 rounded-xl shadow">
            <iframe
              title="map"
              className="w-full h-64 rounded-lg"
              src=""
              alt="Not Found"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

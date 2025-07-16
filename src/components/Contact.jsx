import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-8 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
        Contact Us
      </h2>

      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <p className="text-lg text-gray-300">
          Ready to find your dream home? Reach out to our team today.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md font-bold transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500">
          Or email us directly at:{" "}
          <a
            href="mailto:contact@anubisrealestate.com"
            className="text-orange-400 underline"
          >
            contact@anubisrealestate.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

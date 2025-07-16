import React from "react";

const Booking = () => {
  return (
    <section id="booking" className="px-8 py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Reserve Your Dream Property Now
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Book a private viewing, request a callback, or reserve your unit
          today. Just fill out your details and we’ll take care of the rest.
        </p>

        <form className="space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Select Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Chalet</option>
            <option>Studio</option>
          </select>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md font-bold transition-all duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;

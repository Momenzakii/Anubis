import React from "react";

const About = () => {
  return (
    <section id="about" className="px-8 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
        About ANUBIS
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          ANUBIS is a premium real estate agency based in Egypt, built with a
          passion for connecting people with unique and luxurious properties.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          We specialize in prime destinations like El Gouna, North Coast, and
          New Cairo. Whether you're buying, investing, or renting — we’re here
          to guide you through a seamless, trustworthy experience.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our team of experienced agents and real estate consultants is
          dedicated to delivering the highest level of service with honesty and
          efficiency.
        </p>
      </div>
    </section>
  );
};

export default About;

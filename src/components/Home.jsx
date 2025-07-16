import React from "react";
import Logo from "../assets/logo33.png";
import { Link } from "react-router-dom";
import Properties from "./Properties";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Booking from "./Booking";
import Blog from "./Blog";
import Footer from "./Footer";
import heroImage from "../assets/camel-surfboard-beach-against-clear-sky_1048944-14395678 (1).jpg";

const Home = () => {
  return (
    <div className="min-h-screen text-white font-sans bg-black">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black">
        <div>
          <img className="w-28" src={Logo} alt="ANUBIS Logo" />
        </div>

        <nav className="space-x-6 text-white">
          <a href="#home" className="hover:text-orange-300 transition">
            Home
          </a>
          <a href="#properties" className="hover:text-orange-300 transition">
            Properties
          </a>
          <a href="#about" className="hover:text-orange-300 transition">
            About
          </a>
          <a href="#contact" className="hover:text-orange-300 transition">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <Link to="/signup">
            <button className="bg-orange-400 text-black px-4 py-2 rounded-md font-bold hover:bg-orange-500 transition-all">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-gray-300 transition-all">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 py-20"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-orange-400 leading-tight">
            Discover Luxury Real Estate <br /> with{" "}
            <span className="text-white">ANUBIS</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Live like royalty in the heart of Egypt. Premium villas, apartments,
            and investments.
          </p>
          <a
            href="#properties"
            className="bg-orange-400 hover:bg-orange-600 text-black px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 inline-block"
          >
            View Properties
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="hero"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>
      <Properties />
      <Booking />
      <Blog />
      <Contact />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

// Navbar.jsx

import "./Navbar.css";

import { FaSearch } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  return (

    <nav className="navbar">

      {/* LEFT */}

      <div className="logo">

        <img
          src="/logo.png"
          alt="Help Mate Logo"
          className="logo-img"
        />

      </div>

      {/* CENTER */}

      <div className="nav-links">

        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/services" ? "active" : ""}
          to="/services"
        >
          Services
        </Link>

        <Link
          className={location.pathname === "/products" ? "active" : ""}
          to="/products"
        >
          Products
        </Link>

        <Link
          className={location.pathname === "/how-it-works" ? "active" : ""}
          to="/how-it-works"
        >
          How It Works
        </Link>

        <Link
          className={location.pathname === "/about" ? "active" : ""}
          to="/about"
        >
          About Us
        </Link>

        <Link
          className={location.pathname === "/contact" ? "active" : ""}
          to="/contact"
        >
          Contact
        </Link>

      </div>

      {/* RIGHT */}

      <div className="nav-buttons">

        <button className="search-btn">
          <FaSearch />
        </button>

        <button className="explore-btn">
          Explore eApps →
        </button>

        <button className="contact-btn">
          💬 Contact Us
        </button>

      </div>

    </nav>

  );
}

export default Navbar;
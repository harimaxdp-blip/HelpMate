import "./Navbar.css"

import { FaSearch } from "react-icons/fa"

function Navbar() {

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

        <a className="active" href="#">
          Home
        </a>

        <a href="#">
          Services
        </a>

        <a href="#">
          Products
        </a>

        <a href="#">
          How It Works
        </a>

        <a href="#">
          About Us
        </a>

        <a href="#">
          Contact
        </a>

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

  )
}

export default Navbar
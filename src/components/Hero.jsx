import "./Hero.css"

import { motion } from "framer-motion"
import { FaPlayCircle } from "react-icons/fa"

import Navbar from "./Navbar"

import handshakeVideo from "../assets/handshake.mp4"

function Hero() {

  return (

    <div className="hero-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero-section">

        {/* LEFT */}
        <div className="hero-left">

          <div className="mini-badge">
            ⚡ Smart Apps. Real Solutions.
          </div>

          <h1>
            We build & sell
            <br />
            powerful <span>eApps</span>
            <br />
            for your business
          </h1>

          <p>
            Ready-to-use web applications built with modern
            tech to help you save time, reduce costs,
            and grow faster.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button className="explore-btn">
              Explore eApps →
            </button>

            <button className="work-btn">

              <FaPlayCircle />

              How It Works

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <motion.video
            src={handshakeVideo}
            autoPlay
            muted
            loop
            playsInline

            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}

            transition={{
              duration:1.2
            }}
          />

        </div>

      </section>

    </div>

  )
}

export default Hero
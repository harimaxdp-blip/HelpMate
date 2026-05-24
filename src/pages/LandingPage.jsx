import "./LandingPage.css"
import { useEffect, useRef, useState } from "react"

import u1 from "../assets/u1.jpg"
import u2 from "../assets/u2.jpg"
import u3 from "../assets/u3.jpg"
import u4 from "../assets/u4.jpg"

import googleLogo from "../assets/google.png"
import microsoftLogo from "../assets/microsoft.png"
import airbnbLogo from "../assets/airbnb.png"
import shopifyLogo from "../assets/shopify.png"
import stripeLogo from "../assets/stripe.png"
import dropboxLogo from "../assets/dropbox.png"
import notionLogo from "../assets/notion.png"
import slackLogo from "../assets/slack.png"

import Navbar from "../components/Navbar"
import { FaPlayCircle } from "react-icons/fa"

import handshakeVideo from "../assets/handshake.mp4"

import cubeImg from "../assets/cube.png"
import usersImg from "../assets/users.png"
import chartImg from "../assets/chart.png"
import supportImg from "../assets/support.png"

import rocketImg from "../assets/rocket.png"
import shieldImg from "../assets/shield.png"
import tagImg from "../assets/tag.png"
import updateImg from "../assets/update.png"
import headphoneImg from "../assets/headphone.png"

/* ── COUNT-UP HOOK ── */
function useCountUp(target, duration = 2000, suffix = "+") {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(target)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, display: count + suffix }
}

/* ── COMPONENT ── */
function LandingPage() {
useEffect(() => {
  const cards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.add("show");
          }, 200);

        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  return () => observer.disconnect();
}, []);
  const s1 = useCountUp(50, 2000, "+")
  const s2 = useCountUp(100, 2000, "+")
  const s3 = useCountUp(98, 2000, "%")

  return (
    <div className="landing-page">

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

            <button className="hero-explore-btn">
              Explore eApps →
            </button>

            <button className="hero-work-btn">
              <FaPlayCircle />
              How It Works
            </button>

            {/* MOBILE CUSTOMERS */}
            <div className="mobile-customers">

              <div className="mobile-shield">
                <img
                  src={shieldImg}
                  alt="Shield Icon"
                  className="shield-img"
                />
              </div>

              <div className="mobile-customers-content">
                <p>Trusted by businesses worldwide</p>
                <div className="mobile-users">
                  <img src={u1} alt="" />
                  <img src={u2} alt="" />
                  <img src={u3} alt="" />
                  <img src={u4} alt="" />
                  <span>100+ Happy Customers</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT — VIDEO */}
        <div className="hero-right">
          <video
            src={handshakeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-box" ref={s1.ref}>
          <img src={cubeImg} alt="" className="stat-img" />
          <div className="stat-text">
            <h2>{s1.display}</h2>
            <p>Premium eApps</p>
          </div>
        </div>

        <div className="stat-box" ref={s2.ref}>
          <img src={usersImg} alt="" className="stat-img" />
          <div className="stat-text">
            <h2>{s2.display}</h2>
            <p>Happy Customers</p>
          </div>
        </div>

        <div className="stat-box" ref={s3.ref}>
          <img src={chartImg} alt="" className="stat-img" />
          <div className="stat-text">
            <h2>{s3.display}</h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        <div className="stat-box">
          <img src={supportImg} alt="" className="stat-img" />
          <div className="stat-text">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

      </section>

      {/* WHY SECTION */}
      <section className="why-section">

        <h2>
          Why Choose <span>Help Mate?</span>
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <img src={rocketImg} alt="" className="feature-img" />
            <h3 className="feature-title">Ready to Launch</h3>
            <p className="feature-desc">
              Pre-built, tested & ready to use applications.
            </p>
          </div>

          <div className="feature-card">
            <img src={shieldImg} alt="" className="feature-img" />
            <h3 className="feature-title">Modern & Secure</h3>
            <p className="feature-desc">
              Built with latest tech and security standards.
            </p>
          </div>

          <div className="feature-card">
            <img src={tagImg} alt="" className="feature-img" />
            <h3 className="feature-title">Affordable Pricing</h3>
            <p className="feature-desc">
              High quality eApps at fair pricing.
            </p>
          </div>

          <div className="feature-card">
            <img src={updateImg} alt="" className="feature-img" />
            <h3 className="feature-title">Free Updates</h3>
            <p className="feature-desc">
              Regular updates & improvements.
            </p>
          </div>

          <div className="feature-card">
            <img src={headphoneImg} alt="" className="feature-img" />
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-desc">
              Our support team is always here for you.
            </p>
          </div>

        </div>

      </section>

      {/* TRUSTED */}
      <section className="trusted-section">

        <p>Trusted by businesses worldwide</p>

        <div className="brand-slider">
          <div className="brand-row">
            <img src={googleLogo} alt="Google" />
            <img src={microsoftLogo} alt="Microsoft" />
            <img src={airbnbLogo} alt="Airbnb" />
            <img src={shopifyLogo} alt="Shopify" />
            <img src={stripeLogo} alt="Stripe" />
            <img src={dropboxLogo} alt="Dropbox" />
            <img src={notionLogo} alt="Notion" />
            <img src={slackLogo} alt="Slack" />
            {/* duplicate for seamless loop */}
            <img src={googleLogo} alt="Google" />
            <img src={microsoftLogo} alt="Microsoft" />
            <img src={airbnbLogo} alt="Airbnb" />
            <img src={shopifyLogo} alt="Shopify" />
            <img src={stripeLogo} alt="Stripe" />
            <img src={dropboxLogo} alt="Dropbox" />
            <img src={notionLogo} alt="Notion" />
            <img src={slackLogo} alt="Slack" />
          </div>
        </div>

      </section>

    </div>
  )
}

export default LandingPage
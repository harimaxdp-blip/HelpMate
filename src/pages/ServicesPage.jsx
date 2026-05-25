// ServicesPage.jsx

import Navbar from "../components/Navbar";
import "./ServicesPage.css";

import {
  FaCheckCircle,
  FaFileInvoice,
  FaGraduationCap,
  FaShoppingCart,
  FaHeadset,
  FaBriefcase,
  FaWallet,
  FaThLarge,
  FaRocket,
  FaSyncAlt,
  FaShieldAlt
} from "react-icons/fa";

function ServicesPage() {

  const services = [
    {
      icon: <FaCheckCircle />,
      title: "TaskFlow",
      desc: "Project & task management app for productive teams.",
      tag: "SaaS",
      className: "green"
    },

    {
      icon: <FaFileInvoice />,
      title: "InvoiceHub",
      desc: "Create invoices, manage clients and track payments.",
      tag: "Business",
      className: "blue"
    },

    {
      icon: <FaGraduationCap />,
      title: "SchoolPro",
      desc: "School management system for modern institutions.",
      tag: "School",
      className: "purple"
    },

    {
      icon: <FaShoppingCart />,
      title: "ShopEase",
      desc: "Complete e-commerce solution for online stores.",
      tag: "E-Commerce",
      className: "yellow"
    },

    {
      icon: <FaHeadset />,
      title: "HelpDesk",
      desc: "Customer support & ticket management system.",
      tag: "SaaS",
      className: "cyan"
    },

    {
      icon: <FaBriefcase />,
      title: "PortfolioX",
      desc: "Modern portfolio template for creators & developers.",
      tag: "Portfolio",
      className: "pink"
    },

    {
      icon: <FaWallet />,
      title: "PayBridge",
      desc: "Payment gateway integration system.",
      tag: "Utility",
      className: "green"
    },

    {
      icon: <FaThLarge />,
      title: "AdminPanel",
      desc: "Powerful admin dashboard starter for your project.",
      tag: "Utility",
      className: "purple"
    }
  ];

  return (

    <div className="services-page">

      <Navbar />

      {/* HERO */}

      <section className="services-hero">

        <div className="hero-left">

          <div className="service-badge">
            ● Our Services
          </div>

          <h1>
            Powerful <span>eApps</span>
            <br />
            for Every Business Need
          </h1>

          <p>
            We provide ready-to-use web applications to simplify your business
            operations and accelerate your growth.
          </p>

          <div className="service-tags">

            <button className="active-tag">
              All Services
            </button>

            <button>Business</button>

            <button>SaaS</button>

            <button>School</button>

            <button>Portfolio</button>

            <button>E-Commerce</button>

            <button>Utility</button>

            <button>Custom Solutions</button>

          </div>

        </div>

        <div className="hero-right">

          <img src="/service.png" alt="service" />

        </div>

      </section>

      {/* SERVICE CARDS */}

      <section className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className={`service-icon ${service.className}`}>
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>

            <span className={`service-tag ${service.className}`}>
              {service.tag}
            </span>

            <button>
              View Details →
            </button>

          </div>

        ))}

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <div className="feature-box">

          <div className="feature-icon green">
            <FaShieldAlt />
          </div>

          <div>
            <h3>Secure & Reliable</h3>
            <p>Built with security best practices</p>
          </div>

        </div>

        <div className="feature-box">

          <div className="feature-icon blue">
            <FaRocket />
          </div>

          <div>
            <h3>High Performance</h3>
            <p>Optimized for speed and scalability</p>
          </div>

        </div>

        <div className="feature-box">

          <div className="feature-icon purple">
            <FaSyncAlt />
          </div>

          <div>
            <h3>Regular Updates</h3>
            <p>Continuous improvements and new features</p>
          </div>

        </div>

        <div className="feature-box">

          <div className="feature-icon yellow">
            <FaHeadset />
          </div>

          <div>
            <h3>24/7 Support</h3>
            <p>We’re always here to help you succeed</p>
          </div>

        </div>

      </section>

    </div>

  );
}

export default ServicesPage;
// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LoadingPage from "./pages/LoadingPage";
import LandingPage from "./pages/LandingPage";

import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* OTHER PAGES */}
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/how-it-works" element={<HowItWorksPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
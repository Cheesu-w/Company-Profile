import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Company from "./pages/Company";
import Solution from "./pages/Solution";
import Partners from "./pages/Partners";
import Gall from "./pages/Gall";
import Contact from "./pages/Contact";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky Navbar background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Featured/About Section Data
  const about = [
    { id: 1, title: "Site Survey", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Responsive", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Affordable Pricing", img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "End to End Solutions", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "Innovative Solutions", img: "https://images.unsplash.com/photo-1520000000000-000000000000?auto=format&fit=crop&w=500&q=80" }, // Placeholder
    { id: 6, title: "High Quality Service", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80" },
  ];

  // Landing Page Component
  const LandingPage = () => (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Transforming your Businesses</h1>
            <h1>through innovative IT Solutions!</h1>
            <button className="primary-cta">Explore Now</button>
          </div>
        </div>
      </header>

      {/* Featured/About Section */}
      <section className="featured">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Visible is an IT solution company, your trusted partner in navigating the digital landscape.
            From tailored software development to cutting-edge cybersecurity and transformative cloud services,
            we deliver seamless technology solutions to drive efficiency, productivity, and growth.
          </p>
        </div>
        <div className="grid-container">
          {about.map((item) => (
            <div key={item.id} className="card">
              <div className="card-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>Tailored to clients needs</p>
                <button className="learn-more">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // Navbar Component
  const Navbar = () => (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="https://via.placeholder.com/120x40?text=TRAVEL+LOGO" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/solution">Solution</Link></li>
          <li><Link to="/partners">Partners & Clients</Link></li>
          <li><Link to="/gall">Gallery</Link></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gall" element={<Gall />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Company from "./pages/Company";
import Solution from "./pages/Solution";
import Partners from "./pages/Partners";
import Gall from "./pages/Gall";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

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
    { id: 1, title: 'Site Survey', img: 'https://media.istockphoto.com/id/1054975708/vector/a-man-in-a-helmet-and-theodolite.jpg?s=612x612&w=0&k=20&c=_7JJ6DPE3CkKecfR9g-vWVRdhtFinFcNtdCqDL8TN3k=' },
    { id: 2, title: 'Responsive', img: 'https://media.istockphoto.com/id/1218761008/vector/fast-contract-linear-icon-of-instant-deal.jpg?s=612x612&w=0&k=20&c=GLzbhkdNkImK-OSDyE_J0qqduL0Jlt1lhW_eixhfJvg=' },
    { id: 3, title: 'Affordable Pricing', img: 'https://img.freepik.com/premium-vector/affordable-prices-icon_1076610-110376.jpg?w=360' },
    { id: 4, title: 'End to End Solutions', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_TTkKumQQtiXxT_--1llP7PSRTjEdTEhuA&s' },
    { id: 5, title: 'Innovative Solutions', img: 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-light-bulb-innovation-clip-art-png-image_5978000.png' }, 
    { id: 6, title: 'High Quality Service', img: 'https://otrs.com/wp-content/uploads/IT-Service-Desk-Featured-Image.jpg' },
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

      {/* Featured Section */}
      <section className="featured">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Visible is a IT solution company who are your trusted partner in navigating the digital landscape.
            <br />From tailored software development to cutting-edge cybersecurity and transformative cloud services,
            <br />we deliver seamless technology solutions to drive efficiency, productivity, 
            <br />and growth for your organization.
          </p>
        </div>

        <div className="grid-container">
          {about.map((item) => (
            <div key={item.id} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <h3>{item.title}</h3><br />
                  <p>We provide {item.title.toLowerCase()} to help your business grow.</p>
                </div>
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

        <Footer /> {/* shows on ALL pages */}
    </Router>
  );
};

export default App;

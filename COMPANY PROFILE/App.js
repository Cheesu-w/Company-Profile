import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/vtic.webp";

import Company from "./pages/Company";
import Solution from "./pages/Solution";
import Partners from "./pages/Partners";
import Gall from "./pages/Gall";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Footer from "./component/Footer";

import iconSurvey from "./assets/site survey.png";
import iconResponsive from "./assets/responsive.png";
import iconPricing from "./assets/affordable pricing.png";
import iconEndToEnd from "./assets/end to end solutions.png";
import iconInnovation from "./assets/innovative solution.png";
import iconQuality from "./assets/high quality service.png";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutItems = [
    { id: 1, title: 'SITE SURVEY', img: iconSurvey },
    { id: 2, title: 'RESPONSIVE', img: iconResponsive },
    { id: 3, title: 'AFFORDABLE PRICING', img: iconPricing },
    { id: 4, title: 'END TO END SOLUTION', img: iconEndToEnd },
    { id: 5, title: 'INNOVATIVE SOLUTION', img: iconInnovation },
    { id: 6, title: 'HIGH QUALITY SERVICES', img: iconQuality },
  ];

  const LandingPage = () => (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content" style={{margin:'150px'}}>
            <h1>VISIBLE</h1>
            <p>Transforming your Businesses through innovative IT Solutions!</p>
            <button className="primary-cta" onClick={scrollToAbout}>
              EXPLORE
            </button>
          </div>
        </div>
      </header>

      <section className="featured" ref={aboutRef} style={{ maxWidth: '1200px', margin:'-60px auto'}}>
        <div className="section-header">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign:'justify'}}>ABOUT US</h2>
          <p>Visible is a IT solution company who are your trusted partner in navigating the digital landscape. 
            From tailored software development to cutting-edge cybersecurity and transformative cloud services, 
            we deliver seamless technology solutions to drive efficiency, productivity, and growth for your organization.</p>
        </div>
        <br></br>
        <br></br>
        <div className="about-grid-container">
          {aboutItems.map((item) => (
            <div key={item.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
                <div className="flip-card-back">
                  <h3>{item.title}</h3>
                  <p>We provide professional {item.title.toLowerCase()} to help your business grow.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us" ref={aboutRef} style={{ maxWidth: '1200px', margin:'-110px auto'}}>
        <div className="why-container">
          <div className="why-left">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign:'justify'}}>WHY CHOOSE US</h2>
            <p>VISIBLE aims to be your partner in ensuring the application of economical, efficient, durable and flexible solutions.</p>
            <div className="why-image-wrapper">
                <img src="https://vtic.ph/wp-content/uploads/2024/05/Visible_Presentation.png" alt="Technology" />
            </div>
          </div>
          <div className="why-right">
            <div className="solution-item">
              <span className="sol-badge">SOLUTION 1</span>
              <h4>Enterprise Complete End to End Solution</h4>
              <p>A scalable, high-performance system for large organizations with complex operations.</p>
            </div>
            <div className="solution-item">
              <span className="sol-badge">SOLUTION 2</span>
              <h4>Mid-Range End to End Solution</h4>
              <p>A reliable and cost-effective solution tailored for growing businesses.</p>
            </div>
            <div className="solution-item">
              <span className="sol-badge">SOLUTION 3</span>
              <h4>Entry Level End to End Solution</h4>
              <p>A simple and affordable package for small teams starting their operations.</p>
            </div>
          </div>
          <br></br>
        </div>
      </section>

      <section className="our-services" ref={aboutRef} style={{ maxWidth: '1200px', margin:'150px auto', marginTop: '-80px'}}>
        <div className="section-header">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign:'justify'}}>OUR SERVICES</h2>
        </div>
        <br></br>
        <div className="services-static-grid">
           <div className="service-card it">
              <div className="service-content">
                <h3>IT INFRASTRUCTURE</h3>
                <p>A standardized and organized approach to designing and installing network infrastructure.</p>
              </div>
           </div>
           <div className="service-card security">
              <div className="service-content">
                <h3>PHYSICAL SECURITY</h3>
                <p>Measures put in place to protect physical assets, resources, and personnel.</p>
              </div>
           </div>
           <div className="service-card datacenter">
              <div className="service-content">
                <h3>DATA CENTER</h3>
                <p>Specialized facilities used to house and manage computer systems and associated components.</p>
              </div>
           </div>
           <div className="service-card datasecurity">
              <div className="service-content">
                <h3>DATA SECURITY</h3>
                <p>Protecting digital data from unauthorized access, corruption, or theft.</p>
              </div>
           </div>
           <div className="service-card networking">
              <div className="service-content">
                <h3>NETWORKING</h3>
                <p>Hardware and software protocols that enable communication between devices.</p>
              </div>
           </div>
           <div className="service-card fire">
              <div className="service-content">
                <h3>FIRE DETECTION AND ALARM SYSTEM</h3>
                <p>Early warning systems to allow occupants to evacuate safely during fire emergencies.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );

  const scrollTopBtnStyle = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#355d8f",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: 1000,
    opacity: showScrollTop ? 1 : 0,
    pointerEvents: showScrollTop ? "all" : "none",
    transition: "opacity 0.3s",
  };

  return (
    <Router>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="VTIC Logo" /></Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/company">COMPANY</Link></li>
            <li><Link to="/solution">SOLUTION</Link></li>
            <li className="dropdown">
              <span className="dropdown-title">PARTNERS AND CLIENT ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/partners">Partners</Link></li>
                <li><Link to="/clients">Clients</Link></li>
              </ul>
            </li>
            <li><Link to="/gall">GALLERY</Link></li>
            <li><Link to="/contact" className="contact-btn">CONTACT</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gall" element={<Gall />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <button style={scrollTopBtnStyle} onClick={scrollToTop}>↑</button>
    </Router>
  );
};

export default App;

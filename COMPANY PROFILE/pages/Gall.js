import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import gall1 from "../assets/gall1.webp";
import gall2 from "../assets/gall2.webp";
import gall3 from "../assets/gall3.webp";
import gall4 from "../assets/gall4.webp";
import gall5 from "../assets/gall5.jpg";
import gall6 from "../assets/gall6.webp";
import gall7 from "../assets/gall7.webp";
import gall8 from "../assets/gall8.webp";
import gall9 from "../assets/gall9.jpg";
import gall10 from "../assets/gall10.webp";
import gall11 from "../assets/gall11.jpg";
import gall12 from "../assets/gall12.webp";
import gall13 from "../assets/gall13.webp";
import gall14 from "../assets/gall14.webp";
import gall15 from "../assets/gall15.webp";

const images = [
  { src: gall1, title: "Alantek Structured Cabling Project", description: "Sandugo Sandals Inc." },
  { src: gall2, title: "Alantek Structured Cabling Project", description: "Sandugo Sandals Inc." },
  { src: gall3, title: "Alantek Structured Cabling Project", description: "Sandugo Sandals Inc." },
  { src: gall4, title: "Alantek Structured Cabling", description: "Project for World of Fun" },
  { src: gall5, title: "Alantek Structured Cabling", description: "Project for World of Fun" },
  { src: gall6, title: "Alantek Structured Cabling", description: "Project for World of Fun" },
  { src: gall7, title: "94 kilometers Point-to-multipoint Backhaul Wireless Connectivity"},
  { src: gall8, title: "Ubiquiti Access Point", description: "Project for Victoria Court Pampanga" },
  { src: gall9, title: "Ubiquiti Access Point", description: "Project for Victoria Court Pampanga" },
  { src: gall10, title: "Ubiquiti Access Point", description: "Project for Victoria Court Pampanga" },
  { src: gall11, title: "UBNT Point-to-Point", description: "Deployment in Sta. Cruz Manila" },
  { src: gall12, title: "Ubiquiti WiFi Backhauling", description: "Relay Tower Project" },
  { src: gall13, title: "Ubiquiti WiFi AP Project", description: "for First Pacific Leadership Academy" },
  { src: gall14, title: "Alantek Structured Cabling", description: "Project in Parañaque" },
  { src: gall15, title: "Alantek Structured Cabling", description: "Project in Parañaque" },
];

const Gall = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const styles = {
    sectionWhite: { 
        padding: "80px 20px", 
        backgroundColor: "#ffffff", 
        display: "flex", 
        justifyContent: "center" 
    },
    container: { 
        maxWidth: "1200px", 
        width: "100%" 
    },
    galleryGrid: { 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gridAutoFlow: "dense", 
        gridAutoRows: "250px", 
        gap: "15px" 
    },
    imageCard: {
      borderRadius: "15px",
      overflow: "hidden",
      cursor: "zoom-in",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      position: "relative",
      transition: "transform 0.3s ease",
    },
    image: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
      fontWeight: "bold",
      opacity: 0,
      transition: "opacity 0.3s ease",
      textAlign: "center",
      padding: "10px",
    },
    overlayTitle: { 
        fontWeight: "bold", 
        fontSize: "1.3rem", 
        marginBottom: "5px" 
    },
    overlayDescription: { 
        fontWeight: "normal", 
        fontSize: "1rem" 
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      cursor: "zoom-out",
    },
    modalImage: { 
        maxWidth: "90%", 
        maxHeight: "90%", 
        borderRadius: "10px", 
        boxShadow: "0 0 30px rgba(0,0,0,0.5)" 
    },
    closeBtn: { 
        position: "absolute", 
        top: "30px", 
        right: "40px", 
        fontSize: "40px", 
        color: "white", 
        fontWeight: "bold", 
        cursor: "pointer" 
    },
    scrollTopBtn: {
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
      opacity: isScrolled ? "1" : "0",
      pointerEvents: isScrolled ? "all" : "none",
    },
  };

  const getSpanStyle = (index) => {
    if ([2, 4, 11].includes(index)) return { gridColumn: "span 2", gridRow: "span 2" };
    return {};
  };

  const Navbar = () => (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="https://via.placeholder.com/120x40?text=LOGO" alt="Logo" />
        </div>
        <ul className="nav-links">
          {[
            { name: "Home", path: "/" },
            { name: "Company", path: "/company" },
            { name: "Solution", path: "/solution" },
            { name: "Partners & Clients", path: "/partners" },
            { name: "Gallery", path: "/gall" },
          ].map((link, idx) => (
            <li key={idx}>
              <Link to={link.path} onClick={scrollToTop}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="contact-btn" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="gallery-page" style={{ position: "relative" }}>
      <Navbar />
      <button style={styles.scrollTopBtn} onClick={scrollToTop}>
        ↑
      </button>

      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Gallery</h1>
          </div>
        </div>
      </header>

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.galleryGrid}>
            {images.map((imgObj, index) => (
              <div
                key={index}
                style={{ ...styles.imageCard, ...getSpanStyle(index) }}
                onClick={() => setSelectedImage(imgObj.src)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.querySelector(".overlay").style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.querySelector(".overlay").style.opacity = 0;
                }}
              >
                <img src={imgObj.src} alt={imgObj.title} style={styles.image} />
                <div className="overlay" style={styles.overlay}>
                  <div style={styles.overlayTitle}>{imgObj.title}</div>
                  <div style={styles.overlayDescription}>{imgObj.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <span style={styles.closeBtn}>&times;</span>
          <img
            src={selectedImage}
            alt="Preview"
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gall;

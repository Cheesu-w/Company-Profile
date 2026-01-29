import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import picture1 from "../assets/picture1.png"; 
import ceoImage from "../assets/ceo.png"; 

const Company = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const featuredRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    sectionGray: {
      padding: "80px 20px",
      backgroundColor: "#f8f9fa",
      display: "flex",
      justifyContent: "center",
    },
    sectionWhite: {
      padding: "80px 20px",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      maxWidth: "1000px",
      width: "100%",
    },
    cardsContainer: {
      display: "flex",
      gap: "50px",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
    },
    headerSection: {
      textAlign: "center",
      marginBottom: "20px",
    },
    mainTitle: {
      fontSize: "2rem",
      color: "#222",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    cardWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "380px",
      paddingBottom: "25px",
    },
    missionCradle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "60%",
      borderRadius: "20px",
      backgroundColor: "#4a7ab5",
      zIndex: 0,
    },
    visionCradle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "60%",
      borderRadius: "20px",
      backgroundColor: "#4a7ab5",
      zIndex: 0,
    },
    whiteBox: {
      position: "relative",
      background: "white",
      borderRadius: "15px",
      padding: "40px 30px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      zIndex: 1,
      margin: "0 15px",
      minHeight: "250px",
    },
    title: {
      fontSize: "1.4rem",
      letterSpacing: "2px",
      marginBottom: "15px",
      color: "#222",
      fontWeight: "bold",
    },
    text: {
      color: "#666",
      fontSize: "0.95rem",
      lineHeight: "1.6",
    },
    tab: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.2rem",
      padding: "5px 40px",
      borderRadius: "4px",
      zIndex: 2,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    leadershipSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px",
      flexWrap: "wrap",
      width: "100%",
    },
    imageContainer: {
      backgroundColor: "#eef2f7",
      borderRadius: "20px",
      padding: "20px",
      maxWidth: "380px",
    },
    ceoImgStyle: {
      width: "100%",
      height: "auto",
      borderRadius: "15px",
      display: "block",
    },
    contentContainer: {
      maxWidth: "500px",
    },
    badge: {
      backgroundColor: "#355d8f",
      color: "white",
      padding: "5px 15px",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "bold",
      display: "inline-block",
      marginBottom: "15px",
      textTransform: "uppercase",
    },
    ceoName: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      margin: "0 0 10px 0",
      color: "#222",
    },
    quote: {
      color: "#4a7ab5",
      fontSize: "1.1rem",
      marginBottom: "25px",
    },
    bioText: {
      lineHeight: "1.7",
      color: "#555",
      fontSize: "1rem",
      textAlign: "justify",
      textJustify: "inter-word",
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
      transition: "opacity 0.3s, transform 0.3s",
      opacity: isScrolled ? "1" : "0",
      pointerEvents: isScrolled ? "all" : "none",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
    },
    modalImage: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: "15px",
    },
    closeBtn: {
      position: "absolute",
      top: "25px",
      right: "35px",
      fontSize: "36px",
      color: "#fff",
      cursor: "pointer",
    },

    featuredSection: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    maxWidth: "1100px",
    width: "100%",
  },
  imageLayoutTitle: {
    fontSize: "2.2rem",
    fontWeight: "800",
    textAlign: "left",
    marginBottom: "40px",
    letterSpacing: "0.5px",
    fontFamily: "Arial, sans-serif", // Or a similar clean sans-serif
    color: "#222",
  },
  rowLayout: {
    display: "flex",
    alignItems: "center", // Vertically centers text with image
    gap: "40px",
    flexWrap: "wrap", // For mobile responsiveness
  },
  imageCol: {
    flex: "1",
    minWidth: "300px",
  },
  textCol: {
    flex: "1.2",
    minWidth: "300px",
  },
  showcaseImage: {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    cursor: "zoom-in",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  descriptionText: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#333",
    textAlign: "left",
    margin: 0,
  },

  };

  return (
    <div className="company-page" style={{ position: "relative" }}>
  

      {isImageOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsImageOpen(false)}>
          <span style={styles.closeBtn}>&times;</span>
          <img
            src={picture1}
            alt="Company Full View"
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <button style={styles.scrollTopBtn} onClick={scrollToTop}>↑</button>

      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>WHO IS VISIBLE?</h1>
          </div>
        </div>
      </header>

      <section className="featured" ref={featuredRef} style={styles.featuredSection}>
        <div style={styles.contentWrapper}>
          {/* 1. Large Header at the Top */}
          <h2 style={styles.imageLayoutTitle}>
            <span style={{ color: "#1a365d" }}>VISIBLE</span> TECHNOLOGIES INTERNATIONAL CORP.
          </h2>

          {/* 2. Two-Column Layout */}
          <div style={styles.rowLayout}>
            <div style={styles.imageCol}>
              <img
                src={picture1}
                alt="Company Showcase"
                onClick={() => setIsImageOpen(true)}
                style={styles.showcaseImage}
              />
            </div>
            <div style={styles.textCol}>
              <p style={styles.descriptionText}>
                Visible is an IT solution company who are your trusted partner in navigating the digital landscape. 
                From tailored software development to cutting-edge cybersecurity and transformative cloud services, 
                we deliver seamless technology solutions to drive efficiency, productivity, and growth for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <div style={styles.headerSection}>
            <h2 style={styles.mainTitle}>Why We Exist & Where We’re Going</h2>
          </div>

          <div style={styles.cardsContainer}>
            <div style={styles.cardWrapper}>
              <div style={styles.missionCradle}></div>
              <div style={styles.whiteBox}>
                <h3 style={styles.title}>MISSION</h3>
                <p style={styles.text}>
                  Our mission is to be the leading provider of Information and Communications Technology (ICT) 
                  strategies and services, which deliver long-term commercial benefits, based on the customers’ 
                  key business requirements. In addition, VISIBLE aims to be your partner in ensuring the 
                  application of economical, efficient, durable and flexible solutions that allow your organization 
                  to respond rapidly to both market and customer needs.
                </p>
              </div>
              <div style={{ ...styles.tab, backgroundColor: "#355d8f" }}>01</div>
            </div>

            <div style={styles.cardWrapper}>
              <div style={styles.visionCradle}></div>
              <div style={styles.whiteBox}>
                <h3 style={styles.title}>VISION</h3>
                <p style={styles.text}>
                  Our vision is to be globally present in providing competitive IT solutions and systems
                  integrator that support our customers, partners and employees in 2017. We strive to achieve 
                  this through innovation, quality and commitment to first class service.
                </p>
              </div>
              <div style={{ ...styles.tab, backgroundColor: "#355d8f" }}>02</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.leadershipSection}>
            <div style={styles.imageContainer}>
              <img src={ceoImage} alt="Ms. Resil B. Fuscablo" style={styles.ceoImgStyle} />
            </div>

            <div style={styles.contentContainer}>
              <div style={styles.badge}>Chief Executive Officer</div>
              <h2 style={styles.ceoName}>Ms. Resil B. Fuscablo</h2>
              <p style={styles.quote}>Visible Technologies International Corp.</p>

              <p style={styles.bioText}>
                With a passion for innovation and a relentless drive for success, 
                <strong> Ms. Resil B. Fuscablo </strong>
                leads <strong>Visible Technologies International Corp.</strong> as its CEO. 
                With over 17 years of experience in Business, She brings a wealth of expertise 
                in strategic leadership, business development, and operational excellence.
              </p>
              <br />
              <p style={styles.bioText}>
                Prior to her role as <strong>CEO</strong>, Ms. Resil B. Fuscablo held key leadership positions within 
                <strong> Visible Technologies International Corp.</strong> where she spearheaded initiatives 
                that propelled the company to new heights. Her commitment to fostering a culture of innovation and 
                customer-centricity has been instrumental in <strong>VISIBLE’S</strong> success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;

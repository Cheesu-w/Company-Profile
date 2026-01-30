import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const clients = [
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/Sea-Games.png",
    name: "SEA Games 2019",
    project: "Physical Security and Communication Devices",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/picc.jpg",
    name: "PICC (Philippine International Convention Center)",
    project: "Access Point (Sundray) and Firewall (Sangfor)",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/Dr-emilio.jpg",
    name: "Dr. Emilio B. Espinosa",
    project: "Support and CCTV",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/Mindanao.jpg",
    name: "University of Southern Mindanao",
    project: "Wireless Access Point and Drone",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/Vistamall.jpg",
    name: "Vista Mall",
    project: "Access Point (Sundray)",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/Aqua-boracay.jpg",
    name: "Aqua Boracay",
    project: "CCTV and Structured Cabling (Auxiliary) Grounding System",
  },
  {
    image: "https://vtic.ph/wp-content/uploads/2024/05/victoria.jpg",
    name: "Victoria Court",
    project: "Firewall (Sophos) and Endpoint (Sophos)",
  },
];

const Clients = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      maxWidth: "1200px",
      width: "100%",
    },
    grid: {
      display: "grid",
      gap: "30px",
    },
    card: {
      borderRadius: "15px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      cursor: "zoom-in",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      display: "block",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    overlayTitle: {
      fontSize: "1.2rem",
      fontWeight: "700",
      marginBottom: "8px",
    },
    overlayText: {
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    scrollTopBtn: {
      position: "fixed",
      bottom: "40px",
      right: "40px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#1f3c88",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: "22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
      opacity: isScrolled ? 1 : 0,
      pointerEvents: isScrolled ? "auto" : "none",
      transition: "opacity 0.3s ease",
      zIndex: 1000,
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
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
    },
    closeBtn: {
      position: "absolute",
      top: "30px",
      right: "40px",
      fontSize: "40px",
      color: "#fff",
      cursor: "pointer",
    },
    titleWrapper: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontFamily: "'Arial', sans-serif",
      textAlign: "center",
      margin: 0,
    },
  };

  const ClientCard = ({ client }) => (
    <div
      style={styles.card}
      onClick={() => setSelectedImage(client.image)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.querySelector(".overlay").style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.querySelector(".overlay").style.opacity = 0;
      }}
    >
      <img src={client.image} alt={client.name} style={styles.image} />
      <div className="overlay" style={styles.overlay}>
        <div style={styles.overlayTitle}>{client.name}</div>
        <div style={styles.overlayText}>{client.project}</div>
      </div>
    </div>
  );

  return (
    <div>
      <button style={styles.scrollTopBtn} onClick={scrollToTop}>
        ↑
      </button>

      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content" style={{ marginLeft: "150px" }}>
            <h1>Clients</h1>
          </div>
        </div>
      </header>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.titleWrapper}>
            <h2 style={styles.title}>
              OUR TRUSTED AND VALUED CLIENTS
            </h2>
          </div>
          <div
            style={{
              ...styles.grid,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {clients.slice(0, 3).map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </div>
          <div
            style={{
              ...styles.grid,
              gridTemplateColumns: "repeat(4, 1fr)",
              marginTop: "30px",
            }}
          >
            {clients.slice(3, 7).map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
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

export default Clients;

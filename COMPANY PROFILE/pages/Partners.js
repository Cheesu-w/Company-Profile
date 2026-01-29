import React, { useState, useEffect } from "react";
import "../App.css";

const dataCenterLogos = [
  "/logos/dataCenterLogos/3m.png",
  "/logos/dataCenterLogos/emc2.png",
  "/logos/dataCenterLogos/apple.svg",
  "/logos/dataCenterLogos/dell.png",
  "/logos/dataCenterLogos/hp.svg",
  "/logos/dataCenterLogos/alantek.png",
  "/logos/dataCenterLogos/belden.png",
  "/logos/dataCenterLogos/panduit.webp",
  "/logos/dataCenterLogos/flukenetworks.png",
  "/logos/dataCenterLogos/whatsupgold.jpg",
  "/logos/dataCenterLogos/solarwinds.avif",
  "/logos/dataCenterLogos/extremen.png",
];

const wirelessLogos = [
  "/logos/wirelessLogos/sundray.png",
  "/logos/wirelessLogos/xpossible.png",
  "/logos/wirelessLogos/ruijienetwork.webp",
  "/logos/wirelessLogos/ubiquiti.png",
  "/logos/wirelessLogos/cisco.png",
  "/logos/wirelessLogos/cambium.png",
  "/logos/wirelessLogos/aruba.png",
];

const commsLogos = [
  "/logos/commsLogos/3cx.png",
  "/logos/commsLogos/panasonic.png",
  "/logos/commsLogos/shoretel.png",
  "/logos/commsLogos/alcatel-lucent.png",
  "/logos/commsLogos/nec.png"
];

const networkLogos = [
  "/logos/networkLogos/sophos.png",
  "/logos/networkLogos/cisco.png",
  "/logos/networkLogos/paloalto.png",
  "/logos/networkLogos/watchguard.png",
  "/logos/networkLogos/barracuda.png",
  "/logos/networkLogos/sonicwall.png",
  "/logos/networkLogos/sangfor.png",
  "/logos/networkLogos/24online.png",
  "/logos/networkLogos/mcafee.png",
  "/logos/networkLogos/fortinet.png",
];

const physicalLogos = [
  "/logos/physicalLogos/alhua.png",
  "/logos/physicalLogos/geovision.png",
  "/logos/physicalLogos/hikvision.png",
  "/logos/physicalLogos/honeywell.png",
  "/logos/physicalLogos/kidde.png"
];

const hostingLogos = [
  "/logos/hostingLogos/apple.svg",
  "/logos/hostingLogos/hp.svg",
  "/logos/hostingLogos/dell.png",
  "/logos/hostingLogos/ibm.png",
  "/logos/hostingLogos/microsoft.png",
  "/logos/hostingLogos/azure.webp",
  "/logos/hostingLogos/alibabacloud.png",
  "/logos/hostingLogos/vmware.png",
  "/logos/hostingLogos/amazon.png",
  "/logos/hostingLogos/supermicr.png"
];

const LogoSlider = ({ title, bgColor, logos }) => {
  const loopLogos = [...logos, ...logos];

  return (
    <section className="partner-section" style={{ background: bgColor }}>
      <h2 className="section-title">{title}</h2>

      <div className="logo-marquee">
        <div className="logo-track">
          {loopLogos.map((logo, index) => (
            <div key={index} className="logo-card">
              <img src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
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
  };

  return (
    <div className="partners-page">
      <h1 className="page-title">PARTNERS</h1>
      <h2 className="page-subtitle">Visible Manage ICT Services</h2>

      <LogoSlider
        title="DATA CENTER & NETWORK INFRASTRUCTURE"
        bgColor="#0a1128"
        logos={dataCenterLogos}
      />

      <LogoSlider
        title="WIRELESS NETWORK SYSTEM"
        bgColor="#001f54"
        logos={wirelessLogos}
      />

      <LogoSlider
        title="COMMUNICATION SYSTEM"
        bgColor="#034078"
        logos={commsLogos}
      />

      <LogoSlider
        title="NETWORK SECURITY"
        bgColor="#1282a2"
        logos={networkLogos}
      />

      <LogoSlider
        title="PHYSICAL SECURITY"
        bgColor="#1282a2"
        logos={physicalLogos}
      />

      <LogoSlider
        title="HOSTING & CLOUD COMPUTING"
        bgColor="#46a6c0"
        logos={hostingLogos}
      />

      <button style={styles.scrollTopBtn} onClick={scrollToTop}>↑</button>
    </div>
  );
};

export default Partners;

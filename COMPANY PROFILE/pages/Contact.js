import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
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
    <>
      <div className="map-container">
        <iframe
          title="Ridgewood Towers Map"
          src="https://www.google.com/maps?q=Ridgewood%20Towers%20Taguig&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact-wrapper">
        <div className="contact-grid">

          <div className="contact-left">
            <p className="contact-label">CONTACT US</p>
            <h1 className="contact-title">Get In Touch With Us</h1>

            <p className="contact-description">
              We’re here to help! Whether you have questions about our products,
              need assistance with an order, or simply want to say hello.
            </p>

            <div className="contact-info">

              <div className="info-card">
                <div className="icon-box">
                  <img src="/icons/building.png" alt="Office" />
                </div>
                <div>
                  <h4>Ridgewood</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=GF+Unit+102+Tower+3+The+Ridgewood+Towers+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    GF unit 102 Tower 3,<br />
                    The Ridgewood Towers,<br />
                    Philippines
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box">
                  <img src="/icons/city.png" alt="City" />
                </div>
                <div>
                  <h4>Taguig City</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C5+Road+Ususan+Taguig+City+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    C5 Road (Ususan),<br />
                    Taguig City,<br />
                    Philippines
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box">
                  <img src="/icons/phone.png" alt="Phone" />
                </div>
                <div>
                  <h4>Phone Call</h4>
                  <p>
                    0949-740-2779<br />
                    0917-465-5234<br />
                    028-824-4562
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box">
                  <img src="/icons/email.png" alt="Email" />
                </div>
                <div>
                  <h4>Send Us A Message</h4>
                  <a href="mailto:sales@vtic.ph" className="map-link">
                    sales@vtic.ph
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-right">
            <div className="box">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button className="primary-cta" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <button style={styles.scrollTopBtn} onClick={scrollToTop}>↑</button>
    </>
  );
};

export default Contact;

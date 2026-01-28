import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Visible Technologies International</h3>
          <p>Transforming businesses through innovative IT solutions.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: sales@vtic.ph</p>
          <p>Phone: 09497402779 / 09174655234</p>
          <p>Telephone: (02) 8244 6562</p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h4>Address</h4>
          <p>1GF Unit 102 Ridgewood Towers 3, C5 (Northbound)</p>
          <p>Ususan Taguig City 1639</p>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-socmed">
          <h4>Follow us on:</h4>

          <a
            href="https://www.facebook.com/visibletechintlcorp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/500px-Facebook_Logo_2023.png"
              alt="Facebook"
            />
            Facebook
          </a>

          <a
            href="https://www.instagram.com/visibletechintlcorp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png"
              alt="Instagram"
            />
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/visibletechnologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
              alt="LinkedIn"
            />
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

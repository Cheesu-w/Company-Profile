import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Sticky Navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const about = [
    { id: 1, title: 'Site Survey', img: 'https://media.istockphoto.com/id/1054975708/vector/a-man-in-a-helmet-and-theodolite.jpg?s=612x612&w=0&k=20&c=_7JJ6DPE3CkKecfR9g-vWVRdhtFinFcNtdCqDL8TN3k=' },
    { id: 2, title: 'Responsive', img: 'https://media.istockphoto.com/id/1218761008/vector/fast-contract-linear-icon-of-instant-deal.jpg?s=612x612&w=0&k=20&c=GLzbhkdNkImK-OSDyE_J0qqduL0Jlt1lhW_eixhfJvg=' },
    { id: 3, title: 'Affordable Pricing', img: 'https://img.freepik.com/premium-vector/affordable-prices-icon_1076610-110376.jpg?w=360' },
    { id: 4, title: 'End to End Solutions', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_TTkKumQQtiXxT_--1llP7PSRTjEdTEhuA&s' },
    { id: 5, title: 'Innovative Solutions', img: 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-light-bulb-innovation-clip-art-png-image_5978000.png' }, 
    { id: 6, title: 'High Quality Service', img: 'https://otrs.com/wp-content/uploads/IT-Service-Desk-Featured-Image.jpg' },
  ];

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="https://via.placeholder.com/120x40?text=TRAVEL+LOGO" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#partners">Partners & Clients</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact" className="contact-btn">Contact</a></li>
          </ul>
        </div>
      </nav>

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

      {/* Footer */}
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
            <p>Telephone: (02) 8244 6562 </p>
          </div>

          {/* Address Info */}
          <div className="footer-section">
            <h4>Address</h4>
            <p>1GF Unit 102 Ridgewood Towers 3, C5 (Northbound)</p>
            <p>Ususan Taguig City 1639</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-section footer-socmed">
            <h4>Follow us on:</h4>
            <a href="https://www.facebook.com/visibletechintlcorp" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/500px-Facebook_Logo_2023.png" alt="Facebook" style={{ width: "24px", height: "24px" }} /> Facebook
            </a>
            <a href="https://www.instagram.com/visibletechintlcorp/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png" alt="Instagram" style={{ width: "24px", height: "24px" }} /> Instagram
            </a>
            <a href="https://www.linkedin.com/company/visibletechnologies/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const navClass = `navbar ${(isScrolled || !isHomePage) ? "scrolled" : ""}`;

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className={navClass}>
      <div className="nav-container">

        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>

        <ul className="nav-links">

          <li><Link to="/" className={isActive("/")}>Home</Link></li>

          <li><Link to="/company" className={isActive("/company")}>Company</Link></li>

          <li><Link to="/solution" className={isActive("/solution")}>Solution</Link></li>

          {/* ✅ PURE CSS DROPDOWN */}
          <li className="dropdown">
            <span className="dropdown-title">Partners & Clients ▾</span>

            <ul className="dropdown-menu">
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/clients">Clients</Link></li>
            </ul>
          </li>

          <li><Link to="/gallery" className={isActive("/gallery")}>Gallery</Link></li>

          <li>
            <Link to="/contact" className={`contact-btn ${isActive("/contact")}`}>
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Solid navbar on sub-pages
  const isHomePage = location.pathname === "/";
  const navClass = `navbar ${(isScrolled || !isHomePage) ? "scrolled" : ""}`;

  // Helper for active links
  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className={navClass}>
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/120x40?text=LOGO"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>Home</Link>
          </li>
          <li>
            <Link to="/company" className={isActive("/company")}>Company</Link>
          </li>
          <li>
            <Link to="/solution" className={isActive("/solution")}>Solution</Link>
          </li>
          <li>
            <Link to="/partners" className={isActive("/partners")}>Partners</Link>
          </li>
          <li>
            <Link to="/gall" className={isActive("/gall")}>Gallery</Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`contact-btn ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "bootstrap";
import "./navbar.css";

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const links = [
    { label: "Home", to: "/#home", target: "home" },
    { label: "About Us", to: "/#about", target: "about" },
    { label: "Projects", to: "/#projects", target: "projects" },
    { label: "Gallery", to: "/#gallery", target: "gallery" },
    { label: "Awards & Recognition", to: "/#testimonials", target: "testimonials" },
    { label: "Contact", to: "/#contact", target: "contact" },
  ];
  const closeMenu = () => {
    const menu = document.getElementById("landmarkNavbar");
    if (menu?.classList.contains("show")) {
      Collapse.getOrCreateInstance(menu).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm landmark-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/#home" onClick={closeMenu}>
          <img className="nav-logo" src="/landmark_logo.jpeg" alt="Landmark Developers" />
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#landmarkNavbar" aria-controls="landmarkNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="landmarkNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {links.map((link) => {
              const active = pathname === "/" && (hash === `#${link.target}` || (!hash && link.target === "home"));
              return <li className="nav-item" key={link.label}>
                <Link className={`nav-link${active ? " active" : ""}`} aria-current={active ? "page" : undefined} to={link.to} onClick={closeMenu}>{link.label}</Link>
              </li>;
            })}
          </ul>

          <div className="d-flex align-items-center gap-3 navbar-actions">
            <a href="tel:+917566666400" className="nav-phone"><i className="bi bi-telephone-fill me-2" />+91 7566666400</a>
           <a
  href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
  className="btn nav-enquire"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
>
  <i className="bi bi-whatsapp me-2"></i>
  WhatsApp Us
</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

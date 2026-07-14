import { Link, Routes, Route } from "react-router-dom";

import Home from "./home";
import Services from "./services";
import Team from "./team";
import Contact from "./contact";

import "./company.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Techspire</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Tech Company | All Rights Reserved</p>
    </footer>
  );
}

function Company() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Company;
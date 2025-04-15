import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './style.css'
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      {/* About Section */}
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We are dedicated to providing the best services in the industry. 
          Our mission is to deliver excellence with every project.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} edureka! . All rights reserved.</p>
    </div>
  </footer>
  );
};
export default Footer;


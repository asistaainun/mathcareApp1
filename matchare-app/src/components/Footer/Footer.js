import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>matchare</h3>
          <p className="footer-description">
            Your personalized guide to skincare, using cutting-edge ontology-based recommendations.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#discover">Product Discovery</a></li>
            <li><a href="#quiz">Skin Assessment</a></li>
            <li><a href="#ingredients">Ingredient Encyclopedia</a></li>
            <li><a href="#routine">Routine Builder</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Learn</h3>
          <ul className="footer-links">
            <li><a href="#basics">Skincare Basics</a></li>
            <li><a href="#guide">Ingredients Guide</a></li>
            <li><a href="#concerns">Skin Concerns</a></li>
            <li><a href="#types">Skin Types</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 matchare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
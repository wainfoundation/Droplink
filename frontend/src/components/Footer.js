import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/privacy">Privacy</RouterLink>
          <RouterLink to="/terms">Terms</RouterLink>
        </div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Droplink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
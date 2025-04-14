import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaWater } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <FaWater className="logo-icon" />
        Droplink
      </Link>
      <nav>
        <RouterLink to="/features">Features</RouterLink>
        <RouterLink to="/pricing">Pricing</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <RouterLink to="/login" className="cta">Get Started</RouterLink>
    </header>
  );
};

export default Navbar; 
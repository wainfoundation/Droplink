import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaYoutube, FaTelegram, FaPiNetwork } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Drop All Your Links in One Place</h1>
          <p>Share your content across multiple platforms with a single, beautiful link. Perfect for creators, businesses, and anyone who wants to streamline their online presence.</p>
          <div className="hero-buttons">
            <RouterLink to="/register" className="hero-button primary">
              Get Started Free
            </RouterLink>
            <RouterLink to="/demo" className="hero-button secondary">
              See Demo
            </RouterLink>
          </div>
        </div>
        <div className="floating-icons">
          <FaYoutube className="floating-icon youtube" />
          <FaTelegram className="floating-icon telegram" />
          <FaPiNetwork className="floating-icon pi" />
        </div>
      </section>

      <section className="section">
        <h2>Why Choose Droplink?</h2>
        <p className="section-subtitle">The ultimate solution for managing and sharing your online content</p>
        <div className="cards">
          <div className="card">
            <h3>Easy to Use</h3>
            <p>Create and manage your links in minutes with our intuitive interface</p>
          </div>
          <div className="card">
            <h3>Beautiful Design</h3>
            <p>Customize your page with themes and layouts that match your brand</p>
          </div>
          <div className="card">
            <h3>Analytics</h3>
            <p>Track clicks, engagement, and growth with detailed analytics</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Features</h2>
        <p className="section-subtitle">Everything you need to manage your online presence</p>
        <div className="cards">
          <div className="card">
            <h3>Custom Domains</h3>
            <p>Use your own domain for a professional look</p>
          </div>
          <div className="card">
            <h3>Social Integration</h3>
            <p>Connect all your social media accounts in one place</p>
          </div>
          <div className="card">
            <h3>Payment Links</h3>
            <p>Accept payments and donations directly through your links</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 
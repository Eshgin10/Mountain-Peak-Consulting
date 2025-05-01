import React, { useState, useEffect } from 'react';
import MountainLogo from './MountainLogo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <MountainLogo color="#fff" size={32} />
          <span>Mountain Peak</span>
        </div>
        
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#Features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#Services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#Testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        </div>
        
        <div className={`navbar-buttons ${menuOpen ? 'active' : ''}`}>
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
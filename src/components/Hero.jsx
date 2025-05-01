import React from 'react';
import './Hero.css';
import mountainImg from '../assets/MountainLogo.jpeg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <img src={mountainImg} alt="Mountain cliff" />
        <div className="overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          ELEVATE YOUR <br/> BUSINESS
        </h1>
        <h2 className="hero-subtitle">
          Summit your industry with strategic growth
        </h2>
        <button className="hero-cta">Reach Your Peak</button>
      </div>
    </div>
  );
};

export default Hero;
import React, { useEffect, useRef } from 'react';
import './GrowthSection.css';

const GrowthSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="growth-section" id='Features'>
      <div className="growth-overlay"></div>
      <div className="growth-container">
        <h2 className="growth-title">Ascend to Unrivaled Heights</h2>
        <p className="growth-subtitle">
          Mountain Peak Consulting transforms ambition into dominance, delivering elite strategies that propel businesses to the pinnacle of their industries.
        </p>
        <div className="growth-grid">
          <div
            className="growth-card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4a8fe7">
                <path d="M12 2l10 10H2L12 2z" strokeWidth="2" />
                <path d="M12 12v10" strokeWidth="2" />
              </svg>
            </div>
            <h3>Strategic Vision</h3>
            <p>
              Sculpt a bold future with bespoke roadmaps, meticulously designed to align your goals with market supremacy.
            </p>
          </div>
          <div
            className="growth-card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4a8fe7">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 6v6h6" strokeWidth="2" />
              </svg>
            </div>
            <h3>Operational Mastery</h3>
            <p>
              Elevate efficiency with precision-engineered processes, optimized to deliver unmatched performance and agility.
            </p>
          </div>
          <div
            className="growth-card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4a8fe7">
                <path d="M3 12h18M12 3v18" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
            </div>
            <h3>Global Reach</h3>
            <p>
              Amplify your presence worldwide with our elite market strategies, unlocking exponential growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
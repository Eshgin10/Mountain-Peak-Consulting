import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Mountain Peak Consulting transformed our business strategy, leading us to a 40% revenue increase in just one year. Their expertise is unmatched.",
      author: "Sarah Mitchell",
      position: "CEO, Horizon Enterprises",
      companyLogo: "https://cdn.pixabay.com/photo/2024/08/31/21/30/ai-generated-9012418_1280.png"
    },
    {
      quote: "Their digital transformation services brought our operations into the 21st century. We’ve never been more efficient or competitive.",
      author: "James Carter",
      position: "COO, Apex Solutions",
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDvu-L-uwa_NW_yIb9fO_hF8DAdrEVUDdSLX3JahKwQ&s"
    },
    {
      quote: "The team at Mountain Peak helped us expand into three new markets seamlessly. Their strategic insight is a game-changer.",
      author: "Emily Zhang",
      position: "Founder, Global Ventures",
      companyLogo: "https://cdn.pixabay.com/photo/2024/08/31/21/30/ai-generated-9012418_1280.png"
    },
    {
      quote: "Their leadership programs empowered our team to exceed expectations. We’re now a stronger, more unified organization.",
      author: "Michael Brown",
      position: "HR Director, Summit Innovations",
      companyLogo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDvu-L-uwa_NW_yIb9fO_hF8DAdrEVUDdSLX3JahKwQ&s"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id='Testimonials'>
      <div className="testimonials-overlay"></div>
      <div className="testimonials-parallax"></div>
      <div className="testimonials-container">
        <h2 className="testimonials-title">Feedback From Our Customers</h2>
        <div className="testimonials-carousel">
          <button className="carousel-control prev" onClick={prevTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#4a8fe7">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="testimonial-card-wrapper">
            <div className="testimonial-card" key={currentIndex}>
              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="testimonial-author">
                  <h4>{testimonials[currentIndex].author}</h4>
                  <p>{testimonials[currentIndex].position}</p>
                  <img src={testimonials[currentIndex].companyLogo} alt="Company Logo" className="company-logo" />
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control next" onClick={nextTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#4a8fe7">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
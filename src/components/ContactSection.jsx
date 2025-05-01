import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay"></div>
      <div className="contact-container">
        <h2 className="contact-title">Ascend to New Heights</h2>
        <p className="contact-subtitle">
          Ready to elevate your business? Let’s start the journey together. Share your vision, and we’ll make it reality.
        </p>
        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <div className="contact-form-content">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Vision</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Let’s Climb Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
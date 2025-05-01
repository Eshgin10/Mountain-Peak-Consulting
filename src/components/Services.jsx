import React, { useState } from 'react';
import './Services.css';
import freepik from '../assets/freepik.png';
import robot from '../assets/robot.png';
import wolrd from '../assets/world.jpg';
import road from '../assets/road.jpeg';
import tech from '../assets/tech.jpeg';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Business Strategy Consulting",
      description: "Develop a robust roadmap to achieve market leadership with our expert strategic planning, tailored to your business goals and industry dynamics.",
      image: freepik
    },
    {
      title: "Revenue Growth & Sales Optimization",
      description: "Maximize your revenue potential with data-driven sales strategies, optimizing every stage of your customer journey for sustained growth.",
      image: robot
    },
    {
      title: "Operational Efficiency",
      description: "Streamline your operations with precision, leveraging our expertise to enhance productivity and reduce costs without compromising quality.",
      image: wolrd
    },
    {
      title: "Market Expansion & Entry Strategy",
      description: "Break into new markets confidently with our comprehensive entry strategies, ensuring a strong foothold and accelerated growth.",
      image: road
    },
    {
      title: "Digital Transformation",
      description: "Embrace the future with our digital transformation services, integrating cutting-edge technology to enhance agility and competitiveness.",
      image: tech
    }
  ];

  return (
    <section className="services-section" id='Services'>
      <div className="services-overlay"></div>
      <div className="services-container">
        <h2 className="services-title">Our Core Consulting Services</h2>
        <div className="services-layout">
          <div className="services-left">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-button ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="service-content">
            <h3>{services[activeService].title}</h3>
            <p>{services[activeService].description}</p>
            <img src={services[activeService].image} alt={services[activeService].title} className="service-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
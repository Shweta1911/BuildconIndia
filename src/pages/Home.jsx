import './styles/home.css';
import Video from './video/main_pg.mp4';
import img from './imgs/building1.jpg';
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const swipeRef = useRef(null);

  useEffect(() => {
    const slider = swipeRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScroll = () => slider.scrollWidth - slider.clientWidth;

    const autoScroll = () => {
      if (scrollAmount >= maxScroll()) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        slider.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(autoScroll, 5); // Speed of scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <div className="videoedit">
        <video
          src={Video}
          loop
          muted
          autoPlay
          playsInline
        />
        <h1>You dream We build</h1>
      </div>

      <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={img} alt="Luxury Villa"/>
          <div className="project-info">
            <h3>Luxury Villa</h3>
            <p>Residential Construction</p>
          </div>
        </div>
        <div className="project-card">
          <img src={img} alt="Modern Apartment"/>
          <div className="project-info">
            <h3>Modern Apartment</h3>
            <p>Commercial Project</p>
          </div>
        </div>
      </div>
      <div className="project-grid">
        <div className="project-card">
          <img src={img} alt="Luxury Villa"/>
          <div className="project-info">
            <h3>Luxury Villa</h3>
            <p>Residential Construction</p>
          </div>
        </div>
        <div className="project-card">
          <img src={img} alt="Modern Apartment"/>
          <div className="project-info">
            <h3>Modern Apartment</h3>
            <p>Commercial Project</p>
          </div>
        </div>
      </div>
      {/* <!-- Add more projects --> */}
    </section>
    <section className="services">
      <h2>What We Do</h2>
      <div className="service-cards">
        <div className="card">
          <img src={img} alt="Residential"/>
          <h3>Residential</h3>
          <p>Building dream homes with modern design.</p>
        </div>
        <div className="card">
          <img src={img} alt="Commercial"/>
          <h3>Commercial</h3>
          <p>Office buildings and retail spaces done right.</p>
        </div>
        <div className="card">
          <img src={img} alt="Renovation"/>
          <h3>Renovation</h3>
          <p>Remodeling and upgrading old structures.</p>
        </div>
      </div>
    </section>

    <section className="about">
      <div className="about-content">
        <img src="team-building.jpg" alt="Our Team"/>
        <div className="about-text">
          <h2>About Us</h2>
          <p>We are a team of experienced builders delivering top-quality construction.</p>
          <div className="stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;

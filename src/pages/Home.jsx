import './styles/home.css';
import Video from './video/main_pg.mp4';
import shindeExterior from './imgs/sites/SHINDE/EXTERIOR/FINAL_DAYTIME.jpg';
import harendraExterior from './imgs/sites/HARENDRA SINGH/EXTERIOR/WhatsApp Image 2026-06-29 at 6.04.37 PM.jpeg';
import skExterior from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.02 PM.jpeg';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="6" y1="22" x2="18" y2="22" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C6 4 6 6 6 9z" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C18 4 18 6 18 9z" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.74 7 21" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 19.74 17 21" />
    <path d="M12 2v12" />
    <path d="M9 2h6" />
    <path d="M12 14c-2 0-3-1-3-3V2h6v9c0 2-1 3-3 3z" />
  </svg>
);

const HelmetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a7 7 0 0 1 7 7c0 2-1 4-2 5l-5-5" />
    <path d="M12 22a7 7 0 0 1-7-7c0-2 1-4 2-5l5 5" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="18" y2="3" />
    <path d="M18 7H6a4 4 0 0 0 0 8h4" />
    <polyline points="14 21 10 15 6 15" />
  </svg>
);

const InteriorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

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

    const interval = setInterval(autoScroll, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Video */}
      <div className="videoedit">
        <video src={Video} loop muted autoPlay playsInline />
        <div className="hero-overlay-content">
          <h1>You dream We build</h1>
          <p className="hero-sub">India's trusted construction partner — delivering quality since 2015</p>
          <Link to="/contact" className="hero-btn">Get a Free Quote</Link>
        </div>
      </div>

      {/* Services Preview */}
      <section id="services" className="services-preview section-padding">
        <h2>Our Services</h2><br />
        <p className="section-sub">From foundation to finishing — we do it all</p>
        <div className="preview-cards">
          <div className="preview-card">
            <span className="preview-icon"><HomeIcon /></span>
            <h3>Residential Construction</h3>
            <p>Custom homes, villas, and apartments built with modern design and premium materials.</p>
          </div>
          <div className="preview-card">
            <span className="preview-icon"><BuildingIcon /></span>
            <h3>Commercial Construction</h3>
            <p>Office buildings, retail spaces, and industrial facilities delivered on time and on budget.</p>
          </div>
          <div className="preview-card">
            <span className="preview-icon"><InteriorIcon /></span>
            <h3>Interior Design</h3>
            <p>Modern, functional interiors that reflect your style and enhance your living or working space.</p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/services" className="view-all-link">View All Services →</Link>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="projects-preview section-padding">
        <h2>Recent Projects</h2> <br />
        <p className="section-sub">A glimpse of our finest work</p>
        <div className="preview-grid">
          <div className="project-card">
            <img src={shindeExterior} alt="Shinde Residence" />
            <div className="project-info">
              <h3>Shinde Residence</h3>
              <p>Residential — Pune</p>
            </div>
          </div>
          <div className="project-card">
            <img src={harendraExterior} alt="Harendra Singh Residence" />
            <div className="project-info">
              <h3>Harendra Singh Residence</h3>
              <p>Residential — Mumbai</p>
            </div>
          </div>
          <div className="project-card">
            <img src={skExterior} alt="Sanjay Kendle Residence" />
            <div className="project-info">
              <h3>Sanjay Kendle Residence</h3>
              <p>Residential — Pune</p>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/projects" className="view-all-link">View All Projects →</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-padding">
        <h2>Why Choose Buildcon India?</h2> <br />
        <p className="section-sub">We don't just build structures — we build lasting relationships</p>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon"><TrophyIcon /></span>
            <h3>10+ Years Experience</h3>
            <p>A decade of delivering excellence across residential and commercial projects.</p>
          </div>
          <div className="why-card">
            <span className="why-icon"><HelmetIcon /></span>
            <h3>Expert Team</h3>
            <p>Certified architects, engineers, and project managers dedicated to your vision.</p>
          </div>
          <div className="why-card">
            <span className="why-icon"><ClockIcon /></span>
            <h3>On-Time Delivery</h3>
            <p>We respect your timeline. Our streamlined processes ensure timely completion.</p>
          </div>
          <div className="why-card">
            <span className="why-icon"><RupeeIcon /></span>
            <h3>Transparent Pricing</h3>
            <p>No hidden costs. Clear estimates and honest communication from day one.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>Get a free consultation and estimated quote from our expert team. No obligation, just honest advice.</p>
        <Link to="/contact" className="cta-btn">Get a Free Quote</Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">"Buildcon India transformed our vision into a stunning reality. Professional, on time, and within budget. Highly recommend!"</p>
            <p className="client">Rajesh Mehta</p>
            <p className="client-role">Homeowner, Mumbai</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">"We hired them for our office renovation. The team was meticulous, communicative, and delivered exceptional quality."</p>
            <p className="client">Priya Sharma</p>
            <p className="client-role">CEO, TechSpace Solutions</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">"From foundation to finish, every detail was handled with care. Buildcon India is trust and quality personified."</p>
            <p className="client">Amit Verma</p>
            <p className="client-role">Real Estate Developer</p>
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="about" className="about section-padding">
        <div className="about-content">
          <img src="team-building.jpg" alt="Our Team" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>We are a team of experienced builders delivering top-quality construction across India. Every project we undertake is a promise of excellence, integrity, and craftsmanship.</p>
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

      {/* Brands / Trusted By */}
      <section className="trusted section-padding">
        <p className="trusted-label">Trusted by leading brands across India</p>
        <div className="logo-strip">
          <span className="logo-placeholder">Brand 1</span>
          <span className="logo-placeholder">Brand 2</span>
          <span className="logo-placeholder">Brand 3</span>
          <span className="logo-placeholder">Brand 4</span>
          <span className="logo-placeholder">Brand 5</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
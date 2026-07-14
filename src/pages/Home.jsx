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

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BlueprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const HeadsetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const SofaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
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
        <p className="section-sub">Complete Construction, Interior & Vastu Solutions — From Concept to Completion</p>
        <div className="preview-cards">
          <div className="preview-card">
            <span className="preview-icon"><HomeIcon /></span>
            <h3>Residential Construction</h3>
            <p>We design and build premium homes tailored to your lifestyle. From planning to handover, we ensure quality craftsmanship and timely delivery.</p>
          </div>
          <div className="preview-card">
            <span className="preview-icon"><SofaIcon /></span>
            <h3>Interior Design & Execution</h3>
            <p>Create elegant, functional interiors with premium finishes. Complete interior solutions with attention to detail.</p>
          </div>
          <div className="preview-card">
            <span className="preview-icon"><CompassIcon /></span>
            <h3>Vastu Consultation</h3>
            <p>Integrate traditional Vastu principles into modern architecture for harmonious and balanced living spaces.</p>
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
        <h2>Why Buildcon India?</h2>
        <p className="section-sub">Your trusted partner for quality construction, thoughtful design, and timely project delivery.</p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-icon">
              <BlueprintIcon />
            </div>
            <h3>End-to-End Solutions</h3>
            <p>From planning and approvals to construction, interiors, and final handover, we manage every stage under one roof.</p>
            <div className="why-card-accent"></div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <CompassIcon />
            </div>
            <h3>Vastu-Based Planning</h3>
            <p>We combine modern architecture with Vastu principles to create balanced, functional, and harmonious spaces.</p>
            <div className="why-card-accent"></div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <ShieldIcon />
            </div>
            <h3>Premium Quality Construction</h3>
            <p>We use trusted materials, skilled workmanship, and strict quality checks to deliver durable structures.</p>
            <div className="why-card-accent"></div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <ClipboardIcon />
            </div>
            <h3>Transparent Process</h3>
            <p>Clear quotations, regular progress updates, and complete transparency throughout your project.</p>
            <div className="why-card-accent"></div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <ClockIcon />
            </div>
            <h3>On-Time Delivery</h3>
            <p>Efficient planning and disciplined execution help us complete projects within the committed timeline.</p>
            <div className="why-card-accent"></div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <ShieldIcon />
            </div>
            <h3>Site Supervision</h3>
            <p>Experienced engineers and supervisors closely monitor every stage to maintain quality, safety, and construction standards.</p>
            <div className="why-card-accent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>Get a free consultation and estimated quote from our expert team. No obligation, just honest advice.</p>
        <Link to="/contact" className="cta-btn">Get a Free Quote</Link>
      </section>

      {/* Testimonials - Google Reviews */}
      <section className="testimonials section-padding">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="google-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.03 2.53-2.16 3.31v2.77h3.49c2.04-1.88 3.24-4.64 3.24-7.89z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.49-2.77c-.98.66-2.23 1.06-3.79 1.06-2.91 0-5.37-1.96-6.26-4.63H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.74 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.64 0 3.11.56 4.27 1.67l3.2-3.2C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.56 2.84c.89-2.67 3.35-4.53 6.26-4.53z"/>
                </svg>
              </div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="quote-icon"></div>
            <p className="quote">Very happy with their work the team understood what I wanted and made a beautiful design. Everything was done on time and professionally.</p>
            <div className="testimonial-footer">
              <p className="client">Rita Rao</p>
              <span className="verified-badge">✓ Verified Google Review</span>
            </div>
            <a href="https://www.google.com/maps/search/Buildcon+India" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More →</a>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="google-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.03 2.53-2.16 3.31v2.77h3.49c2.04-1.88 3.24-4.64 3.24-7.89z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.49-2.77c-.98.66-2.23 1.06-3.79 1.06-2.91 0-5.37-1.96-6.26-4.63H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.74 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.64 0 3.11.56 4.27 1.67l3.2-3.2C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.56 2.84c.89-2.67 3.35-4.53 6.26-4.53z"/>
                </svg>
              </div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="quote-icon"></div>
            <p className="quote">It was really a nice experience!! I am happy with process and deal I got from Buildcon. They are professional and very patient. This is not only documentation but includes sightseeing and concise information provided about the project. I get in touch with Mr. Nikhil and Kunal which helped to make process easy.</p>
            <div className="testimonial-footer">
              <p className="client">Preyas gk</p>
              <span className="verified-badge">✓ Verified Google Review</span>
            </div>
            <a href="https://www.google.com/maps/search/Buildcon+India" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More →</a>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="google-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.03 2.53-2.16 3.31v2.77h3.49c2.04-1.88 3.24-4.64 3.24-7.89z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.49-2.77c-.98.66-2.23 1.06-3.79 1.06-2.91 0-5.37-1.96-6.26-4.63H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.74 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.64 0 3.11.56 4.27 1.67l3.2-3.2C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.56 2.84c.89-2.67 3.35-4.53 6.26-4.53z"/>
                </svg>
              </div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="quote-icon"></div>
            <p className="quote">One of the best n great engineering team they have superb coordination..n will surely gonna contact for my future constructions also. Most recommended🤗😇🙌🏻 …</p>
            <div className="testimonial-footer">
              <p className="client">Ankita</p>
              <span className="verified-badge">✓ Verified Google Review</span>
            </div>
            <a href="https://www.google.com/maps/search/Buildcon+India" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More →</a>
          </div>
        </div>

        {/* Google Rating Summary */}
        <div className="google-rating-summary">
          <div className="rating-content">
            <div className="rating-header">
              <div className="google-icon-large">
                <svg viewBox="0 0 24 24" width="40" height="40">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.03 2.53-2.16 3.31v2.77h3.49c2.04-1.88 3.24-4.64 3.24-7.89z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.49-2.77c-.98.66-2.23 1.06-3.79 1.06-2.91 0-5.37-1.96-6.26-4.63H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.74 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.64 0 3.11.56 4.27 1.67l3.2-3.2C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.56 2.84c.89-2.67 3.35-4.53 6.26-4.53z"/>
                </svg>
              </div>
              <div className="rating-text">
                <div className="rating-score">
                  <span className="stars-large">★★★★★</span>
                  <span className="rating-number">4.9</span>
                </div>
                <p className="rating-label">Google Rating</p>
                <p className="review-count">37+ Verified Reviews</p>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/Buildcon+India" target="_blank" rel="noopener noreferrer" className="view-all-reviews-btn">View All Google Reviews</a>
          </div>
        </div>

        <p className="reviews-source">Reviews sourced from our Google Business Profile.</p>
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
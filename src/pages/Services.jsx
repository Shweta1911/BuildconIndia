import './styles/services.css';
import React from 'react';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SofaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const BlueprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const HammerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
    <path d="M17.64 3 22 7.36" />
    <path d="M20.91 11.7 19.3 10.09" />
    <path d="M15 12l8.5-8.5c.83-.83.83-2.17 0-3 0 0 0 0 0 0a2.12 2.12 0 0 1 3 0L18 9" />
  </svg>
);

const servicesData = [
  {
    icon: <HomeIcon />,
    title: 'Residential Construction',
    desc: 'We design and build premium homes tailored to your lifestyle. From planning to handover, we ensure quality craftsmanship, structural integrity, and timely delivery.',
    highlights: ['Independent Villas', 'Duplex Homes', 'Luxury Residences', 'Apartment Construction'],
  },
  {
    icon: <SofaIcon />,
    title: 'Interior Design & Execution',
    desc: 'Create elegant, functional interiors that combine aesthetics with practicality. We deliver complete interior solutions with premium finishes and attention to detail.',
    highlights: ['Modular Kitchens', 'Living & Bedroom Interiors', 'False Ceiling & Lighting', 'Custom Furniture'],
  },
  {
    icon: <CompassIcon />,
    title: 'Vastu Consultation',
    desc: 'Integrate traditional Vastu principles into modern architecture to create harmonious and balanced living and working spaces.',
    highlights: ['Residential Vastu', 'Commercial Vastu', 'Plot Evaluation', 'Layout Optimization'],
  },
  {
    icon: <BlueprintIcon />,
    title: 'Turnkey Construction',
    desc: 'One point of contact for your entire project. We manage design, approvals, construction, interiors, and final handover.',
    highlights: ['End-to-End Project Management', 'Material Procurement', 'Site Supervision', 'Quality Assurance'],
  },
  {
    icon: <OfficeIcon />,
    title: 'Commercial Construction',
    desc: 'Professional construction solutions for offices, retail outlets, commercial buildings, and industrial spaces.',
    highlights: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities'],
  },
  {
    icon: <HammerIcon />,
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with structural improvements, modern finishes, and complete interior upgrades.',
    highlights: ['Home Renovation', 'Office Remodeling', 'Structural Modifications', 'Exterior Upgrades'],
  },
];

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="subtitle">Complete Construction, Interior & Vastu Solutions — From Concept to Completion</p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card-premium" key={index}>
            <div className="service-accent-line"></div>
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-highlights">
              {service.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Process Timeline */}
      <div className="process-section">
        <h2>How We Work</h2>
        <div className="process-steps">
          <div className="process-step">
            <span className="step-num">01</span>
            <span className="step-label">Consultation</span>
          </div>
          <div className="process-step">
            <span className="step-num">02</span>
            <span className="step-label">Planning</span>
          </div>
          <div className="process-step">
            <span className="step-num">03</span>
            <span className="step-label">Execution</span>
          </div>
          <div className="process-step">
            <span className="step-num">04</span>
            <span className="step-label">Handover</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
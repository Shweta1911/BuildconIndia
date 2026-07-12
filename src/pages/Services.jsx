import './styles/services.css';
import React from 'react';

const HomeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BuildingSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

const RenovationSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14 2 18 6 7 17 3 17 3 13 14 2" />
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="9" y1="15" x2="12" y2="12" />
  </svg>
);

const BlueprintSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const LeafSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const PaletteSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="#fca311" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="#fca311" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="#fca311" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="#fca311" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.38-.15-.74-.39-1.01-.25-.28-.39-.64-.39-1.01 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.5-10-10-10z" />
  </svg>
);

const servicesData = [
  {
    icon: <HomeSvg />,
    title: 'Residential Construction',
    desc: 'We design and build custom homes that reflect your lifestyle. From modern villas to compact apartments, every project is crafted with precision and care.',
    features: ['Custom home design & build', 'Premium materials & finishes', 'On-time delivery guaranteed', 'Energy-efficient construction'],
  },
  {
    icon: <BuildingSvg />,
    title: 'Commercial Construction',
    desc: 'Office buildings, retail spaces, and industrial facilities built to the highest standards. We handle projects of all scales with professional project management.',
    features: ['Office buildings & complexes', 'Retail & shopping centers', 'Industrial warehouses', 'End-to-end project management'],
  },
  {
    icon: <RenovationSvg />,
    title: 'Renovation & Remodeling',
    desc: 'Transform your existing space into something extraordinary. Whether it\'s a single room or a complete structural overhaul, we bring new life to old buildings.',
    features: ['Home renovations', 'Office remodeling', 'Structural modifications', 'Interior & exterior upgrades'],
  },
  {
    icon: <BlueprintSvg />,
    title: 'Pre-Construction Services',
    desc: 'From feasibility studies to detailed planning, we help you lay the right foundation before breaking ground. Smart planning saves time and money.',
    features: ['Site assessment & analysis', 'Budget estimation', 'Permit & approval handling', 'Architectural planning'],
  },
  {
    icon: <LeafSvg />,
    title: 'Sustainable Building',
    desc: 'Eco-friendly construction solutions that reduce environmental impact without compromising quality. Green building is the future, and we lead the way.',
    features: ['Green building certification', 'Solar-ready designs', 'Rainwater harvesting systems', 'Sustainable material sourcing'],
  },
  {
    icon: <PaletteSvg />,
    title: 'Interior Design & Fit-Outs',
    desc: 'Complete interior solutions that blend aesthetics with functionality. From concept to completion, our designers create spaces you\'ll love.',
    features: ['Space planning & layout', 'Custom joinery & furniture', 'Lighting & electrical design', 'Turnkey fit-out solutions'],
  },
];

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="subtitle">Comprehensive construction solutions tailored to your needs</p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card-full" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul>
              {service.features.map((feat, i) => (
                <li key={i}>{feat}</li>
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
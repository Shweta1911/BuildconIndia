import './styles/contact.css';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <p className="subtitle">Have a project in mind? Let's discuss how we can help you build.</p>

      <div className="contact-grid">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        {/* Side info */}
        <div className="contact-info-side">
          <div className="contact-info-card">
            <h3><LocationIcon /> Our Address</h3>
            <p>Office No. 441, Triaa Vasantam City Center, Lohgaon Rd, Dhanori, Pune, Maharashtra 411015</p>
          </div>
          <div className="contact-info-card">
            <h3><PhoneIcon /> Call Us</h3>
            <p>+91 95528 74374</p>
          </div>
          <div className="contact-info-card">
            <h3><EmailIcon /> Email</h3>
            <p>buildconindia1@gmail.com</p>
          </div>
          <div className="contact-info-card">
            <h3><ClockIcon /> Working Hours</h3>
            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Buildcon India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5722885240234!2d73.9108153!3d18.593311900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6c7b809c8e9%3A0x558caa4d181981cd!2sBuildcon%20India%20Architects%20%26%20Contractors!5e0!3m2!1sen!2sin!4v1781257175872!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
import './App.css';
import './styles/global.css';
import Contacts from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './pages/Footer';
import { Link, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
        <div className="container">

          {/* Logo / Brand */}
          <Link className="navbar-brand brand-text" to="/home">
            <div className="navbar-brand-wrapper">
              <div className="navbar-logo-container">
                <img src="/logo/logo.svg" alt="Buildcon India" className="navbar-logo" />
              </div>
              <div className="navbar-brand-text">
                <span className="brand-title">Buildcon India</span>
                <span className="brand-subtitle">ARCHITECTS & CONTRACTORS</span>
              </div>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/contact">Contact</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="nav-link quote-btn" to="/contact">Get a Quote</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Page content */}
      <div style={{ marginTop: "0px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
          <Route path="contact" element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
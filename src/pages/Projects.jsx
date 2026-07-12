import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projectData';
import './styles/projects.css';

const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      <p className="subtitle">Click on a project to view exteriors, interiors, and completed work</p>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredProjects.map((project) => {
          const totalImages = Object.values(project.images).reduce(
            (sum, arr) => sum + arr.length, 0
          );
          return (
            <Link
              to={`/projects/${project.id}`}
              className="gallery-item"
              key={project.id}
              style={{ textDecoration: 'none' }}
            >
              <img src={project.thumbnail} alt={project.title} />
              <div className="gallery-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}{project.location ? ` — ${project.location}` : ''}</p>
                <p style={{ fontSize: '0.8rem', color: '#fca311', marginTop: '6px' }}>
                  {totalImages} images • Click to explore
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="projects-cta">
        <h2>Have a Project in Mind?</h2>
        <p>Let's discuss your requirements and turn your vision into reality.</p>
        <Link to="/contact" className="cta-btn">Start Your Project</Link>
      </div>
    </div>
  );
};

export default Projects;
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projectData';
import './styles/projectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [activeTab, setActiveTab] = useState('exterior');
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="text-center" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: '#fff' }}>Project Not Found</h1>
          <Link to="/projects" className="back-link" style={{ marginTop: '20px', display: 'inline-block' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const tabs = Object.keys(project.images).filter(
    (key) => project.images[key] && project.images[key].length > 0
  );

  const tabLabels = {
    exterior: 'Exterior',
    interior: 'Interior',
    'work-done': 'Work Done',
  };

  const currentImages = project.images[activeTab] || [];

  return (
    <div className="project-detail-page">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        {project.location && <p className="project-location">{project.location}</p>}
        <p style={{ color: '#bbb', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.7' }}>
          {project.description}
        </p>
      </div>

      {/* Tab Bar */}
      <div className="tab-bar" style={{ marginTop: '40px' }}>
        {tabs.map((tabKey) => (
          <button
            key={tabKey}
            className={`tab-btn ${activeTab === tabKey ? 'active' : ''}`}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabLabels[tabKey] || tabKey}
            <span className="tab-count">{project.images[tabKey].length}</span>
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="project-image-grid">
        {currentImages.length === 0 ? (
          <div className="no-images">No images available in this category.</div>
        ) : (
          currentImages.map((img, idx) => (
            <div
              className="project-image-item"
              key={idx}
              onClick={() => setLightboxImg(img.src)}
            >
              <img src={img.src} alt={img.label} />
              <div className="img-label">{img.label}</div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="close-lightbox" onClick={() => setLightboxImg(null)}>×</button>
          <img src={lightboxImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
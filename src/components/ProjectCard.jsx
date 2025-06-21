// src/components/ProjectCard.jsx
import './ProjectCard.css';
import { FaPlay, FaClock } from 'react-icons/fa';

export default function ProjectCard({ title, description, imageSrc, playLink, comingSoon = false }) {
  const handlePlay = () => {
    if (comingSoon || !playLink) return;
    window.open(playLink, '_blank');
  };

  return (
    <div className="project-card">
      {imageSrc && <img src={imageSrc} alt={title} className="project-image" />}
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button
        className="project-button"
        onClick={handlePlay}
        disabled={comingSoon}
        style={{ opacity: comingSoon ? 0.6 : 1 }}
      >
        {comingSoon ? (
          <>
            <FaClock className="play-icon" />
            Coming Soon
          </>
        ) : (
          <>
            <FaPlay className="play-icon" />
            Play Now
          </>
        )}
      </button>
    </div>
  );
}

// src/components/ProjectCard.jsx
import './ProjectCard.css';
import { FaPlay } from 'react-icons/fa';

export default function ProjectCard({ title, description, imageSrc, onClick }) {
  return (
    <div className="project-card">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="project-image" />
      )}

      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <button className="project-button" onClick={onClick}>
        <FaPlay className="play-icon" /> PLAY NOW
      </button>
    </div>
  );
}

import './Footer.css';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdCopyright } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  // Determine the link based on the current path
  const isProjectsPage = location.pathname === '/projects';
  const linkHref = isProjectsPage ? '/' : '/projects';
  const linkLabel = isProjectsPage ? 'Back to Homepage' : 'Our Projects';

  return (
    <footer className="footer">
      <div className="footer-left">
        <MdCopyright size={18} />
        <span>2404STUDIOS. - 2025</span>
      </div>

      <div className="footer-center">
        <a href="mailto:2404studios@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="social-icon" />
        </a>
        <a href="https://wa.me/2349042742781" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
        <a href="https://x.com/2404Studio?s=35" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>

      <div className="footer-right">
        <Link to={linkHref}>{linkLabel}</Link>
        <a href="mailto:2404studios@gmail.com">Help</a>
      </div>
    </footer>
  );
}

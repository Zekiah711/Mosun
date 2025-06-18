import './Header.css';
import logo from '../assets/LOGO_2404STUDIOS_SOCIAL/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="2404Logo" className="logo" />
      </div>
      <nav className="nav-links">
       <a href="mailto:2404studios@gmail.com" target="_blank" rel="noopener noreferrer"> Contact Us</a>
        <Link to={isProjectsPage ? '/' : '/projects'}>
          {isProjectsPage ? 'Back to Homepage' : 'Our Projects'}
        </Link>
      </nav>
    </header>
  );
}

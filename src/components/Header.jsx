import './Header.css';
import logo from '../assets/LOGO_2404STUDIOS_SOCIAL/logo.png'; // Adjust the path if needed


export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="2404Logo" className="logo" /></div>
      <nav className="nav-links">
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

// src/components/Footer.jsx
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <MdCopyright size={18} />
        <span>2404STUDIOS. - 2025</span>
      </div>

      <div className="footer-center">
        <FaFacebookF className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>

      <div className="footer-right">
        <a href="#">Help</a>
        <a href="#">Careers</a>
      </div>
    </footer>
  );
}

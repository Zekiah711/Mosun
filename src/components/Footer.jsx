// src/components/Footer.jsx
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdCopyright } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <MdCopyright size={18} />
        <span>2404STUDIOS. - 2025</span>
      </div>

      <div className="footer-center">
       <a href="mailto:yourmail@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className="social-icon" />
      </a>
      <a href="https://wa.me/2349042742781" target="_blank" rel="noopener noreferrer"> 
        <FaWhatsapp className="social-icon" /> 
      </a>
       <a href="" target="_blank" rel="noopener noreferrer"> 
         <FaTwitter className="social-icon" /> 
      </a>

      </div>

      <div className="footer-right">
        <a href="">Help</a>
      </div>
    </footer>
  );
}

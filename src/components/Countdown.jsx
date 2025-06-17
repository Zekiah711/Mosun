// src/components/Countdown.jsx
import { useEffect, useState } from 'react';
import './Countdown.css';
import { FaBell } from 'react-icons/fa';
import mosunLogo from '../assets/LOGO_2404STUDIOS_SOCIAL/mosun_logo.png'


export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="frosted-box">
        <img src={mosunLogo} alt="Mosun Logo" className="glow-image" />
        <h2 className="event-title">COMING TO YOU!</h2>
        <div className="time-wrapper">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div className="time-block" key={label}>
              <div className="time-value">{value.toString().padStart(2, '0')}</div>
              <div className="time-label">{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reminder-section">
        <p className="reminder-text">
          Ancient echoes rise, mystery calls from beyond.
          <br />Power and legend converge, <br />
          Ṣé o setán?
          Destiny awaits 
        </p>
        <button className="remind-button"><FaBell className="bell-icon" /> REMIND ME</button>
      </div>
    </div>
  );
}

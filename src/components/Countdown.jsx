import { useEffect, useState } from 'react';
import './Countdown.css';
import { FaBell, FaSpinner } from 'react-icons/fa'; // FaSpinner for loading icon
import mosunLogo from '../assets/LOGO_2404STUDIOS_SOCIAL/mosun_logo.png';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRemindClick = () => {
    setLoading(true);

    const calendarEvent = `
        BEGIN:VCALENDAR
        VERSION:2.0
        CALSCALE:GREGORIAN
        BEGIN:VEVENT
        SUMMARY:Mosun Adventure Launch
        DESCRIPTION=Don't forget to play Mosun.
        DTSTART:20250623T090000Z
        DTEND:20250623T093000Z
        LOCATION=Online
        END:VEVENT
        END:VCALENDAR
     `.trim();

    const blob = new Blob([calendarEvent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'mosun-reminder.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setLoading(false);
    }, 1000); // brief pause to simulate processing
  };

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
          <br />
          Power and legend converge, <br />
          Ṣé o setán? Destiny awaits
        </p>
        <button
          className="remind-button"
          onClick={handleRemindClick}
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="spin bell-icon" />
              Loading...
            </>
          ) : (
            <>
              <FaBell className="bell-icon" />
              REMIND ME
            </>
          )}
        </button>
      </div>
    </div>
  );
}

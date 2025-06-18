import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import OtherProjects from './pages/OtherProjects'; // <-- Import the new page

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<OtherProjects />} />
      </Routes>
    </Router>
  );
}

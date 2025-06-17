import Header from './components/Header';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import './App.css';

function App() {
  const targetDate = '2025-08-01T00:00:00';

  return (
    <div className="app">
      <div className="background-overlay" />
      <Header />
      <div className="overlay">
        <Countdown targetDate={targetDate} />
        <Footer />
      </div>
    </div>
  );
}


export default App;

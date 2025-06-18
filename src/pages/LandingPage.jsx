import Header from '../components/Header';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Countdown targetDate={'2025-06-20T00:00:00'} />
      <Footer />
    </>
  );
}

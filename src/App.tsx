import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import MeetTheExperts from './components/MeetTheExperts';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import ServicePage from './pages/ServicePage';
import LeadMagnetPage from './pages/LeadMagnetPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <MeetTheExperts />
      <Features />
      <Services />
      <HowItWorks />
      <LeadMagnet />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/pet-health-calculator" element={<LeadMagnetPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </Router>
  );
}

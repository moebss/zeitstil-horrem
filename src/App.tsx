import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProductsShowcase from './components/ProductsShowcase';
import BoutiqueExperience from './components/BoutiqueExperience';
import AtmosphereGallery from './components/AtmosphereGallery';
import GoogleReviews from './components/GoogleReviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('Damenmode & Outfit-Beratung');

  const scrollToContact = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2623] flex flex-col font-sans selection:bg-[#c48b52] selection:text-white pb-16 sm:pb-0 overflow-x-hidden">
      
      {/* Top Navigation */}
      <Navbar onOpenContact={(topic) => scrollToContact(topic)} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenContact={(topic) => scrollToContact(topic)} />

        {/* 6 Core USPs Trust Bar */}
        <TrustStrip />

        {/* Interactive Collections & Products Showcase */}
        <ProductsShowcase onOpenContact={(topic) => scrollToContact(topic)} />

        {/* Boutique Story & Private Shopping Lounge */}
        <BoutiqueExperience onOpenContact={(topic) => scrollToContact(topic)} />

        {/* Atmosphere Visual Gallery (Unique Non-Duplicated Assets) */}
        <AtmosphereGallery />

        {/* Verified Google Reviews */}
        <GoogleReviews />

        {/* FAQ Section */}
        <FAQ />

        {/* Opening Hours, Location Map & Inquiry Form */}
        <Contact selectedTopic={selectedTopic} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      {/* Mobile Conversion Bar */}
      <MobileStickyBar onOpenContact={(topic) => scrollToContact(topic)} />

      {/* Legal Modals (Impressum & Datenschutz) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import OpeningStatus from './OpeningStatus';

interface NavbarProps {
  onOpenContact: (topic?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Kollektionen', href: '#kollektionen' },
    { label: 'Über Zeitstil', href: '#ueber-uns' },
    { label: 'Einblicke', href: '#galerie' },
    { label: 'Kundenstimmen', href: '#bewertungen' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Anfahrt & Zeiten', href: '#kontakt' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#ede6dc] py-2.5'
            : 'bg-[#faf8f5]/80 backdrop-blur-sm py-3.5 border-b border-[#ede6dc]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Tagline */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#c48b52] text-white flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2d2623] leading-none">
                  Zeitstil
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#7a6a5e] font-medium mt-0.5">
                  Fashion · Wohnaccessoires &amp; more
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#5a504a] hover:text-[#c48b52] transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Status & Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <OpeningStatus compact />

              <a
                href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20habe%20eine%20Frage%20zu%20einem%20Artikel%20bei%20Zeitstil."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-all border border-[#25D366]/25"
                title="Per WhatsApp schreiben"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+4922739915676"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#2d2623] text-white hover:bg-[#c48b52] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>02273 9915676</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+4922739915676"
                className="p-2 rounded-full bg-[#f0eae1] text-[#2d2623] hover:text-[#c48b52] transition-colors"
                aria-label="Anrufen"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#2d2623] hover:bg-[#f0eae1] transition-colors"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#faf8f5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#ede6dc]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#c48b52] text-white flex items-center justify-center font-serif font-bold text-sm">
                    Z
                  </div>
                  <span className="font-serif text-lg font-bold text-[#2d2623]">
                    Zeitstil
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#6e645e] hover:bg-[#ede6dc]"
                  aria-label="Menü schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4">
                <OpeningStatus />
              </div>

              <nav className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-left font-medium text-[#4a3f39] hover:bg-[#f2ebe2] hover:text-[#c48b52] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#9b9088]">→</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#ede6dc] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#6e645e] mb-2">
                <MapPin className="w-4 h-4 text-[#c48b52] shrink-0" />
                <span>Hauptstraße 183, 50169 Kerpen-Horrem</span>
              </div>

              <a
                href="https://wa.me/4915222739532"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ebd5b] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Nachricht</span>
              </a>

              <a
                href="tel:+4922739915676"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium bg-[#2d2623] text-white hover:bg-[#403733] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>02273 9915676</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2 text-xs text-center text-[#7a6a5e] underline underline-offset-2"
              >
                Nachricht über Formular senden
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

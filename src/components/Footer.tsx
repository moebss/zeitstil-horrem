import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#26201e] text-[#e0d6ce] pt-16 pb-24 sm:pb-16 border-t border-[#3d3330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3d3330]">
          
          {/* Col 1: Brand & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c48b52] text-white flex items-center justify-center font-serif text-xl font-bold">
                Z
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Zeitstil
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#b8a698]">
                  Fashion · Wohnaccessoires &amp; more
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#baa99b] leading-relaxed max-w-sm">
              Ihre inhabergeführte Boutique für Damenmode, Wohnaccessoires und Präsente im Herzen von Kerpen-Horrem. Seit 2011 mit Herzblut und persönlicher Beratung für Sie da.
            </p>

            <div className="pt-2 text-xs text-[#b8a698] space-y-1">
              <p className="font-medium text-white">Inhaberin: Ana Emese Dauendorffer</p>
              <p>Hauptstraße 183 · 50169 Kerpen-Horrem</p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#baa99b]">
              <li><a href="#kollektionen" className="hover:text-[#c48b52] transition-colors">Damenmode</a></li>
              <li><a href="#kollektionen" className="hover:text-[#c48b52] transition-colors">Wohnaccessoires</a></li>
              <li><a href="#kollektionen" className="hover:text-[#c48b52] transition-colors">Geschenke &amp; Deko</a></li>
              <li><a href="#ueber-uns" className="hover:text-[#c48b52] transition-colors">Über Zeitstil &amp; Emi</a></li>
              <li><a href="#ueber-uns" className="hover:text-[#c48b52] transition-colors">Mädelsabende</a></li>
              <li><a href="#bewertungen" className="hover:text-[#c48b52] transition-colors">Kundenstimmen</a></li>
              <li><a href="#faq" className="hover:text-[#c48b52] transition-colors">Häufige Fragen</a></li>
            </ul>
          </div>

          {/* Col 3: Opening Hours Quick Summary (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide">
              Öffnungszeiten
            </h4>
            <div className="text-xs text-[#baa99b] space-y-1.5 leading-relaxed">
              <p><span className="text-white font-medium">Mo:</span> 15:00 – 18:00 Uhr</p>
              <p><span className="text-white font-medium">Di, Do, Fr:</span> 10:00 – 13:00 &amp; 15:00 – 18:00 Uhr</p>
              <p><span className="text-white font-medium">Mi, Sa:</span> 10:00 – 13:00 Uhr</p>
              <p><span className="text-white font-medium">So:</span> Geschlossen</p>
              <p className="pt-2 text-[11px] text-[#9c8b7d]">
                Private Shopping Termine nach Vereinbarung.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Social (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wide">
              Direktkontakt
            </h4>
            <div className="text-xs text-[#baa99b] space-y-2">
              <p>
                <a href="tel:+4922739915676" className="hover:text-[#c48b52] transition-colors block">
                  02273 9915676
                </a>
              </p>
              <p>
                <a href="https://wa.me/4915222739532" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline block font-medium">
                  WhatsApp: 01522 2739532
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/ZeitstilDekoFashion/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c48b52] transition-colors block">
                  Facebook Profil
                </a>
              </p>
              <p>
                <a href="https://maps.google.com/?q=Hauptstraße+183+50169+Kerpen-Horrem" target="_blank" rel="noopener noreferrer" className="hover:text-[#c48b52] transition-colors block">
                  Auf Google Maps
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO Area Served Tags */}
        <div className="py-6 border-b border-[#3d3330] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#9c8b7d]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-white">Einzugsgebiet:</span>
            <span>Kerpen-Horrem</span>
            <span>·</span>
            <span>Kerpen</span>
            <span>·</span>
            <span>Sindorf</span>
            <span>·</span>
            <span>Bergheim</span>
            <span>·</span>
            <span>Frechen</span>
            <span>·</span>
            <span>Türnich</span>
            <span>·</span>
            <span>Götzenkirchen</span>
            <span>·</span>
            <span>Köln-West</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-[#baa99b] hover:text-[#c48b52] transition-colors cursor-pointer"
          >
            <span>Nach oben</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7b6e]">
          <div>
            &copy; {new Date().getFullYear()} Zeitstil – Inh. Ana Emese Dauendorffer. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

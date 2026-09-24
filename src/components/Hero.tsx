import { MapPin, Star, MessageCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import heroImg from '../images/hero_boutique.jpg';
import OpeningStatus from './OpeningStatus';

interface HeroProps {
  onOpenContact: (topic?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f5efe6] to-[#faf8f5]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e8d5be]/40 via-[#f0e3d2]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-[#ede4d8] text-[#7a5934] border border-[#d9c9b5]">
                <Sparkles className="w-3.5 h-3.5 text-[#c48b52] shrink-0" />
                Inhabergeführt seit 2011
              </span>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/90 text-[#3b322c] border border-[#ede6dc] shadow-2xs">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span>4.9 / 5.0</span>
                <span className="text-[#8c8077] font-normal">(48+ Google Rezensionen)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#2d2623] leading-[1.15] tracking-tight">
              Mode, die begeistert.{' '}
              <span className="block italic font-normal text-[#a66f38] mt-1">
                Wohnen, das berührt.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5a504a] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Willkommen bei <strong>Zeitstil</strong> in Horrem – Ihrer Adresse für exklusive Damenmode, skandinavische Wohnaccessoires und mit Liebe ausgewählte Geschenkideen. Entdecken Sie individuelle Kollektionen, persönliche Beratung und das besondere Wohlfühl-Erlebnis.
            </p>

            {/* Direct Opening Info Card for Mobile/Desktop */}
            <div className="inline-block pt-1">
              <OpeningStatus />
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollTo('kollektionen')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#2d2623] text-white hover:bg-[#c48b52] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Kollektionen entdecken</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Outfit%20oder%20Deko-St%C3%BCck%20bei%20Zeitstil."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1fae53] shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Beratung</span>
              </a>

              <button
                onClick={() => {
                  onOpenContact('Allgemeine Frage');
                  scrollTo('kontakt');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium bg-white text-[#4a3f39] hover:bg-[#f2ebe2] border border-[#ede6dc] transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#c48b52] shrink-0" />
                <span>Hauptstraße 183</span>
              </button>
            </div>

            {/* USPs Micro-Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#ede6dc]/80 text-xs text-[#6e645e]">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#c48b52] shrink-0" />
                <span>Kostenloser Geschenkservice</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c48b52] shrink-0" />
                <span>Wöchentlich neue Mode-Trends</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#c48b52] shrink-0" />
                <span>Barrierefreier Zugang &amp; Parken nah</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Boutique Ambience */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Warm Shadow & Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
                <img
                  src={heroImg}
                  alt="Zeitstil Boutique Innenansicht Kerpen-Horrem Hauptstraße"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#a66f38]">
                        Boutique Kerpen-Horrem
                      </p>
                      <p className="text-sm font-serif font-bold text-[#2d2623] mt-0.5">
                        Hauptstraße 183 · 50169 Kerpen
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#f6e8da] text-[#7a5327]">
                      Neue Kollektion da
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge Top Right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white py-2 px-3.5 rounded-2xl shadow-lg border border-[#ede6dc] flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c48b52] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c48b52]" />
                </span>
                <span className="text-xs font-semibold text-[#2d2623]">
                  Persönliche Stilberatung
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

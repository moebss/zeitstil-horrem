import { Heart, Coffee, Sparkles, Users, CalendarCheck, PhoneCall } from 'lucide-react';
import ownerImg from '../images/owner_emi.jpg';
import loungeImg from '../images/personal_shopping.jpg';

interface BoutiqueExperienceProps {
  onOpenContact: (topic?: string) => void;
}

export default function BoutiqueExperience({ onOpenContact }: BoutiqueExperienceProps) {
  return (
    <section id="ueber-uns" className="py-20 md:py-28 bg-[#f4efe8]/70 border-t border-[#ede6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Owner Portrait & Experience Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/5">
                <img
                  src={ownerImg}
                  alt="Inhaberin Ana Emese Emi Dauendorffer von Zeitstil Horrem"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f5d5b0] block mb-1">
                    Inhaberin &amp; Gründerin
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    Ana Emese „Emi“ Dauendorffer
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 mt-1.5 font-sans leading-relaxed">
                    „Mode und Schönes fürs Zuhause sind eine Herzensangelegenheit.“
                  </p>
                </div>
              </div>

              {/* Decorative Experience Badge placed at top-right without covering text */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#ede6dc] max-w-[210px] z-20">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#c48b52] fill-[#c48b52]" />
                  <span className="text-xs font-bold text-[#2d2623]">Inhabergeführt</span>
                </div>
                <p className="text-[11px] text-[#70645c] leading-tight">
                  Seit 2011 mit Liebe zum Detail für Kundinnen im Rhein-Erft-Kreis.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934]">
              <Sparkles className="w-3.5 h-3.5 text-[#c48b52]" />
              Die Zeitstil Philosophie
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] leading-tight">
              Ein Ort zum Ankommen, Wohlfühlen und Entdecken
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5a504a] leading-relaxed">
              <p>
                Was 2011 als leidenschaftlicher Onlineshop begann, wuchs 2017 zum stationären Lieblingsladen in Kerpen-Horrem heran: Bei <strong>Zeitstil</strong> geht es um mehr als Kleidung und Dekoration – es geht um das gute Gefühl, genau das Richtige für sich und das eigene Zuhause zu finden.
              </p>
              <p>
                Inhaberin <strong>Emi Dauendorffer</strong> wählt jedes Teil persönlich auf Modemessen und bei ausgewählten Herstellern aus. Dabei stehen drei Dinge im Vordergrund: außergewöhnliche Qualität, angenehme Passformen und ein unverwechselbarer Stil, den man nicht an jeder Ecke sieht.
              </p>
              <p className="font-medium text-[#2d2623]">
                Kein Kaufdruck, keine Hektik – bei uns nehmen wir uns Zeit für Sie. Auf Wunsch mit einer frischen Tasse Kaffee oder einem Kaltgetränk in unserer gemütlichen Sitzecke.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#ede6dc] shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold font-serif text-[#2d2623] text-sm">
                  <Coffee className="w-4 h-4 text-[#c48b52]" />
                  <span>Entspannte Boutique-Atmosphäre</span>
                </div>
                <p className="text-xs text-[#70645c] mt-1.5 leading-relaxed">
                  In Ruhe anprobieren, kombinieren und beraten lassen – ohne Umkleide-Stress.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#ede6dc] shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold font-serif text-[#2d2623] text-sm">
                  <Users className="w-4 h-4 text-[#c48b52]" />
                  <span>Ehrliche Typberatung</span>
                </div>
                <p className="text-xs text-[#70645c] mt-1.5 leading-relaxed">
                  Wir sagen Ihnen offen, was Ihnen wirklich steht und Ihre Persönlichkeit unterstreicht.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Feature Banner: Mädelsabende & Private Shopping */}
        <div className="mt-16 sm:mt-20 bg-white rounded-3xl border border-[#ede6dc] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a66f38]">
                Exklusives Event-Erlebnis
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d2623]">
                Mädelsabende &amp; Private Shopping in Horrem
              </h3>
              <p className="text-sm sm:text-base text-[#5a504a] leading-relaxed">
                Möchten Sie mit Ihren besten Freundinnen, Schwestern oder Kolleginnen ganz ungestört stöbern? Buchen Sie Ihren ganz persönlichen <strong>Mädelsabend</strong> bei Zeitstil! Außerhalb der regulären Öffnungszeiten gehört die gesamte Boutique Ihnen.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#4a3f39]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c48b52]" />
                  <span>Exklusiver Zugang für Ihre Gruppe (ab 4–5 Personen)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c48b52]" />
                  <span>Inklusive Begrüßungs-Prosecco, kleinen Knabbereien &amp; Kaffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c48b52]" />
                  <span>Persönliche Stylingtipps von Emi und jede Menge Spaß</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20M%C3%A4delsabend%20oder%20Private%20Shopping%20Termin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#c48b52] text-white hover:bg-[#a66f38] transition-colors shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>WhatsApp Anfrage</span>
                </a>
                <button
                  onClick={() => onOpenContact('Mädelsabend / Private Shopping')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[#f5ede2] text-[#4a3f39] hover:bg-[#ebdcc9] transition-colors cursor-pointer"
                >
                  <span>Formular nutzen</span>
                </button>
                <a
                  href="tel:+4922739915676"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-white text-[#4a3f39] border border-[#ede6dc] hover:bg-[#f5ede2] transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#c48b52]" />
                  <span>02273 9915676</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 relative h-64 md:h-full min-h-[300px]">
              <img
                src={loungeImg}
                alt="Gemütliche Sitzecke für Personal Shopping bei Zeitstil Horrem"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/20 via-transparent to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

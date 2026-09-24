import { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import fashionImg from '../images/fashion_collection.jpg';
import homeDecorImg from '../images/home_decor.jpg';
import shoesBagsImg from '../images/shoes_bags.jpg';
import giftsImg from '../images/gifts_accessories.jpg';

interface ProductsShowcaseProps {
  onOpenContact: (topic?: string) => void;
}

export default function ProductsShowcase({ onOpenContact }: ProductsShowcaseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = [
    {
      id: 'mode',
      title: 'Damenmode & Trends',
      subtitle: 'Italienische Mode, Kleider, Strick & Hosen',
      image: fashionImg,
      badge: 'Wöchentlich neue Stücke',
      description:
        'Bei Zeitstil entdecken Sie handverlesene Damenmode mit Wohlfühlfaktor. Von bequemen Strickpullovern in sanften Naturtönen über elegante Kleider bis hin zu lässigen Blusen und Hosen. Wir führen Kollektionen renommierter Marken wie Milano Italy oder Heart Kiss – stilvoll, modern und immer alltagstauglich tragbar.',
      points: [
        'Kollektionen von Gr. 36 bis 46+',
        'Hautschmeichelnde Naturmaterialien & edler Strick',
        'Ausgewählte italienische & skandinavische Schnitte',
        'Ehrliche Stilberatung & stressfreie Anprobe vor Ort'
      ],
      whatsappText: 'Hallo Frau Dauendorffer, ich habe eine Frage zur aktuellen Damenmode-Kollektion.'
    },
    {
      id: 'wohnen',
      title: 'Wohnaccessoires & Deko',
      subtitle: 'Skandinavisches Hygge & zeitlose Gemütlichkeit',
      image: homeDecorImg,
      badge: 'Design für Ihr Zuhause',
      description:
        'Verwandeln Sie Ihr Zuhause in eine Wohlfühloase: Bei Zeitstil finden Sie geschmackvolle Vasen, duftende Kerzen, hochwertige Kissen, Trockenblumen, Tableware und stimmungsvolle Windlichter. Alles sorgsam aufeinander abgestimmt für zeitlose Behaglichkeit.',
      points: [
        'Skandinavische Vasen & organische Keramik',
        'Aromatherapie-Duftkerzen & Diffusoren',
        'Kuschelige Decken, Kissen & Tisch-Accessoires',
        'Saisonale Deko-Highlights für Frühling, Herbst & Festtage'
      ],
      whatsappText: 'Hallo Frau Dauendorffer, ich interessiere mich für Ihre Wohnaccessoires und Deko.'
    },
    {
      id: 'schmuck-taschen',
      title: 'Taschen, Schuhe & Schmuck',
      subtitle: 'Das perfekte Finish für Ihr Lieblingsoutfit',
      image: shoesBagsImg,
      badge: 'Echtleder & Manufakturen',
      description:
        'Ein gelungener Look lebt von den Details: Ergänzen Sie Ihr Outfit mit modischen Ledertaschen aus Italien, bequemen Schuhen und zartem Modeschmuck. Ob filigrane Ketten, Ohrstecker, Ringe oder edle Kaschmirschals – hier finden Sie Ihr neues Lieblingsteil.',
      points: [
        'Handtaschen & Crossbody-Bags aus italienischem Leder',
        'Bequeme Loafer, Sneaker & Stiefeletten',
        'Hautfreundlicher, minimalistischer Modeschmuck',
        'Schals, Tücher & Gürtel farblich harmonisch abgestimmt'
      ],
      whatsappText: 'Hallo Frau Dauendorffer, führen Sie aktuell bestimmte Handtaschen oder Schmuckstücke?'
    },
    {
      id: 'geschenke',
      title: 'Geschenkideen & Gutscheine',
      subtitle: 'Liebevoll verpackt für besondere Menschen',
      image: giftsImg,
      badge: 'Kostenloser Geschenkservice',
      description:
        'Sie suchen ein Geburtstagsgeschenk, ein kleines Mitbringsel oder eine stilvolle Überraschung? Bei Zeitstil wird Schenken zur Freude. Wir verpacken jeden gekauften Artikel mit viel Hingabe, edlem Geschenkpapier und seidenen Schleifen – völlig kostenfrei.',
      points: [
        'Wunderschöne Geschenkgutscheine in jedem Wunschbetrag',
        'Liebevoller Einpackservice mit Schleifen & Kärtchen',
        'Präsente für Freundinnen, Mamas, Kolleginnen & Feiertage',
        'Auf Wunsch telefonische Vorbestellung & Abholung'
      ],
      whatsappText: 'Hallo Frau Dauendorffer, ich benötige ein Geschenk / einen Gutschein und möchte mich erkundigen.'
    }
  ];

  const current = categories[activeTab];

  return (
    <section id="kollektionen" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c48b52]" />
            Sortiment &amp; Highlights
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] tracking-tight">
            Liebevoll kuratiert für Sie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6e645e]">
            Entdecken Sie unsere vier Sortimentswelten. Ob ein neues Lieblingsoutfit, ein Deko-Highlight für den Wohnzimmertisch oder das perfekte Geschenk – in Horrem sind Sie genau richtig.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#2d2623] text-white shadow-md scale-102'
                  : 'bg-white text-[#554a44] border border-[#ede6dc] hover:border-[#c48b52] hover:text-[#c48b52]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-3xl border border-[#ede6dc] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[500px]">
              <img
                src={current.image}
                alt={`${current.title} in der Zeitstil Boutique Kerpen-Horrem`}
                className="w-full h-full object-cover transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#7a5934] shadow-sm">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a66f38]">
                  {current.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d2623] mt-1.5 mb-4">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5a504a] leading-relaxed">
                  {current.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-6 space-y-2.5">
                  {current.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c48b52] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#4a3f39] font-medium leading-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#ede6dc] flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/4915222739532?text=${encodeURIComponent(current.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ebd5b] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Auf WhatsApp anfragen</span>
                </a>

                <button
                  onClick={() => onOpenContact(current.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium bg-[#f5ede2] text-[#4a3f39] hover:bg-[#ebdcc9] transition-colors cursor-pointer"
                >
                  <span>Termin / Besuch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Small Bottom Info Box */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-[#f7f2eb] border border-[#e5dacf] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c48b52]/15 text-[#a66f38] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#2d2623]">
                Haben Sie ein bestimmtes Teil im Schaufenster oder auf Social Media gesehen?
              </p>
              <p className="text-xs text-[#70645c] mt-0.5">
                Schreiben Sie uns einfach kurz per WhatsApp – wir legen Ihren Wunschartikel gerne zur Anprobe zurück.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20habe%20ein%20bestimmtes%20Teil%20gesehen%20und%20m%C3%B6chte%20fragen%20ob%20es%20noch%20da%20ist."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold bg-[#2d2623] text-white hover:bg-[#c48b52] transition-colors"
          >
            Artikel anfragen
          </a>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Wo befindet sich die Zeitstil Boutique genau und wie sind die Parkmöglichkeiten?",
      a: "Sie finden uns auf der Hauptstraße 183 in 50169 Kerpen-Horrem, unweit des Bahnhofs Horrem und der Christus-König-Kirche. Öffentliche Parkplätze stehen direkt entlang der Hauptstraße sowie auf den nahegelegenen Parkplätzen in wenigen Gehminuten zur Verfügung."
    },
    {
      q: "Bieten Sie Geschenkgutscheine an?",
      a: "Ja, sehr gerne! Wir stellen stilvoll gestaltete Gutscheine in beliebiger Höhe aus. Der Gutschein wird von uns kostenlos und liebevoll als Geschenk mit Schleife verpackt – perfekt zum Verschenken an Freundinnen, Mütter oder Kolleginnen."
    },
    {
      q: "Kann ich ein Teil aus dem Schaufenster oder von Social Media per WhatsApp reservieren?",
      a: "Selbstverständlich! Wenn Sie bei einem Spaziergang oder online etwas Schönes entdeckt haben, schreiben Sie uns einfach eine kurze Nachricht per WhatsApp (01522 2739532). Wir legen das gewünschte Teil gerne unverbindlich für Sie zur Anprobe zurück."
    },
    {
      q: "Was genau ist ein Mädelsabend oder Private Shopping bei Zeitstil?",
      a: "Bei unserem Private Shopping gehört Ihnen und Ihrer Gruppe (ab 4–5 Personen) die Boutique exklusiv nach Feierabend. Sie können in privater Runde ungestört stöbern, anprobieren und lachen – begleitet von gekühltem Prosecco, kleinen Snacks und persönlicher Beratung durch Emi Dauendorffer. Die Terminvereinbarung erfolgt ganz flexibel per WhatsApp oder Telefon."
    },
    {
      q: "Werden Geschenke wirklich kostenlos verpackt?",
      a: "Ja! Jeder bei uns gekaufte Deko- oder Modeartikel wird auf Wunsch als kunstvolles Geschenk verpackt. Wir legen großen Wert auf Details wie hochwertige Geschenkbänder, zarte Trockenblumen und stilvolles Papier."
    },
    {
      q: "Welche Konfektionsgrößen führen Sie in der Damenmode?",
      a: "Unsere Modekollektionen richten sich an Frauen jeden Alters. Die meisten Kleidungsstücke, Strickpullover, Blusen und Hosen führen wir in den Größen 36 bis 46 bzw. als lockere One-Size-Fits-Most-Schnitte mit schmeichelhaftem Sitz."
    },
    {
      q: "Ist das Geschäft barrierefrei zugänglich?",
      a: "Ja, unser Ladengeschäft auf der Hauptstraße 183 ist ebenerdig und sowohl für Rollstuhlfahrerinnen als auch für Eltern mit Kinderwagen problemlos zugänglich."
    },
    {
      q: "Welche Zahlungsmöglichkeiten akzeptieren Sie?",
      a: "Sie können bei uns bequem mit EC-Karte (Girocard), gängigen Kreditkarten (Mastercard, Visa), kontaktlos per Smartphone sowie selbstverständlich in bar bezahlen."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c48b52]" />
            Häufige Fragen
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] tracking-tight">
            Gut zu wissen
          </h2>
          <p className="mt-3 text-base text-[#6e645e]">
            Alles Wichtige rund um Ihren Besuch, Gutscheine, Größen und unsere Mädelsabende.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ede6dc] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2d2623] hover:text-[#c48b52] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a66f38] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#c48b52]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-[#5a504a] leading-relaxed border-t border-[#f2ebe2] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small Bottom Help Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#70645c]">
            Haben Sie eine andere Frage? Schreiben Sie uns direkt:
          </p>
          <a
            href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20habe%20eine%20kurze%20Frage."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#128C7E] hover:underline mt-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Jetzt auf WhatsApp nachfragen (01522 2739532)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

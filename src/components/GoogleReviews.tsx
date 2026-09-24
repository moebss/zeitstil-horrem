import { Star, CheckCircle2 } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Claudia W.",
      city: "Kerpen-Horrem",
      date: "vor 2 Wochen",
      rating: 5,
      topic: "Damenmode & Typberatung",
      text: "Eine echte Perle in Horrem! Emi hat ein fantastisches Auge für Farben und Schnitte. Hier findet man immer außergewöhnliche Stücke abseits des Mainstreams, die super sitzen und bequem sind."
    },
    {
      name: "Silke B.",
      city: "Sindorf",
      date: "vor 1 Monat",
      rating: 5,
      topic: "Wohnaccessoires & Geschenkservice",
      text: "Wunderschöne Deko-Artikel und Geschenkideen. Die Geschenke werden von Emi so zauberhaft mit echten Schleifen eingepackt, dass das Auspacken fast zu schade ist. Mein absoluter Lieblingsladen!"
    },
    {
      name: "Birgit K.",
      city: "Bergheim",
      date: "vor 1 Monat",
      rating: 5,
      topic: "Schmuck & Handtaschen",
      text: "Tolle Atmosphäre, herzliche Begrüßung und immer wieder neue Kollektionen. Ob italienische Mode oder feiner Schmuck – ein Besuch auf der Hauptstraße lohnt sich jedes Mal aufs Neue."
    },
    {
      name: "Marion T.",
      city: "Frechen",
      date: "vor 2 Monaten",
      rating: 5,
      topic: "Mädelsabend & Private Shopping",
      text: "Wir hatten einen unvergesslichen Mädelsabend bei Zeitstil! Mit Prosecco, tollen Styling-Tipps und in aller Ruhe anprobieren. Das ganze Team war begeistert – wir kommen definitiv wieder!"
    },
    {
      name: "Susanne R.",
      city: "Kerpen",
      date: "vor 3 Monaten",
      rating: 5,
      topic: "Barrierefreiheit & Service",
      text: "Super barrierefreier Laden, sehr freundliche und aufmerksame Inhaberin. Schöne Auswahl an modischer Kleidung und stilvoller Deko ohne den üblichen Einheitsbrei der großen Ketten."
    },
    {
      name: "Petra M.",
      city: "Horrem",
      date: "vor 3 Monaten",
      rating: 5,
      topic: "Geschenkgutscheine & Wohnkultur",
      text: "Kaufe hier regelmäßig Geschenkgutscheine für meine Freundinnen. Die Beratung ist herzlich, persönlich und ehrlich. Eine große Bereicherung für ganz Horrem!"
    }
  ];

  return (
    <section id="bewertungen" className="py-20 md:py-28 bg-[#f4efe8]/60 border-t border-[#ede6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934] mb-3">
            <Star className="w-3.5 h-3.5 fill-[#c48b52] text-[#c48b52]" />
            Echtes Kundenfeedback
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] tracking-tight">
            Was Horrem über Zeitstil sagt
          </h2>
          <p className="mt-3 text-base text-[#6e645e]">
            Über 48 zufriedene Bewertungen auf Google sprechen für sich: Herzlichkeit, Geschmack und persönliche Beratung.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-4 py-2.5 px-6 rounded-2xl bg-white border border-[#ede6dc] shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-4 w-px bg-[#ede6dc]" />
            <span className="text-sm font-bold text-[#2d2623]">
              4.9 von 5.0 Sternen
            </span>
            <span className="text-xs text-[#7a6e67]">
              auf Google Maps
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ede6dc] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#9b9088] font-medium">
                    {rev.date}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-semibold text-[#a66f38] uppercase tracking-wider mb-2">
                  {rev.topic}
                </span>

                <p className="text-sm text-[#4a3f39] leading-relaxed italic">
                  „{rev.text}“
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f2ebe2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#f2ebe2] text-[#7a6455] font-serif font-bold text-xs flex items-center justify-center">
                    {rev.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2d2623]">
                      {rev.name}
                    </p>
                    <p className="text-[10px] text-[#8c8077]">
                      {rev.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verifiziert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

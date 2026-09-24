import { Sparkles, Gift, Heart, Award, Accessibility, ShoppingBag } from 'lucide-react';

export default function TrustStrip() {
  const highlights = [
    {
      icon: Award,
      title: "Seit 2011 mit Leidenschaft",
      desc: "Inhabergeführtes Familienunternehmen in Kerpen-Horrem"
    },
    {
      icon: Sparkles,
      title: "Wöchentlich neue Mode",
      desc: "Italienische Damenmode, Strick & Lieblingsteile"
    },
    {
      icon: Gift,
      title: "Liebevoller Geschenkservice",
      desc: "Jedes Geschenk kostenlos und stilvoll verpackt"
    },
    {
      icon: Heart,
      title: "Herzliche Typberatung",
      desc: "Ehrliche Stilberatung & entspannte Wohlfühlatmosphäre"
    },
    {
      icon: Accessibility,
      title: "Barrierefreier Zugang",
      desc: "Ebenerdiger Eingang, Rollstuhl- & kinderwagengerecht"
    },
    {
      icon: ShoppingBag,
      title: "Mädelsabende & Events",
      desc: "Private Shopping nach Feierabend mit Freundinnen"
    }
  ];

  return (
    <section className="bg-white border-y border-[#ede6dc] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-[#faf5ee] border border-[#ecdccb] text-[#a66f38] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#c48b52] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2d2623] leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#7a6e67] mt-1 leading-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

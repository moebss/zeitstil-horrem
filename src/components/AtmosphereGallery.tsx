import { Sparkles, Instagram } from 'lucide-react';
import fashionImg from '../images/fashion_collection.jpg';
import decorImg from '../images/home_decor.jpg';
import giftsImg from '../images/gifts_accessories.jpg';
import shoesImg from '../images/shoes_bags.jpg';
import loungeImg from '../images/personal_shopping.jpg';
import ownerImg from '../images/owner_emi.jpg';

export default function AtmosphereGallery() {
  const galleryItems = [
    {
      img: fashionImg,
      title: "Italienische Mode & Strick",
      desc: "Kuschelige Pullover, zeitlose Mäntel & Kleider",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      img: decorImg,
      title: "Skandinavische Deko & Duftkerzen",
      desc: "Feine Keramik und natürliche Trockenblumen",
      span: "col-span-1 row-span-1"
    },
    {
      img: giftsImg,
      title: "Liebevoll verpackte Präsente",
      desc: "Feiner Schmuck & Präsente mit Schleife",
      span: "col-span-1 row-span-1"
    },
    {
      img: shoesImg,
      title: "Ledertaschen & Schuhwerk",
      desc: "Italienisches Leder & edle Accessoires",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      img: loungeImg,
      title: "Sitzecke & Wohlfühlatmosphäre",
      desc: "Kaffee, persönliche Beratung & Mädelsabende",
      span: "col-span-1 row-span-1"
    },
    {
      img: ownerImg,
      title: "Herzliche Gastfreundschaft",
      desc: "Inhaberin Emi Dauendorffer freut sich auf Sie",
      span: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="galerie" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c48b52]" />
              Impressionen
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] tracking-tight">
              Einblicke in unsere Boutique
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6e645e] max-w-xl">
              Kommen Sie vorbei und spüren Sie die gemütliche Atmosphäre auf der Hauptstraße in Horrem. Jedes Stück ist ein Unikat mit Charakter.
            </p>
          </div>

          <a
            href="https://www.facebook.com/ZeitstilDekoFashion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#ede6dc] text-[#2d2623] hover:text-[#c48b52] hover:border-[#c48b52] shadow-2xs transition-all w-fit"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>Folgen Sie uns für Neuheiten</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden shadow-md border border-[#ede6dc] bg-white h-72 sm:h-80 transition-all duration-300 hover:shadow-xl ${item.span}`}
            >
              <img
                src={item.img}
                alt={`${item.title} - Zeitstil Horrem`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-white transform transition-transform duration-300">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#f6e0c6] block mb-1">
                  Zeitstil Horrem
                </span>
                <h4 className="font-serif font-bold text-lg sm:text-xl leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

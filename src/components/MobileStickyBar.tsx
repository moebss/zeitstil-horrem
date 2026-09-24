import { Phone, MessageCircle, Navigation, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: (topic?: string) => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ede6dc] px-3 py-2 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Call button */}
        <a
          href="tel:+4922739915676"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2d2623] hover:bg-[#faf5ee] transition-colors"
        >
          <Phone className="w-4 h-4 mb-1 text-[#2d2623]" />
          <span className="text-[10px] font-medium leading-none">Anrufen</span>
        </a>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/4915222739532?text=Hallo%20Frau%20Dauendorffer,%20ich%20habe%20eine%20Frage%20zu%20einem%20Artikel%20bei%20Zeitstil."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#128C7E] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-1 text-[#25D366]" />
          <span className="text-[10px] font-bold leading-none">WhatsApp</span>
        </a>

        {/* Route button */}
        <a
          href="https://maps.google.com/?q=Hauptstraße+183+50169+Kerpen-Horrem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2d2623] hover:bg-[#faf5ee] transition-colors"
        >
          <Navigation className="w-4 h-4 mb-1 text-[#c48b52]" />
          <span className="text-[10px] font-medium leading-none">Anfahrt</span>
        </a>

        {/* Kontakt & Beratung */}
        <button
          onClick={() => {
            onOpenContact('Damenmode & Outfit-Beratung');
            scrollTo('kontakt');
          }}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2d2623] hover:bg-[#faf5ee] transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 mb-1 text-[#a66f38]" />
          <span className="text-[10px] font-medium leading-none">Anfragen</span>
        </button>

      </div>
    </div>
  );
}

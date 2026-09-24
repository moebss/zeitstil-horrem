import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface OpeningStatusInfo {
  isOpen: boolean;
  message: string;
  nextOpeningText: string;
  compactText: string;
}

export function getOpeningStatus(): OpeningStatusInfo {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Schedule definition in minutes
  // Mon: 15:00 - 18:00 (900 - 1080)
  // Tue, Thu, Fri: 10:00 - 13:00 (600 - 780) & 15:00 - 18:00 (900 - 1080)
  // Wed, Sat: 10:00 - 13:00 (600 - 780)
  // Sun: Closed

  let isOpen = false;
  let message = 'Aktuell geschlossen';
  let nextOpeningText = '';
  let compactText = 'Geschlossen';

  if (day === 1) { // Montag
    if (currentMinutes >= 900 && currentMinutes < 1080) {
      isOpen = true;
      message = 'Jetzt geöffnet · bis 18:00 Uhr';
      compactText = 'Geöffnet bis 18:00';
    } else if (currentMinutes < 900) {
      nextOpeningText = 'Öffnet heute um 15:00 Uhr';
      compactText = 'Öffnet 15:00 Uhr';
    } else {
      nextOpeningText = 'Öffnet Di. um 10:00 Uhr';
      compactText = 'Öffnet Di. 10:00';
    }
  } else if (day === 2 || day === 4 || day === 5) { // Di, Do, Fr
    if (currentMinutes >= 600 && currentMinutes < 780) {
      isOpen = true;
      message = 'Jetzt geöffnet · bis 13:00 Uhr (wieder ab 15:00)';
      compactText = 'Geöffnet bis 13:00';
    } else if (currentMinutes >= 780 && currentMinutes < 900) {
      nextOpeningText = 'Mittagspause · Wieder geöffnet ab 15:00 Uhr';
      compactText = 'Pause · öffnet 15:00';
    } else if (currentMinutes >= 900 && currentMinutes < 1080) {
      isOpen = true;
      message = 'Jetzt geöffnet · bis 18:00 Uhr';
      compactText = 'Geöffnet bis 18:00';
    } else if (currentMinutes < 600) {
      nextOpeningText = 'Öffnet heute um 10:00 Uhr';
      compactText = 'Öffnet 10:00 Uhr';
    } else {
      const nextDayName = day === 5 ? 'Sa.' : (day === 2 ? 'Mi.' : 'Fr.');
      nextOpeningText = `Öffnet ${nextDayName} um 10:00 Uhr`;
      compactText = `Öffnet ${nextDayName} 10:00`;
    }
  } else if (day === 3 || day === 6) { // Mi, Sa
    if (currentMinutes >= 600 && currentMinutes < 780) {
      isOpen = true;
      message = 'Jetzt geöffnet · bis 13:00 Uhr';
      compactText = 'Geöffnet bis 13:00';
    } else if (currentMinutes < 600) {
      nextOpeningText = 'Öffnet heute um 10:00 Uhr';
      compactText = 'Öffnet 10:00 Uhr';
    } else {
      const nextDayName = day === 3 ? 'Do. 10:00' : 'Mo. 15:00';
      nextOpeningText = day === 3 ? 'Öffnet Do. um 10:00 Uhr' : 'Öffnet Mo. um 15:00 Uhr';
      compactText = `Öffnet ${nextDayName}`;
    }
  } else { // Sonntag
    nextOpeningText = 'Öffnet Mo. um 15:00 Uhr';
    compactText = 'Öffnet Mo. 15:00';
  }

  return { isOpen, message, nextOpeningText, compactText };
}

export default function OpeningStatus({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<OpeningStatusInfo>(getOpeningStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getOpeningStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-white/90 backdrop-blur-sm border-[#ede6dc] shadow-2xs whitespace-nowrap shrink-0">
        <span className="relative flex h-2 w-2 shrink-0">
          {status.isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          )}
        </span>
        <span className={`whitespace-nowrap ${status.isOpen ? 'text-emerald-800 font-semibold' : 'text-[#5e534d]'}`}>
          {status.compactText}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
      status.isOpen 
        ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900' 
        : 'bg-[#f7f3ed] border-[#ede6dc] text-[#554a44]'
    }`}>
      <div className={`p-2 rounded-lg shrink-0 ${status.isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-[#e8dfd3] text-[#7a6a5e]'}`}>
        <Clock className="w-5 h-5" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className={`inline-block w-2.5 h-2.5 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
          <p className="font-semibold text-sm">
            {status.isOpen ? 'Heute geöffnet' : 'Aktuell geschlossen'}
          </p>
        </div>
        <p className="text-xs mt-0.5 opacity-90">
          {status.isOpen ? status.message : status.nextOpeningText}
        </p>
      </div>
    </div>
  );
}

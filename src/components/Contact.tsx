import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Send,
  CheckCircle2
} from 'lucide-react';
import OpeningStatus from './OpeningStatus';

interface ContactProps {
  selectedTopic?: string;
}

export default function Contact({ selectedTopic }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [topic, setTopic] = useState(selectedTopic || 'Damenmode & Outfit-Beratung');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const openingSchedule = [
    { day: 'Montag', hours: '15:00 – 18:00 Uhr', note: 'Vormittags geschlossen' },
    { day: 'Dienstag', hours: '10:00 – 13:00 & 15:00 – 18:00 Uhr', note: 'Ganztägig mit Mittagspause' },
    { day: 'Mittwoch', hours: '10:00 – 13:00 Uhr', note: 'Nachmittags geschlossen' },
    { day: 'Donnerstag', hours: '10:00 – 13:00 & 15:00 – 18:00 Uhr', note: 'Ganztägig mit Mittagspause' },
    { day: 'Freitag', hours: '10:00 – 13:00 & 15:00 – 18:00 Uhr', note: 'Ganztägig mit Mittagspause' },
    { day: 'Samstag', hours: '10:00 – 13:00 Uhr', note: 'Wochenend-Shopping' },
    { day: 'Sonntag', hours: 'Geschlossen', note: 'Ruhetag' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-[#f4efe8]/70 border-t border-[#ede6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ede4d8] text-[#7a5934] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c48b52]" />
            Besuch &amp; Kontakt
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2623] tracking-tight">
            Wir freuen uns auf Ihren Besuch
          </h2>
          <p className="mt-3 text-base text-[#6e645e]">
            Kommen Sie direkt in Horrem auf der Hauptstraße 183 vorbei oder schreiben Sie uns unkompliziert per WhatsApp oder Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Hours, Address & Directions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Opening Status Widget */}
            <OpeningStatus />

            {/* Opening Hours Schedule Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ede6dc] shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#faf5ee] text-[#a66f38] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#2d2623]">
                      Öffnungszeiten
                    </h3>
                    <p className="text-xs text-[#70645c]">
                      Zeitstil Boutique Kerpen-Horrem
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#a66f38] bg-[#fbf5ee] px-2.5 py-1 rounded-full">
                  Regulär geöffnet
                </span>
              </div>

              <div className="divide-y divide-[#f2ebe2] text-sm">
                {openingSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[#3d332d]"
                  >
                    <span className="font-medium text-[#2d2623] w-28">
                      {item.day}
                    </span>
                    <span className="font-semibold text-[#2d2623]">
                      {item.hours}
                    </span>
                    <span className="text-xs text-[#8c8077] sm:text-right">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#7a6e67] mt-4 pt-3 border-t border-[#f2ebe2] italic">
                Hinweis: Private Shopping und Mädelsabende nach Vereinbarung auch außerhalb dieser Zeiten möglich.
              </p>
            </div>

            {/* Location & Navigation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ede6dc] shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2d2623]">
                    Standort &amp; Anfahrt
                  </h3>
                  <p className="text-sm text-[#4a3f39] mt-1">
                    Hauptstraße 183 · 50169 Kerpen-Horrem
                  </p>
                  <p className="text-xs text-[#70645c] mt-0.5">
                    Rhein-Erft-Kreis · Unweit Bahnhof Horrem &amp; Christus-König-Kirche
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Hauptstraße+183+50169+Kerpen-Horrem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#2d2623] text-white hover:bg-[#c48b52] transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Route</span>
                </a>
              </div>

              {/* Quick Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+4922739915676"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#faf6f0] border border-[#ede3d5] hover:border-[#c48b52] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-[#a66f38] flex items-center justify-center shadow-2xs shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8c7b6f] tracking-wider block">
                      Festnetz Boutique
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#2d2623]">
                      02273 9915676
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/4915222739532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f0faf3] border border-[#d6f0df] hover:border-[#25D366] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-[#25D366] flex items-center justify-center shadow-2xs shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#3c8c5c] tracking-wider block">
                      WhatsApp Direkt
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#2d2623]">
                      01522 2739532
                    </span>
                  </div>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#ede6dc] shadow-md">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a66f38] block mb-1">
                Direktanfrage
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2d2623]">
                Nachricht an Emi senden
              </h3>
              <p className="text-xs text-[#70645c] mt-1">
                Fragen zu Artikeln, Reservierungen oder Mädelsabend-Terminen.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2d2623]">
                  Vielen Dank für Ihre Nachricht!
                </h4>
                <p className="text-sm text-[#5a504a] max-w-sm mx-auto">
                  Liebe {name}, wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich persönlich bei Ihnen.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs text-[#a66f38] underline hover:text-[#2d2623]"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Topic selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f39] uppercase tracking-wider mb-1.5">
                    Thema
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ede6dc] text-sm text-[#2d2623] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c48b52]"
                  >
                    <option value="Damenmode & Outfit-Beratung">Damenmode &amp; Outfit-Beratung</option>
                    <option value="Wohnaccessoires & Deko-Frage">Wohnaccessoires &amp; Deko-Frage</option>
                    <option value="Geschenkgutschein Vorbestellung">Geschenkgutschein Vorbestellung</option>
                    <option value="Mädelsabend / Private Shopping">Mädelsabend / Private Shopping Anfrage</option>
                    <option value="Artikel-Reservierung aus Schaufenster">Artikel-Reservierung aus Schaufenster</option>
                    <option value="Sonstige Frage">Sonstige Frage</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f39] uppercase tracking-wider mb-1.5">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vorname & Nachname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ede6dc] text-sm text-[#2d2623] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c48b52]"
                  />
                </div>

                {/* Phone / Mobile */}
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f39] uppercase tracking-wider mb-1.5">
                    Telefon oder Handynummer (für Rückruf/WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="z. B. 0176 12345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ede6dc] text-sm text-[#2d2623] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c48b52]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f39] uppercase tracking-wider mb-1.5">
                    Ihre Nachricht
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Wie können wir Ihnen weiterhelfen? (z.B. Größe, Farbe, Wunschtermin für Mädelsabend...)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ede6dc] text-sm text-[#2d2623] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c48b52]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#2d2623] text-white hover:bg-[#c48b52] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Nachricht jetzt absenden</span>
                </button>

                <p className="text-[11px] text-[#8c8077] text-center">
                  Ihre Daten werden vertraulich behandelt und ausschließlich zur Beantwortung Ihrer Anfrage genutzt.
                </p>

              </form>
            )}

            {/* Direct WhatsApp Callout */}
            <div className="mt-6 pt-5 border-t border-[#f2ebe2] text-center">
              <span className="text-xs text-[#70645c] block mb-2">
                Lieber direkt und unkompliziert per Chat?
              </span>
              <a
                href="https://wa.me/4915222739532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#128C7E] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Emi auf WhatsApp schreiben (01522 2739532)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

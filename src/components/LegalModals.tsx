import { X, ShieldCheck, Scale } from 'lucide-react';

interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-[#faf8f5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 md:p-10 shadow-2xl border border-[#ede6dc] max-h-[85vh] overflow-y-auto z-10 text-[#3b322c]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ede6dc] mb-6">
          <div className="flex items-center gap-2.5">
            {type === 'impressum' ? (
              <Scale className="w-5 h-5 text-[#c48b52]" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-[#c48b52]" />
            )}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d2623]">
              {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#7a6e67] hover:bg-[#ede6dc] transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Impressum Content */}
        {type === 'impressum' && (
          <div className="space-y-5 text-xs sm:text-sm text-[#554a44] leading-relaxed">
            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">Angaben gemäß § 5 TMG</h4>
              <p className="font-medium text-[#2d2623]">Zeitstil – Fashion, Wohnaccessoires &amp; more</p>
              <p>Inhaberin: Ana Emese Dauendorffer</p>
              <p>Hauptstraße 183</p>
              <p>50169 Kerpen-Horrem</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">Kontakt</h4>
              <p>Telefon: 02273 9915676</p>
              <p>Mobil / WhatsApp: 01522 2739532</p>
              <p>E-Mail: kontakt@zeitstil-horrem.de</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">Umsatzsteuer-ID</h4>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                Steuernummer beim zuständigen Finanzamt Bergheim erteilt.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
              <p>Ana Emese Dauendorffer</p>
              <p>Hauptstraße 183, 50169 Kerpen-Horrem</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">EU-Streitschlichtung</h4>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a66f38] underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">Verbraucherstreitbeilegung</h4>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        )}

        {/* Datenschutz Content */}
        {type === 'datenschutz' && (
          <div className="space-y-5 text-xs sm:text-sm text-[#554a44] leading-relaxed">
            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">1. Datenschutz auf einen Blick</h4>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">2. Verantwortliche Stelle</h4>
              <p className="font-medium text-[#2d2623]">Zeitstil – Inhaberin Ana Emese Dauendorffer</p>
              <p>Hauptstraße 183, 50169 Kerpen-Horrem</p>
              <p>Telefon: 02273 9915676 · E-Mail: kontakt@zeitstil-horrem.de</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">3. Lokales Font-Hosting (Keine Google CDNs)</h4>
              <p>
                Diese Website nutzt zur einheitlichen Darstellung von Schriftarten ausschließlich lokal gehostete Schriftdateien (Fraunces &amp; Jost über @fontsource). Beim Aufruf dieser Seite werden <strong>keine</strong> Schriftarten von Servern von Google geladen. Es findet kein Datentransfer zu Google-Servern im Ausland statt (LG München Urteil vom 20.01.2022 vollumfänglich erfüllt).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">4. Datenerfassung bei Kontaktaufnahme</h4>
              <p>
                Wenn Sie uns per Kontaktformular oder per WhatsApp Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir keinesfalls ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#2d2623] mb-1">5. Ihre Rechte</h4>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten, das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten sowie das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen).
              </p>
            </div>
          </div>
        )}

        {/* Footer Close Button */}
        <div className="pt-6 mt-6 border-t border-[#ede6dc] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#2d2623] text-white hover:bg-[#c48b52] transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}

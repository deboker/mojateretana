import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchPageBySlug, getStrapiMediaUrl, type PageContent } from "@/services/strapi";

export default function GDPR() {
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      const data = await fetchPageBySlug('gdpr');
      setPage(data);
      setLoading(false);
    };

    loadPage();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Nazad na početnu stranicu
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Učitavanje...</p>
          </div>
        ) : page ? (
          <>
            <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
            {page.image && (
              <img
                src={getStrapiMediaUrl(page.image.url)}
                alt={page.image.alternativeText || page.title}
                className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg"
              />
            )}
            <div
              className="prose prose-lg max-w-none space-y-6"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Stránka nebola nájdená</h1>
            <p className="text-muted-foreground">Obsah stránky nie je k dispozícii.</p>
          </div>
        )}

        {/* Fallback static content */}
        {!loading && !page && (
        <>
        <h1 className="text-4xl font-bold mb-8">Zaštita ličnih podataka (GDPR)</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Osnovne informacije</h2>
            <p className="text-muted-foreground leading-relaxed">
              Operater Moja teretana poštuje vašu privatnost i obavezuje se da štiti vaše lične podatke
              u skladu sa Uredbom Evropskog parlamenta i Saveta (EU) 2016/679 o zaštiti fizičkih lica
              prilikom obrade ličnih podataka i o slobodnom kretanju takvih podataka (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Operater</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-medium mb-2">Naziv: Moja teretana</p>
              <p className="text-muted-foreground">Adresa: [Vaša adresa]</p>
              <p className="text-muted-foreground">Matični broj: [Vaš matični broj]</p>
              <p className="text-muted-foreground">Email: info@mojaposilka.sk</p>
              <p className="text-muted-foreground">Telefon: +421 XXX XXX XXX</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Koje lične podatke obrađujemo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              U okviru rada naše teretane i rezervacionog sistema obrađujemo sledeće lične podatke:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Ime i prezime</li>
              <li>Email</li>
              <li>Broj telefona</li>
              <li>Podaci o rezervacijama i plaćanjima</li>
              <li>IP adresa i kolačići (za funkcionisanje web stranice)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Svrha obrade ličnih podataka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vaše lične podatke obrađujemo u sledeće svrhe:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Obrada rezervacija i platnih transakcija</li>
              <li>Slanje pristupnih kodova za ulaz u teretanu</li>
              <li>Komunikacija sa klijentima (potvrde, podsetnici, izmene)</li>
              <li>Vođenje računovodstva i ispunjavanje poreskih obaveza</li>
              <li>Poboljšanje naših usluga i web stranice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pravni osnov obrade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lične podatke obrađujemo na osnovu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Izvršenja ugovora (rezervacija i pružanje usluga)</li>
              <li>Vaše saglasnosti (newsletter, marketinška komunikacija)</li>
              <li>Legitimnog interesa (poboljšanje usluga, bezbednost)</li>
              <li>Zakonske obaveze (računovodstvo, porezi)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Period čuvanja podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lične podatke čuvamo onoliko koliko je neophodno za ispunjenje svrhe za koju su prikupljeni:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Podaci o rezervacijama: 10 godina (računovodstvene i poreske svrhe)</li>
              <li>Marketinške saglasnosti: do opoziva saglasnosti</li>
              <li>Kolačići: prema podešavanjima pretraživača</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Vaša prava</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Imate pravo na:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pristup vašim ličnim podacima</li>
              <li>Ispravku netačnih podataka</li>
              <li>Brisanje podataka (pravo na zaborav)</li>
              <li>Ograničenje obrade</li>
              <li>Prenosivost podataka</li>
              <li>Prigovor na obradu</li>
              <li>Povlačenje saglasnosti za obradu</li>
              <li>Podnošenje pritužbe nadležnom organu za zaštitu podataka</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Bezbednost podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vaše lične podatke štitimo primenom tehničkih i organizacionih mera protiv neovlašćenog
              pristupa, gubitka, uništenja ili zloupotrebe. Koristimo SSL/TLS šifrovanje, bezbedne servere
              i redovno ažuriramo bezbednosne protokole.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Kolačići (Cookies)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Naša web stranica koristi kolačiće za poboljšanje korisničkog iskustva i analitičke svrhe.
              Više informacija možete pronaći u našoj Politici kolačića.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              U slučaju pitanja u vezi sa zaštitom ličnih podataka, kontaktirajte nas:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground">Email: info@mojaposilka.sk</p>
              <p className="text-muted-foreground">Telefon: +421 XXX XXX XXX</p>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-muted-foreground">
              Poslednje ažuriranje: {new Date().toLocaleDateString('sr-Latn')}
            </p>
          </section>
        </div>
        </>
        )}
      </main>
    </div>
  );
}


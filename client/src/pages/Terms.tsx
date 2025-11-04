import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchPageBySlug, getStrapiMediaUrl, type PageContent } from "@/services/strapi";

export default function Terms() {
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      const data = await fetchPageBySlug('terms');
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

        {/* Fallback static content - hidden by default */}
        {!loading && !page && (
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Opšte odredbe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ovi uslovi korišćenja uređuju odnos između operatera fitnes centra "Moja teretana"
              i klijenta pri pružanju usluga privatne teretane. Rezervacijom usluge klijent potvrđuje
              da je upoznat sa ovim uslovima korišćenja i da se slaže sa njima.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Operater</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-medium mb-2">Naziv: Moja teretana</p>
              <p className="text-muted-foreground">Adresa: [Vaša adresa]</p>
              <p className="text-muted-foreground">Matični broj: [Vaš matični broj]</p>
              <p className="text-muted-foreground">PIB: [Vaš PIB]</p>
              <p className="text-muted-foreground">Email: info@mojaposilka.sk</p>
              <p className="text-muted-foreground">Telefon: +421 XXX XXX XXX</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Definicija usluga</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Operater pruža sledeće usluge:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Iznajmljivanje privatne teretane na period od 75 minuta</li>
              <li>Pristup opremi teretane (traka za trčanje, toranj za vežbanje, bučice, girje, fitnes lopte, bokserska vreća, sobni bicikl, merdevine)</li>
              <li>Pristup dečijoj sobi sa bebefon kamerom</li>
              <li>Pristup toaletu i tušu</li>
              <li>Automatizovani ulaz preko pristupnog koda</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Rezervacija i plaćanje</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Rezervacija</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rezervacija se vrši online preko rezervacionog sistema na web stranici. Klijent bira dostupan
              termin i vrši plaćanje online. Nakon uspešnog plaćanja klijent dobija potvrdu rezervacije i pristupni
              kod na email ili SMS.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Plaćanje</h3>
            <p className="text-muted-foreground leading-relaxed">
              Plaćanje se vrši online karticom prilikom rezervacije. Cena za jednu rezervaciju (75 minuta) je 1000 RSD.
              Pri kupovini pretplatne karte (10 ulaza) cena je 9000 RSD.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Otkazivanje rezervacije</h3>
            <p className="text-muted-foreground leading-relaxed">
              Klijent može otkazati rezervaciju najkasnije 24 sata pre početka rezervisanog vremena. U tom slučaju
              plaćanje će biti vraćeno u celosti. Kod otkazivanja rezervacije manje od 24 sata pre početka,
              plaćanje se ne vraća.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pristup teretani</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Klijent dobija pristup teretani pomoću jedinstvenog pristupnog koda koji dobija nakon uspešnog
              plaćanja. Pristupni kod je važeći samo za rezervisano vreme.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kod ne sme biti deljen sa neovlašćenim licima</li>
              <li>Ulaz je moguć samo u vreme rezervacije</li>
              <li>Klijent je dužan da napusti prostor teretane po isteku rezervisanog vremena</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Pravila korišćenja</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Klijent se obavezuje da će:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Koristiti opremu u skladu sa uputstvom i bezbedno</li>
              <li>Ne oštećivati opremu i prostor teretane</li>
              <li>Održavati čistoću i red</li>
              <li>Poštovati kućni red</li>
              <li>Vežbati na sopstveni rizik i odgovornost</li>
              <li>Imati važeće zdravstveno osiguranje</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Odgovornost</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Operater ne odgovara za:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Povrede nastale nepravilnim korišćenjem opreme</li>
              <li>Gubitak ili oštećenje ličnih stvari klijenta</li>
              <li>Zdravstvene probleme nastale vežbanjem</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Klijent odgovara za štetu prouzrokovanu namerom ili nepravilnim korišćenjem opreme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Pretplatna karta</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pretplatna karta za 10 ulaza važi 6 meseci od datuma kupovine. Po isteku važenja
              neiskorišćeni ulazi se gube. Pretplatna karta je nelična i može je koristiti samo osoba
              za koju je kupljena.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Dečija soba</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dečija soba je na raspolaganju za decu klijenata tokom rezervisanog vremena. Deca moraju biti
              pod nadzorom roditelja/staratelja. Operater ne odgovara za bezbednost dece -
              odgovornost snosi roditelj/staratelj.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Zaštita ličnih podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Obrada ličnih podataka se vrši u skladu sa važećim zakonodavstvom i našim principima zaštite
              ličnih podataka (GDPR), koji su dostupni na web stranici.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Završne odredbe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Operater zadržava pravo da izmeni ove uslove korišćenja. Izmene stupaju na
              snagu danom objavljivanja na web stranici. Odnosi koji nisu uređeni ovim uslovima korišćenja
              regulišu se odgovarajućim pravnim propisima.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Kontakt</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground mb-2">
                U slučaju pitanja ili reklamacija, kontaktirajte nas:
              </p>
              <p className="text-muted-foreground">Email: info@mojaposilka.sk</p>
              <p className="text-muted-foreground">Telefon: +421 XXX XXX XXX</p>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-muted-foreground">
              Ovi uslovi korišćenja važe od: {new Date().toLocaleDateString('sr-Latn')}
            </p>
          </section>
        </div>
        )}
      </main>
    </div>
  );
}


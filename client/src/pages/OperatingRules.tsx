import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchPageBySlug, getStrapiMediaUrl, type PageContent } from "@/services/strapi";

export default function OperatingRules() {
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      const data = await fetchPageBySlug('operating-rules');
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
        <h1 className="text-4xl font-bold mb-8">Kućni red</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Opšte odredbe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ovaj kućni red uređuje pravila korišćenja privatne teretane "Moja teretana".
              Ulaskom u prostor teretane klijent potvrđuje da je upoznat sa ovim redom i da se slaže sa njim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Ulaz u teretanu</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Ulaz je moguć samo sa važećom rezervacijom i pristupnim kodom</li>
              <li>Pristupni kod unesite na tastaturi na ulaznim vratima</li>
              <li>Ulaz je dozvoljen samo u vreme rezervacije (±5 minuta tolerancija)</li>
              <li>Kod ne sme biti deljen sa neovlašćenim licima</li>
              <li>U slučaju problema sa ulaskom kontaktirajte operatera</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Vreme boravka</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Rezervisano vreme je 75 minuta</li>
              <li>Prostor je potrebno napustiti najkasnije 5 minuta nakon završetka rezervacije</li>
              <li>Pri prekoračenju vremena može biti naplaćena dodatna naknada</li>
              <li>Za produženje vremena potrebno je izvršiti novu rezervaciju</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Korišćenje opreme</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Opšta pravila</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Opremu koristite u skladu sa uputstvom za upotrebu</li>
              <li>Pre upotrebe upoznajte se sa bezbednosnim uputstvima</li>
              <li>Ne preopterećujte opremu preko njenog maksimalnog kapaciteta</li>
              <li>Ako niste sigurni kako koristiti opremu, kontaktirajte operatera</li>
              <li>Oštećenu opremu ne koristite i odmah prijavite operateru</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Bezbednosna pravila</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Vežbajte na sopstveni rizik i odgovornost</li>
              <li>Preporučujemo vežbanje sa partnerom, posebno kod teških tegova</li>
              <li>Koristite odgovarajuću odeću i obuću</li>
              <li>Pre vežbanja se zagrejte</li>
              <li>Kod zdravstvenih problema konsultujte se sa lekarom pre vežbanja</li>
              <li>U slučaju povrede kontaktirajte hitnu pomoć (112) i operatera</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Nakon korišćenja opreme</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Vratite bučice i girje na svoje mesto</li>
              <li>Obrišite opremu nakon upotrebe (krpe su na raspolaganju)</li>
              <li>Isključite traku za trčanje i sobni bicikl</li>
              <li>Ostavite prostor čistim i urednim</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Higijena i čistoća</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Koristite čistu sportsku odeću i obuću</li>
              <li>Preporučujemo upotrebu peškira tokom vežbanja</li>
              <li>Nakon upotrebe obrišite opremu dezinfekcionim sredstvom</li>
              <li>Otpatke bacajte u kantu</li>
              <li>Tuš i WC ostavite čistim</li>
              <li>Ne unosite hranu sa intenzivnim mirisom u prostor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Dečija soba</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Dečija soba je namenjena za decu klijenata tokom vežbanja</li>
              <li>Deca moraju biti pod nadzorom roditelja/staratelja</li>
              <li>Bebefon kamera služi samo kao pomoćni nadzor, ne kao zamena za roditelja</li>
              <li>Roditelj odgovara za bezbednost i ponašanje dece</li>
              <li>Nakon korišćenja pospremite igračke</li>
              <li>Oštećene igračke prijavite operateru</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Zabranjene aktivnosti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              U prostoru teretane je zabranjeno:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pušiti i koristiti elektronske cigarete</li>
              <li>Konzumirati alkohol i druge opojne supstance</li>
              <li>Puštati glasnu muziku (koristite slušalice)</li>
              <li>Uvoditi druge osobe bez rezervacije</li>
              <li>Snimati ili fotografisati bez saglasnosti operatera</li>
              <li>Uvoditi kućne ljubimce (osim pasa vodiča)</li>
              <li>Namerno oštećivati opremu i prostor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Lične stvari</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Vredne stvari čuvajte kod sebe</li>
              <li>Operater ne odgovara za gubitak ili oštećenje ličnih stvari</li>
              <li>Zaboravljene stvari će biti čuvane 30 dana, zatim će biti uništene</li>
              <li>Za preuzimanje zaboravljenih stvari kontaktirajte operatera</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Video nadzor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Prostor teretane je pod video nadzorom iz bezbednosnih razloga.
              Snimci se čuvaju 30 dana i dostupni su samo operateru i ovlašćenim organima.
              Ulaskom u prostor pristajete na video nadzor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Hitne situacije</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-900">Važni kontakti:</h3>
              <ul className="space-y-2 text-red-900">
                <li className="font-medium">Hitna pomoć: 112</li>
                <li className="font-medium">Policija: 158</li>
                <li className="font-medium">Vatrogasci: 150</li>
                <li className="font-medium">Operater: +421 XXX XXX XXX</li>
              </ul>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Apoteka za prvu pomoć se nalazi kod ulaza</li>
              <li>Aparat za gašenje požara se nalazi kod ulaza</li>
              <li>Nužni izlaz je obeležen</li>
              <li>U slučaju požara napustite prostor i pozovite vatrogasce</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Odgovornost za štetu</h2>
            <p className="text-muted-foreground leading-relaxed">
              Klijent odgovara za štetu prouzrokovanu namerom ili grubom nepažnjom.
              Štetu je potrebno odmah prijaviti operateru. Iznos štete će biti procenjen i
              klijent je dužan da je nadoknadi u roku od 14 dana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Kršenje kućnog reda</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kod kršenja kućnog reda operater zadržava pravo da:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Okonča rezervaciju bez naknade</li>
              <li>Blokira pristup daljim rezervacijama</li>
              <li>Zahteva nadoknadu štete</li>
              <li>Kontaktira policiju u slučaju ozbiljnog kršenja</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Kontakt operatera</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-muted-foreground mb-2">
                Za pitanja, probleme ili prijavu štete, kontaktirajte:
              </p>
              <p className="text-muted-foreground">Email: info@mojaposilka.sk</p>
              <p className="text-muted-foreground">Telefon: +421 XXX XXX XXX</p>
              <p className="text-muted-foreground mt-4">
                Dežurni kontakt (van radnog vremena): +421 XXX XXX XXX
              </p>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-muted-foreground">
              Ovaj kućni red važi od: {new Date().toLocaleDateString('sr-Latn')}
            </p>
          </section>
        </div>
        </>
        )}
      </main>
    </div>
  );
}


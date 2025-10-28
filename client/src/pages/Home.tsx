import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  Shield, 
  Baby,
  Heart,
  Calendar,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Dumbbell,
  Users,
  Lock,
  Zap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Moja posilka" className="h-8 w-8" />
            <span className="font-bold text-xl">Moja teretana</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#vyhody" className="text-sm hover:text-primary transition-colors">Prednosti</a>
            <a href="#vybavenie" className="text-sm hover:text-primary transition-colors">Oprema</a>
            <a href="#cennik" className="text-sm hover:text-primary transition-colors">Cenovnik</a>
            <a href="#kontakt" className="text-sm hover:text-primary transition-colors">Kontakt</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <a href="#rezervacia">Rezerviši</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-2">
                Konačno teretana gde ne moraš da se stidiš
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cela teretana samo za tebe.<br />
                <span className="text-primary">Kad god želiš.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bez radoznalih pogleda. Bez čekanja na mašine. Bez izgovora "nemam s kim da ostavim decu".
                Tvoja privatna teretana sa dečijom sobom, dostupna 24/7.
              </p>
              
              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">100% privatnost</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Pristup 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Sa decom</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Samo 10 EUR</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <a href="#rezervacija">Rezerviši termin</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <a href="#prednosti">Saznaj više</a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                ⭐⭐⭐⭐⭐ "Najbolja odluka! Konačno redovno vežbam." - Martina, 34
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/gym-hero.jpg"
                  alt="Moderna privatna teretana"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">100% privatnost</p>
                    <p className="text-sm text-muted-foreground">Samo ti i tvoja porodica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Poznaješ taj osećaj?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">😰</p>
                  <p className="font-medium mb-2">Stidiš se da vežbaš pred strancima</p>
                  <p className="text-sm text-muted-foreground">
                    U klasičnoj teretani osećaš se kao na reviji. Svi gledaju, ti se znojiš i ne znaš da li pravilno radiš vežbe.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">😤</p>
                  <p className="font-medium mb-2">Nemaš sa kome ostaviti decu</p>
                  <p className="text-sm text-muted-foreground">
                    Želiš da vežbaš, ali baka nije uvek dostupna. Partner radi. Dadilja košta više od samog treninga.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">⏰</p>
                  <p className="font-medium mb-2">Ne odgovaraju ti radno vreme</p>
                  <p className="text-sm text-muted-foreground">
                    Ujutro moraš na posao, uveče su deca. Vikend je porodično vreme. Kad zapravo imaš vremena da vežbaš?
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="pt-8">
              <p className="text-xl font-medium text-primary">
                A šta ako postoji rešenje koje rešava sve ove probleme odjednom?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Benefits Section */}
      <section id="prednosti" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zašto Moja teretana?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stvorili smo prostor gde konačno možeš da vežbaš bez stresa, izgovora i ograničenja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Apsolutna privatnost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cela teretana je tokom tvog vremena samo tvoja. Nema stranaca, nema posmatranja,
                  nema poređenja. Vežbaj u miru, svojim tempom, u odeći u kojoj želiš.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Pristup 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ujutro u 5:00? Uveče u 22:00? Nedeljom popodne? Kad god ti odgovara.
                  Automatski ulaz kodom znači da si sam gospodar svog vremena.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Baby className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Dečija soba sa kamerom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Tvoja deca se igraju u bezbednoj dečijoj sobi, ti ih imaš na ekranu stalno pod nadzorom.
                  Konačno vežbaš bez izgovora "nemam sa kim ostaviti decu".
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Kompletna oprema</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Traka za trčanje, toranj za vežbanje, bučice, girje, fitnes lopte, bokserska vreća.
                  Sve što ti treba za efikasan trening celog tela.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Za celu porodicu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dođi sam, sa partnerom, sa prijateljicom ili sa celom porodicom.
                  Prostor je tvoj, koristi ga kako želiš. Idealno za 1-4 osobe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Bez čekanja</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Zaboravi na čekanje dok se oslobodi sprava. Sva oprema je samo tvoja.
                  Efikasan trening bez nepotrebnog stajanja.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <a href="#rezervacija">Želim da probam</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="oprema" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Šta ćeš naći u teretani</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionalna oprema za kompletan trening
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Oprema za trening</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Traka za trčanje</p>
                    <p className="text-sm text-muted-foreground">Kardio trening, hodanje, trčanje</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Toranj za vežbanje</p>
                    <p className="text-sm text-muted-foreground">Kompletan trening snage celog tela</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bučice i girje</p>
                    <p className="text-sm text-muted-foreground">Funkcionalni trening, jačanje</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fitnes lopte i rekviziti</p>
                    <p className="text-sm text-muted-foreground">Core, stabilizacija, stretching</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bokserska vreća</p>
                    <p className="text-sm text-muted-foreground">Kardio, izbacivanje energije, smanjenje stresa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sobni bicikl</p>
                    <p className="text-sm text-muted-foreground">Blago kardio, pogodno za starije</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/gym-modern.png" alt="Moderna oprema teretane" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/gym-equipment.jpg" alt="Oprema za vežbanje" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>

          {/* Kids Room */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/kids-room.jpg" alt="Dečija soba sa igračkama" className="w-full h-80 object-cover" />
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  Bonus za roditelje
                </div>
                <h3 className="text-2xl font-bold mb-4">Dečija soba sa bebefon kamerom</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ovo je preokret za sve roditelje. Tvoja deca se igraju u bezbednoj,
                  čistoj dečijoj sobi sa igračkama, dok ti vežbaš. Bebefon kamera ti omogućava
                  da ih stalno imaš na oku preko ekrana u teretani.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Live prenos sa bebefon kamere na ekran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Bezbedne igračke za različite uzraste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Čist i prijatan prostor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Bez izgovora tipa "nemam sa kim ostaviti decu"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Who Is It For */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Za koga je ovo?</h2>
            <p className="text-lg text-muted-foreground">
              Naši zadovoljni klijenti govore umesto nas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img src="/mom-fitness.jpg" alt="Mame sa decom" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Mame na porodiljskom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Konačno mogu da vežbam bez potrebe da tražim dadilju.
                  Ćerkica se igra u dečijoj sobi, ja imam 75 minuta samo za sebe. Najbolja odluka!"
                </p>
                <p className="text-sm font-medium">- Martina, 34, mama 2 dece</p>
                <div className="mt-2">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img src="/senior-wellness.jpeg" alt="Stariji vežbaju" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Stariji</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "U klasičnoj teretani sam se osećao kao uljez. Ovde vežbam u miru,
                  svojim tempom, bez stresa. Kolena me prestala bole i osećam se 10 godina mlađe."
                </p>
                <p className="text-sm font-medium">- Jovan, 67, penzioner</p>
                <div className="mt-2">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img src="/teens-gym.jpg" alt="Mladi ljudi vežbaju" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Početnici</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Uvek sam se stidela da idem u teretanu jer nisam znala kako.
                  Ovde sam mogla da počnem privatno, bez osuđivanja. Za 3 meseca sam smršala 8 kg!"
                </p>
                <p className="text-sm font-medium">- Lucija, 28, računovođa</p>
                <div className="mt-2">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cenovnik" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cenovnik</h2>
            <p className="text-lg text-muted-foreground">
              Transparentne cene. Bez skrivenih troškova. Bez obaveza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Jednokratni ulaz</CardTitle>
                <div className="text-5xl font-bold text-primary mb-2">10 EUR</div>
                <p className="text-muted-foreground">75 minuta</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cela teretana samo za tebe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pristup dečijoj sobi sa bebefon kamerom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sva oprema na raspolaganju</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tuš i toalet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Automatski ulaz kodom</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="#rezervacija">Rezerviši sada</a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Idealno za probanje
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold">
                UŠTEDIŠ 10 EUR
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Pretplatna karta</CardTitle>
                <div className="text-5xl font-bold text-primary mb-2">90 EUR</div>
                <p className="text-muted-foreground">10 ulaza (9 EUR/ulaz)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sve iz jednokratnog ulaza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-primary">Ušteda 10 EUR</strong> u odnosu na jednokratne ulaze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Važi 6 meseci</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fleksibilno korišćenje kad god želiš</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prioritetna rezervacija termina</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="#rezervacija">Kupi pretplatnu kartu</a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Najpopularniji izbor
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">💚 Garancija zadovoljstva</h3>
              <p className="text-sm text-muted-foreground">
                Ako nisi zadovoljan nakon prve posete, vratićemo ti novac. Bez pitanja.
                Sigurni smo da ćeš zavoleti.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Plaćanje online karticom. Otkazivanje rezervacije besplatno do 24 sata pre početka.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kako funkcioniše?</h2>
            <p className="text-lg text-muted-foreground">
              Jednostavno kao 1-2-3-4
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                  1
                </div>
                <h3 className="font-bold mb-2">Rezerviši</h3>
                <p className="text-sm text-muted-foreground">
                  Izaberi termin koji ti odgovara
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                  2
                </div>
                <h3 className="font-bold mb-2">Plati</h3>
                <p className="text-sm text-muted-foreground">
                  Bezbedno plaćanje karticom online
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                  3
                </div>
                <h3 className="font-bold mb-2">Dobićeš kod</h3>
                <p className="text-sm text-muted-foreground">
                  Pristupni kod na email/SMS
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                  4
                </div>
                <h3 className="font-bold mb-2">Vežbaj!</h3>
                <p className="text-sm text-muted-foreground">
                  Dođi i uživaj u svom treningu
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
              <h3 className="font-bold text-xl mb-4 text-center">⚡ Automatski ulaz 24/7</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Bez čekanja, bez ključeva, bez komplikacija. Uneseš kod na tastaturi na ulazu
                i vrata se otvaraju. Tvoj kod je aktivan samo tokom rezervisanog vremena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section id="rezervacija" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Spreman da počneš?</h2>
            <p className="text-lg text-muted-foreground">
              Online rezervacioni sistem će uskoro biti dostupan. Zasad nas kontaktiraj direktno
              i dogovorićemo termin.
            </p>

            <Card className="text-left border-2">
              <CardHeader>
                <CardTitle>Kako rezervisati sada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Kontaktiraj nas</p>
                    <p className="text-sm text-muted-foreground">
                      Pozovi ili piši email sa željenim terminom (dan i vreme)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Potvrdićemo dostupnost</p>
                    <p className="text-sm text-muted-foreground">
                      Proverićemo da li je termin slobodan i poslati podatke za plaćanje
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Dobićeš pristupni kod</p>
                    <p className="text-sm text-muted-foreground">
                      Nakon plaćanja poslati kod za ulaz i sve potrebne informacije
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <a href="#kontakt">Kontaktiraj nas sada</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Često postavljana pitanja
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Mogu li doći sa celom porodicom?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Da! Cela teretana je samo za vas tokom rezervisanog vremena. Možete vežbati
                  svi odjednom ili se smenjivati. Prostor je idealan za 1-4 osobe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Da li je zaista privatno?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Apsolutno! Tokom tvog vremena teretana je zaključana i pristup ima samo onaj
                  ko ima tvoj kod. Nema stranaca, nema ometanja. Samo ti i tvoja porodica/prijatelji.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Kako funkcioniše dečija soba?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Dečija soba je opremljena igračkama i bebefon kamerom. Tokom vežbanja vidiš decu
                  na ekranu u teretani. Deca moraju biti pod nadzorom roditelja - kamera je
                  samo pomoćno sredstvo, ne zamena za nadzor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Mogu li otkazati rezervaciju?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Da, rezervaciju možeš otkazati ili promeniti najkasnije 24 sata pre početka.
                  U tom slučaju vraćamo uplatu u celosti ili pomeramo na drugi termin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Potpuni sam početnik, da li je ovo za mene?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Svakako da! Privatnost je idealna baš za početnike. Možeš učiti
                  svojim tempom bez straha od osuđivanja. Oprema je intuitivna
                  i možeš puštati online trening video snimke.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Da li mi je potrebna sopstvena oprema?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ne. Sva potrebna oprema je na licu mesta. Dovoljno je da poneseš sportsku
                  odeću, obuću i peškir. Preporučujemo i flašu vode.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">Šta ako dođem, a kod ne radi?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Imamo dežurni kontakt dostupan 24/7. Broj ćeš dobiti zajedno sa kodom.
                  U slučaju bilo kog problema, pozovi nas i odmah ćemo rešiti.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontakt</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Kontakt podaci</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Adresa</p>
                      <p className="text-muted-foreground">[Vaša adresa]</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <p className="text-muted-foreground">+421 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">info@mojaposilka.sk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Dostupnost teretane</p>
                      <p className="text-muted-foreground">24/7 sa rezervacijom</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Dežurni kontakt
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    U slučaju problema sa ulaskom ili hitnih slučajeva:
                  </p>
                  <p className="font-medium text-lg">+421 XXX XXX XXX</p>
                  <p className="text-xs text-muted-foreground mt-2">Dostupno 24/7</p>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Pišite nam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get('name');
                        const email = formData.get('email');
                        const message = formData.get('message');

                        const subject = encodeURIComponent(`Rezervacija - ${name}`);
                        const body = encodeURIComponent(`Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`);
                        window.location.href = `mailto:info@mojaposilka.sk?subject=${subject}&body=${body}`;
                      }}
                    >
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ime *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Vaše ime"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="vas@email.rs"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Poruka *</label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Na primer: Želeo bih da rezervišem termin u ponedeljak u 15:00..."
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Pošalji poruku
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Odgovaramo u roku od 24 sata
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Moja teretana" className="h-8 w-8 invert" />
                <span className="font-bold text-lg">Moja teretana</span>
              </div>
              <p className="text-sm opacity-80">
               Tvoja privatna teretana 24/7.<br />
               Bez izgovora. Bez stresa.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Brzi linkovi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#prednosti" className="opacity-80 hover:opacity-100">Prednosti</a></li>
                <li><a href="#oprema" className="opacity-80 hover:opacity-100">Oprema</a></li>
                <li><a href="#cenovnik" className="opacity-80 hover:opacity-100">Cenovnik</a></li>
                <li><a href="#kontakt" className="opacity-80 hover:opacity-100">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pravne informacije</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/prevadzkovy-poriadok" className="opacity-80 hover:opacity-100">Kućni red</a></li>
                <li><a href="/gdpr" className="opacity-80 hover:opacity-100">GDPR</a></li>
                <li><a href="/obchodne-podmienky" className="opacity-80 hover:opacity-100">Uslovi korišćenja</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+421 XXX XXX XXX</li>
                <li>info@mojaposilka.sk</li>
                <li>[Vaša adresa]</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Moja teretana. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a
        href="#rezervacija"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium transition-all hover:scale-105 z-40"
      >
        <Calendar className="h-5 w-5" />
        Rezerviši
      </a>
    </div>
  );
}


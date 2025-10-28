import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg">Kolačići i zaštita privatnosti</CardTitle>
              <CardDescription className="mt-2">
                Koristimo kolačiće za poboljšanje vašeg korisničkog iskustva i analitičke svrhe.
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={rejectCookies}
              className="h-8 w-8 -mt-2 -mr-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Naša web stranica koristi neophodne kolačiće za funkcionisanje rezervacionog sistema i analitičke
            kolačiće za poboljšanje naših usluga. Više informacija možete pronaći u našim{" "}
            <a href="/gdpr" className="text-primary hover:underline font-medium">
              pravilima zaštite ličnih podataka
            </a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={acceptCookies} className="bg-primary hover:bg-primary/90">
              Prihvati sve kolačiće
            </Button>
            <Button onClick={rejectCookies} variant="outline">
              Odbij opcione kolačiće
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


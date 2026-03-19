import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";

const COOKIE_CONSENT_KEY = "neo-deter-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setVisible(!hasConsent);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-20 z-50 sm:right-4 md:left-6 md:right-auto md:max-w-xl lg:bottom-24">
      <div className="surface-panel border-primary/10 p-5">
        <p className="text-sm font-semibold text-foreground">Uso de cookies</p>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {content.cookies.message}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button size="sm" variant="cta" onClick={handleAccept}>
            {content.cookies.acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

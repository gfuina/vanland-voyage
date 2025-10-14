"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Ne pas tracker les pages admin
    if (pathname?.startsWith("/admin") || pathname?.startsWith("/administration")) {
      return;
    }

    const trackPageView = async () => {
      try {
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: pathname,
          }),
        });
      } catch (error) {
        // Silently fail - analytics shouldn't break the app
        console.debug("Analytics tracking failed:", error);
      }
    };

    trackPageView();
  }, [pathname]);

  return null;
}


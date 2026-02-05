import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks page views in Google Analytics when routes change in the SPA.
 * GA script must be loaded in index.html for this to work.
 */
export function useGAPageTracking() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Send page view to GA on route change
    if (window.gtag) {
      window.gtag("config", "G-YXDGTNWLHW", {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);
}

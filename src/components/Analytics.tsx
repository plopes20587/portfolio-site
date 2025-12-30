import { useEffect } from "react";

/**
 * Analytics component for tracking page views
 * Supports Google Analytics, Plausible, or custom analytics
 *
 * To enable:
 * 1. Set VITE_ANALYTICS_ID in environment variables
 * 2. Set VITE_ANALYTICS_TYPE to 'google' or 'plausible'
 *
 * Example .env:
 * VITE_ANALYTICS_ID=G-XXXXXXXXXX
 * VITE_ANALYTICS_TYPE=google
 */

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
    const analyticsType = import.meta.env.VITE_ANALYTICS_TYPE || "google";

    if (!analyticsId) {
      return; // Analytics not configured
    }

    // Google Analytics 4
    if (analyticsType === "google") {
      // Load gtag script
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
      document.head.appendChild(script1);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", analyticsId);
    }

    // Plausible Analytics
    if (analyticsType === "plausible") {
      const script = document.createElement("script");
      script.defer = true;
      script.setAttribute("data-domain", analyticsId);
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);
    }
  }, []);

  return null;
};

export default Analytics;

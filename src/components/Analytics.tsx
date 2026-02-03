import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

// Extend Window interface for Google Analytics and Plausible
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string) => void;
  }
}

const Analytics = () => {
  const location = useLocation();

  // Initialize analytics once on app mount
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

  // Track route changes in SPA
  useEffect(() => {
    const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
    const analyticsType = import.meta.env.VITE_ANALYTICS_TYPE || "google";

    if (!analyticsId) {
      return;
    }

    // Google Analytics: Send page view on route change
    if (analyticsType === "google" && window.gtag) {
      window.gtag("config", analyticsId, {
        page_path: location.pathname + location.search,
      });
    }

    // Plausible: Send page view on route change
    if (analyticsType === "plausible" && window.plausible) {
      window.plausible("pageview");
    }
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;

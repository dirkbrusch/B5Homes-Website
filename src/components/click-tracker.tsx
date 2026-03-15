"use client";

import { useEffect } from "react";

/**
 * Tracks clicks on Airbnb and VRBO booking links.
 * Data is stored in localStorage and accessible via browser console:
 *
 *   JSON.parse(localStorage.getItem('b5homes-clicks'))
 *
 * Or use the helper in the console:
 *   b5stats()
 */
export function ClickTracker() {
  useEffect(() => {
    const STORAGE_KEY = "b5homes-clicks";

    function getStats() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw
          ? JSON.parse(raw)
          : { airbnb: 0, vrbo: 0, log: [] as Array<{ platform: string; page: string; time: string }> };
      } catch {
        return { airbnb: 0, vrbo: 0, log: [] };
      }
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.href || "";
      let platform: "airbnb" | "vrbo" | null = null;

      if (href.includes("airbnb")) platform = "airbnb";
      else if (href.includes("vrbo")) platform = "vrbo";

      if (!platform) return;

      const stats = getStats();
      stats[platform]++;
      stats.log.push({
        platform,
        page: window.location.pathname,
        time: new Date().toISOString(),
      });

      // Keep only last 200 entries
      if (stats.log.length > 200) {
        stats.log = stats.log.slice(-200);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }

    document.addEventListener("click", handleClick, true);

    // Expose helper function in console
    (window as unknown as Record<string, unknown>).b5stats = () => {
      const stats = getStats();
      console.table({
        "Airbnb Clicks": stats.airbnb,
        "VRBO Clicks": stats.vrbo,
        "Total Clicks": stats.airbnb + stats.vrbo,
      });
      if (stats.log.length > 0) {
        console.log("\nRecent clicks:");
        console.table(stats.log.slice(-20));
      }
      return stats;
    };

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

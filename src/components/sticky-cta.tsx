"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop sticky bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 hidden md:block transition-all duration-500 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="border-t border-border/50 bg-card/95 backdrop-blur-xl shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
            <p className="font-serif text-sm font-semibold">
              B5 Homes — Private Forest Retreat
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span className="font-semibold text-foreground">4.86</span>
              <span>&middot;</span>
              <span>103 Reviews</span>
            </div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-xl bg-warm px-6 py-2.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-warm/90 hover:shadow-lg"
            >
              Book Your Stay
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky button */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <Link
          href="/booking"
          className="flex items-center justify-center gap-2 rounded-t-2xl bg-warm px-6 py-4 font-sans font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-warm/90"
        >
          Book Your Stay
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

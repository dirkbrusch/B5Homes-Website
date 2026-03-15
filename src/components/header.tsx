"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-greenville", label: "Greenville" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
      style={scrolled ? {
        background: theme === "dark" ? "oklch(0.17 0.012 155 / 97%)" : "oklch(0.99 0.003 145 / 97%)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      } : undefined}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo.png"
            alt="B5 Homes logo"
            width={56}
            height={56}
            className="shrink-0"
            priority
          />
          <div className="flex flex-col">
            <span className={cn(
              "font-serif text-lg font-bold tracking-tight leading-tight transition-colors duration-500",
              scrolled ? "" : "text-white"
            )}>
              B5 Homes
            </span>
            <span className={cn(
              "text-[10px] font-sans font-medium uppercase tracking-[0.2em] leading-tight transition-colors duration-500",
              scrolled ? "text-muted-foreground" : "text-white/70"
            )}>
              Greenville
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-[13px] font-sans font-medium uppercase tracking-wider transition-colors duration-300",
                scrolled
                  ? pathname === link.href
                    ? "text-warm"
                    : "text-muted-foreground hover:text-foreground"
                  : pathname === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className={cn(
                  "absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-colors duration-500",
                  scrolled ? "bg-warm" : "bg-white"
                )} />
              )}
            </Link>
          ))}
          <div className={cn("ml-3 h-6 w-px transition-colors duration-500", scrolled ? "bg-border" : "bg-white/20")} />
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "ml-2 cursor-pointer rounded-full transition-colors duration-500",
              !scrolled && "text-white hover:text-white hover:bg-white/15"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "cursor-pointer rounded-full transition-colors duration-500",
              !scrolled && "text-white hover:text-white hover:bg-white/15"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                "cursor-pointer inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-10 w-10",
                scrolled
                  ? "hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/15"
              )}
              aria-label="Open menu"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l-0">
              <div className="flex items-center gap-3 pb-8 border-b border-border/50">
                <Image
                  src="/images/logo.png"
                  alt="B5 Homes logo"
                  width={48}
                  height={48}
                  className="shrink-0"
                />
                <div className="flex flex-col">
                  <SheetTitle className="font-serif text-lg leading-tight">B5 Homes</SheetTitle>
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Greenville
                  </span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-[15px] font-sans font-medium transition-all duration-200",
                      pathname === link.href
                        ? "bg-warm/10 text-warm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="B5 Homes logo"
                width={56}
                height={56}
                className="shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight leading-tight">
                  B5 Homes
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                  Greenville, SC
                </span>
              </div>
            </Link>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-xs">
              Your private forest retreat in Greenville, SC. Experience
              comfort, nature, and warm hospitality — a true home away from home.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/about-greenville", label: "Greenville" },
                { href: "/gallery", label: "Gallery" },
                { href: "/booking", label: "Book Your Stay" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-warm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:booking@b5homes.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-warm"
              >
                <Mail className="h-4 w-4 shrink-0 text-warm/60" />
                booking@b5homes.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-warm/60" />
                <span>
                  5 Oak Glen Ct
                  <br />
                  Greenville, SC 29607
                </span>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Book Your Stay
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.airbnb.de/h/b5homes"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-xl bg-warm px-5 py-3 text-sm font-medium text-warm-foreground transition-all hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20"
              >
                Book on Airbnb
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.vrbo.com/2120967"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-xl border border-border px-5 py-3 text-sm font-medium transition-all hover:bg-muted hover:border-warm/30"
              >
                Book on VRBO
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} B5 Homes Greenville. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-warm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-warm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

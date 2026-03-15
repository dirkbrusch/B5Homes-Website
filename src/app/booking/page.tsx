import type { Metadata } from "next";
import {
  ArrowRight,
  Home,
  Users,
  BedDouble,
  Bath,
  TreePine,
  ArrowUpRight,
  Shield,
  Clock,
  CreditCard,
  XCircle,
  Zap,
  Lock,
  MessageCircle,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";

function AirbnbLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
      <path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 51.9-45.1 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200.5-.1-200.5-46.1 0-103.9 70.4-.1 200.5-35.5 39.6-77.2 68.7-119.2 50.5-52.6-22.7-40.4-108.6 0-199.7C178.9 33.5 243.2 0 295.6 0c52.3 0 116.6 33.5 171.9 196.6 40.5 91.1 52.7 177 .1 199.7z" />
    </svg>
  );
}

function VrboLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M2.5 4.5L5.5 16h1.2l2.3-8.5L11.3 16h1.2l3-11.5h-1.8l-2 8.2L9.5 4.5H8.3L6.1 12.7l-2-8.2H2.5zm12 0L17.5 16h1.2l3-11.5h-1.8l-2 8.2-2.2-8.2h-1.2z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Book Your Stay — Airbnb & VRBO Availability",
  description:
    "Book B5 Homes Greenville on Airbnb or VRBO. 3 bedrooms, 2 bathrooms, private forest setting. Superhost rated with 5-star reviews. Check availability and book today.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book B5 Homes Greenville — Airbnb & VRBO",
    description: "Check availability and book your private forest retreat in Greenville, SC.",
  },
};

const propertyDetails = [
  { icon: BedDouble, label: "3 Bedrooms", detail: "Premium bedding" },
  { icon: Bath, label: "2 Bathrooms", detail: "Fully appointed" },
  { icon: Users, label: "Up to 6 Guests", detail: "Family friendly" },
  { icon: Home, label: "Entire Home", detail: "Private retreat" },
  { icon: TreePine, label: "35,000 sq ft", detail: "Forest property" },
];

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-primary via-primary/90 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.55_0.14_145_/_15%),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 text-amber-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                Reservations
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Book Your Stay
            </h1>
            <p className="mt-5 text-white/70 leading-relaxed max-w-2xl mx-auto">
              Choose your preferred booking platform below to check availability
              and reserve your dates at B5 Homes Greenville.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
              <span className="text-sm font-semibold text-white">4.86</span>
              <span className="text-sm text-white/70">from 103+ reviews</span>
              <span className="text-white/40">·</span>
              <Shield className="h-3.5 w-3.5 text-amber-200" />
              <span className="text-sm text-white/70">Superhost</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Airbnb Card */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF5A5F]/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C]" />
              <CardContent className="p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A5F]/10 transition-colors group-hover:bg-[#FF5A5F]/15">
                    <AirbnbLogo className="h-7 w-7 text-[#FF5A5F]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold">Airbnb</h2>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Star className="h-3.5 w-3.5 fill-[#FF5A5F] text-[#FF5A5F]" />
                      <span className="text-sm font-semibold">4.86</span>
                      <span className="text-xs text-muted-foreground">· 103 reviews</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#FF5A5F]/5 border border-[#FF5A5F]/10 p-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#FF5A5F] text-[#FF5A5F]" />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Cleanliness 4.8 · Check-in 5.0 · Communication 5.0
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { icon: Clock, text: "Instant booking available" },
                    { icon: Shield, text: "Superhost · Guest Favorite" },
                    { icon: CreditCard, text: "24/7 Airbnb support" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <item.icon className="h-4 w-4 text-[#FF5A5F]/60" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.airbnb.de/h/b5homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5A5F] px-6 py-3.5 font-medium text-white transition-all hover:bg-[#E04E52] hover:shadow-lg hover:shadow-[#FF5A5F]/20"
                >
                  View on Airbnb
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            {/* VRBO Card */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B5FC0]/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B5FC0] to-[#2B4FA0]" />
              <CardContent className="p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B5FC0]/10 transition-colors group-hover:bg-[#3B5FC0]/15">
                    <VrboLogo className="h-8 w-8 text-[#3B5FC0]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold">VRBO</h2>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Star className="h-3.5 w-3.5 fill-[#3B5FC0] text-[#3B5FC0]" />
                      <span className="text-sm font-semibold">5.0</span>
                      <span className="text-xs text-muted-foreground">· Exceptional</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#3B5FC0]/5 border border-[#3B5FC0]/10 p-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#3B5FC0] text-[#3B5FC0]" />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Listing accuracy · Cleanliness · Communication
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { icon: Clock, text: "Flexible cancellation options" },
                    { icon: Shield, text: "Book with Confidence guarantee" },
                    { icon: Users, text: "Family-friendly platform" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <item.icon className="h-4 w-4 text-[#3B5FC0]/60" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.vrbo.com/2120967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3B5FC0] px-6 py-3.5 font-medium text-white transition-all hover:bg-[#2E4FA0] hover:shadow-lg hover:shadow-[#3B5FC0]/20"
                >
                  View on VRBO
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Booking */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Card className="border border-border/50 bg-card overflow-hidden">
            <CardContent className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                  Flexible Booking
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Book with confidence on either platform
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: XCircle, text: "Free cancellation available", color: "text-nature" },
                  { icon: Zap, text: "Instant booking on both platforms", color: "text-warm" },
                  { icon: Lock, text: "Secure payment protection", color: "text-nature" },
                  { icon: MessageCircle, text: "Direct communication with your host", color: "text-warm" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 rounded-xl border border-border/40 bg-muted/20 p-5 transition-all duration-300 hover:bg-muted/40">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-nature/8">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <span className="font-sans text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Property Summary */}
      <section className="border-y bg-gradient-to-b from-muted/20 to-transparent py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              At a Glance
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
              Property Overview
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {propertyDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-warm/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warm/8">
                  <detail.icon className="h-5 w-5 text-warm" />
                </div>
                <span className="text-sm font-semibold">{detail.label}</span>
                <span className="text-[11px] text-muted-foreground">{detail.detail}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Have questions before booking? We&apos;re here to help.
            </p>
            <LinkButton
              href="/contact"
              className="mt-5 cursor-pointer rounded-xl bg-warm text-white hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

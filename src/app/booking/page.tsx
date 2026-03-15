import type { Metadata } from "next";
import {
  Calendar,
  ExternalLink,
  ArrowRight,
  Home,
  Users,
  BedDouble,
  Bath,
  TreePine,
  Sparkles,
  ArrowUpRight,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";

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
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
        <div className="absolute top-20 left-[15%] h-64 w-64 rounded-full bg-warm/5 blur-3xl" />
        <div className="absolute bottom-10 right-[20%] h-48 w-48 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-warm/20 bg-warm/5 px-4 py-1.5 text-sm">
              <Calendar className="h-3.5 w-3.5 text-warm" />
              <span className="text-xs font-medium uppercase tracking-wider text-warm">
                Reservations
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Book Your Stay
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred booking platform below to check availability
              and reserve your dates at B5 Homes Greenville.
            </p>
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
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF5A5F]/10 transition-colors group-hover:bg-[#FF5A5F]/15">
                  <Calendar className="h-7 w-7 text-[#FF5A5F]" />
                </div>
                <h2 className="font-serif text-2xl font-bold">
                  Book on Airbnb
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Browse our listing, check live availability, read guest
                  reviews, and book instantly through Airbnb.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    { icon: Clock, text: "Instant booking available" },
                    { icon: Shield, text: "Secure payment protection" },
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
                  className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5A5F] px-6 py-3.5 font-medium text-white transition-all hover:bg-[#E04E52] hover:shadow-lg hover:shadow-[#FF5A5F]/20"
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
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B5FC0]/10 transition-colors group-hover:bg-[#3B5FC0]/15">
                  <Calendar className="h-7 w-7 text-[#3B5FC0]" />
                </div>
                <h2 className="font-serif text-2xl font-bold">
                  Book on VRBO
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  View our property on VRBO, check calendar availability, and
                  book your perfect vacation rental.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    { icon: Clock, text: "Flexible cancellation options" },
                    { icon: Shield, text: "Book with confidence guarantee" },
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
                  className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3B5FC0] px-6 py-3.5 font-medium text-white transition-all hover:bg-[#2E4FA0] hover:shadow-lg hover:shadow-[#3B5FC0]/20"
                >
                  View on VRBO
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
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
              className="mt-5 cursor-pointer rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300"
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

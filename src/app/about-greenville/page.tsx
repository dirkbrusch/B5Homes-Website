import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Utensils,
  Palette,
  Mountain,
  Calendar,
  ArrowRight,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";

export const metadata: Metadata = {
  title: "Discover Greenville, SC — Things to Do Near B5 Homes",
  description:
    "Explore Greenville, South Carolina — Falls Park, Swamp Rabbit Trail, award-winning restaurants, and year-round festivals. All just 15 minutes from B5 Homes vacation rental.",
  alternates: { canonical: "/about-greenville" },
  openGraph: {
    title: "Discover Greenville, SC — Near B5 Homes",
    description: "Falls Park, dining, trails, and festivals — all minutes from your vacation rental.",
  },
};

const highlights = [
  {
    icon: Utensils,
    title: "Award-Winning Dining",
    description:
      "From farm-to-table restaurants to craft breweries, Greenville's Main Street offers a culinary experience that rivals any major city.",
    accent: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: Mountain,
    title: "Natural Beauty",
    description:
      "Falls Park on the Reedy with its iconic Liberty Bridge, the Swamp Rabbit Trail, and the Blue Ridge Mountains just a short drive away.",
    accent: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description:
      "World-class museums, galleries, live theater, and a thriving arts community make Greenville a cultural destination.",
    accent: "from-violet-500/10 to-violet-500/5",
  },
  {
    icon: Calendar,
    title: "Year-Round Events",
    description:
      "Seasonal festivals, farmers markets, outdoor concerts, and community events keep the city vibrant all year long.",
    accent: "from-sky-500/10 to-sky-500/5",
  },
];

const resources = [
  {
    label: "Visit Greenville SC",
    href: "https://www.visitgreenvillesc.com",
    description: "Official tourism guide",
  },
  {
    label: "City of Greenville",
    href: "https://www.greenvillesc.gov",
    description: "City resources & events",
  },
  {
    label: "Greenville on TripAdvisor",
    href: "https://www.tripadvisor.com/Tourism-g54258-Greenville_South_Carolina-Vacations.html",
    description: "Reviews & recommendations",
  },
];

export default function AboutGreenvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-primary via-primary/90 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.55_0.14_145_/_15%),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-amber-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                Discover
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Greenville,
              <br />
              <span className="text-amber-200">South Carolina</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              One of the South&apos;s most charming cities, blending vibrant
              urban culture with stunning natural beauty — just 15 minutes
              from your door at B5 Homes.
            </p>
          </div>
        </div>
      </section>

      {/* Falls Park Hero Image */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero/falls-park.webp"
              alt="Falls Park on the Reedy with waterfall in downtown Greenville, South Carolina"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-black/40 px-3 py-1 text-[10px] text-white/70 backdrop-blur-sm">
              Photo: Brad Shortridge / Unsplash
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nature">
              Highlights
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              What Makes Greenville Special
            </h2>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="group border-0 bg-gradient-to-b from-muted/40 to-muted/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-nature/8 transition-colors duration-300 group-hover:bg-nature/15">
                    <item.icon className="h-6 w-6 text-nature" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="border-y bg-gradient-to-b from-muted/20 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Heritage
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              A City Transformed
            </h2>
            <div className="mt-10 space-y-6 text-muted-foreground leading-[1.8]">
              <p className="text-lg text-foreground/80 font-light">
                Once a textile industry hub, Greenville has reinvented itself
                into one of the most desirable cities in the American South.
                Its revitalized downtown has earned national recognition.
              </p>
              <p>
                The crown jewel is Falls Park on the Reedy, where a stunning
                waterfall cascades through the heart of downtown, crossed by
                the award-winning Liberty Bridge. The Swamp Rabbit Trail
                connects the city with miles of scenic paths perfect for
                walking, running, and cycling.
              </p>
              <p>
                Whether you&apos;re exploring boutique shops, savoring
                world-class dining, or hiking in the nearby Blue Ridge
                Mountains, Greenville offers an experience that keeps visitors
                coming back year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Plan Ahead
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Plan Your Visit
            </h2>
            <p className="mt-5 text-muted-foreground">
              Explore these resources to plan your perfect Greenville trip
            </p>
            <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
              {resources.map((resource) => (
                <a
                  key={resource.label}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card/50 px-6 py-4 transition-all duration-300 hover:shadow-lg hover:border-warm/20 hover:-translate-y-0.5"
                >
                  <div className="text-left">
                    <span className="text-sm font-semibold">{resource.label}</span>
                    <p className="text-[11px] text-muted-foreground">{resource.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-warm group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
            <div className="mt-14">
              <LinkButton
                href="/booking"
                size="lg"
                className="cursor-pointer bg-warm text-warm-foreground hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20 px-10 rounded-xl transition-all duration-300"
              >
                Book Your Stay
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Home, ArrowRight, Users, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";

export const metadata: Metadata = {
  title: "About Us — Your Hosts at B5 Homes Greenville",
  description:
    "Meet the hosts behind B5 Homes Greenville. Superhost-rated, dedicated to providing an exceptional vacation experience in our private forest retreat near downtown Greenville, SC.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — B5 Homes Greenville",
    description: "Meet the hosts behind your private forest retreat in Greenville, SC.",
  },
};

const values = [
  {
    icon: Heart,
    title: "Passion for Hospitality",
    description:
      "Every detail of our home has been carefully chosen to make your stay comfortable and memorable.",
  },
  {
    icon: Star,
    title: "Attention to Detail",
    description:
      "From premium bedding to a fully stocked kitchen, we've thought of everything so you can relax and enjoy.",
  },
  {
    icon: Home,
    title: "A Personal Touch",
    description:
      "This isn't just a rental — it's a home we've poured our hearts into, and we want you to feel that.",
  },
  {
    icon: Users,
    title: "Responsive Hosts",
    description:
      "We're always available to help make your stay perfect, from check-in to check-out and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-primary via-primary/90 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.55_0.14_145_/_15%),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                Our Story
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Welcome to B5 Homes
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              A family&apos;s passion for hospitality, brought to life in the
              heart of Greenville&apos;s beautiful forest landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Property Photo */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/exterior/front.webp"
              alt="B5 Homes - charming brick ranch home surrounded by mature trees"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-8 text-muted-foreground leading-[1.8]">
            <p className="text-xl leading-[1.8] text-foreground/80 font-light first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-warm first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              B5 Homes was born from a simple idea: to create a place where
              travelers can feel truly at home while exploring the beauty of
              Greenville, South Carolina. Our family has always believed that
              the best vacations are spent in spaces that feel personal and
              inviting.
            </p>
            <p>
              Nestled on over 35,000 square feet of private forest land, our
              home offers something rare — the peace and tranquility of
              nature, combined with the convenience of being just 15 minutes
              from downtown Greenville&apos;s award-winning Main Street.
            </p>
            <p>
              Every room has been thoughtfully designed with meticulous
              attention to detail. From the premium bedding and fully equipped
              kitchen to the screened porch overlooking the woods, we&apos;ve
              created a space that invites you to relax and recharge.
            </p>
            <p>
              When you stay with us, you&apos;re not just renting a house —
              you&apos;re experiencing a labor of love. We hope our home brings
              you the same joy that creating it has brought us.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-gradient-to-b from-muted/20 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Our Values
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              What Drives Us
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="group border-0 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-warm/5 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-warm/8 transition-colors duration-300 group-hover:bg-warm/15">
                    <value.icon className="h-5 w-5 text-warm" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-nature/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,oklch(0.72_0.12_85),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Your Stay Awaits
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Come Be Our Guest
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-primary-foreground/80 leading-relaxed">
            Experience the warmth and comfort that makes B5 Homes special.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton
              href="/booking"
              size="lg"
              className="cursor-pointer bg-white text-primary hover:bg-white/90 hover:shadow-lg px-10 rounded-xl transition-all duration-300 font-sans font-semibold"
            >
              Book Your Stay
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 gap-1.5 px-10 rounded-xl border-2 border-white/60 text-white font-sans font-medium text-sm transition-all duration-300 hover:bg-white/15 hover:border-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

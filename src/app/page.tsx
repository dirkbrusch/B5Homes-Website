import Image from "next/image";
import {
  TreePine,
  MapPin,
  Star,
  Wifi,
  Car,
  UtensilsCrossed,
  ArrowRight,
  Quote,
  Sparkles,
  Shield,
  Clock,
  BedDouble,
  Bath,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/link-button";

const features = [
  {
    icon: TreePine,
    title: "Private Forest",
    description:
      "35,000 sq ft of lush woodland surrounds your private retreat, with birdsong and towering oaks.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Just 15 minutes from downtown Greenville's award-winning Main Street and Falls Park.",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description:
      "High-speed Wi-Fi, fully equipped kitchen, smart TV, and premium bedding throughout.",
  },
  {
    icon: Car,
    title: "Easy Access",
    description:
      "Free parking, close to GSP Airport, Falls Park, and the Swamp Rabbit Trail.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fully Equipped",
    description:
      "Everything you need for a perfect stay — from a gourmet kitchen to in-unit laundry.",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    description:
      "Consistently top-rated for comfort, cleanliness, and thoughtful personal touches.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Atlanta, GA",
    text: "An absolutely wonderful stay! The house is even more beautiful than the photos. The forest setting made us feel like we were in a nature retreat, yet downtown was just a short drive away.",
    rating: 5,
  },
  {
    name: "James & Linda K.",
    location: "Charlotte, NC",
    text: "The attention to detail is remarkable. Everything was so well thought out. We felt so comfortable and at home. The hosts were incredibly responsive.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Nashville, TN",
    text: "Perfect getaway. The porch overlooking the private forest was our favorite spot. We've already booked our next stay. Highly recommend for families!",
    rating: 5,
  },
];

const stats = [
  { value: "35,000", label: "Sq Ft Private Land", icon: TreePine },
  { value: "15", label: "Min to Downtown", icon: Clock },
  { value: "5", label: "Star Reviews", icon: Star },
  { value: "100%", label: "Superhost", icon: Shield },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/front-view.jpg"
            alt="B5 Homes — charming brick home surrounded by lush green trees"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Stronger overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 lg:px-8 lg:pt-36 lg:pb-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-5 py-2 text-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span className="font-sans font-medium text-white">
                Premium Vacation Rental in Greenville, SC
              </span>
            </div>

            <h1 className="animate-fade-up animation-delay-100 mt-8 font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              <span className="text-white drop-shadow-lg">Your Private</span>
              <br />
              <span className="text-amber-200 drop-shadow-lg">
                Forest Retreat
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-200 mt-8 font-sans text-lg leading-relaxed text-white/90 sm:text-xl max-w-2xl mx-auto drop-shadow-md">
              A beautifully appointed home nestled in a private forest,
              just minutes from downtown Greenville. Comfort, nature,
              and warm hospitality await you.
            </p>

            <div className="animate-fade-up animation-delay-300 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/booking"
                size="lg"
                className="cursor-pointer bg-white text-foreground hover:bg-white/90 hover:shadow-lg px-8 rounded-xl transition-all duration-300 font-sans font-semibold"
              >
                Book Your Stay
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/gallery"
                variant="outline"
                size="lg"
                className="cursor-pointer px-8 rounded-xl border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 font-sans font-semibold"
              >
                Explore the Property
              </LinkButton>
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-up animation-delay-500 mt-20 mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-md"
                >
                  <stat.icon className="h-5 w-5 text-amber-300" />
                  <span className="font-serif text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] font-medium uppercase tracking-wider text-white/70 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              The Experience
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Why Choose B5 Homes
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              Every detail curated for your perfect Greenville getaway
            </p>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border border-border/50 bg-card transition-all duration-500 hover:shadow-xl hover:shadow-nature/5 hover:-translate-y-1"
              >
                <CardContent className="relative p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-nature/8 transition-colors duration-300 group-hover:bg-nature/15">
                    <feature.icon className="h-5 w-5 text-nature" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-nature/3 transition-transform duration-500 group-hover:scale-150" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour */}
      <section className="border-y border-border/50 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Virtual Tour
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              See It for Yourself
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              Take a tour of our property and the surrounding neighborhood
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
              poster="/images/hero/aerial.jpg"
            >
              <source src="/videos/property-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Property Highlight with Real Images */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
                The Property
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                A Home Away
                <br />
                From Home
              </h2>
              <p className="mt-6 font-sans text-muted-foreground leading-relaxed">
                Set on 35,000 square feet of private forest land, our home
                offers a unique combination of natural tranquility and modern
                convenience. Wake up to birdsong, enjoy your coffee on the
                porch surrounded by towering oaks, and explore vibrant downtown
                Greenville just 15 minutes away.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "3 spacious bedrooms with premium bedding",
                  "2 full bathrooms, beautifully appointed",
                  "Fully equipped modern kitchen",
                  "Screened porch with forest views",
                  "Free parking and high-speed Wi-Fi",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-sans text-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-nature/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-nature" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <LinkButton
                href="/gallery"
                className="mt-10 cursor-pointer bg-warm text-white hover:bg-warm/90 rounded-xl transition-all duration-300 hover:shadow-lg font-sans"
              >
                Explore the Property
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/interior/porch-full.jpg"
                  alt="Screened porch with comfortable seating and forest views"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border/40 bg-card p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-nature/10">
                    <TreePine className="h-5 w-5 text-nature" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold">Private Forest</p>
                    <p className="font-sans text-xs text-muted-foreground">35,000 sq ft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Preview */}
      <section className="border-y border-border/50 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Inside the Home
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Comfort in Every Detail
            </h2>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/interior/living-room.jpg", alt: "Spacious living room with sectional sofa and fireplace", label: "Living Room" },
              { src: "/images/interior/kitchen-dining.jpeg", alt: "Open-concept kitchen and dining area", label: "Kitchen & Dining" },
              { src: "/images/rooms/master-bedroom.jpeg", alt: "Master bedroom with queen bed and premium linens", label: "Master Bedroom" },
              { src: "/images/rooms/guest-bedroom.jpeg", alt: "Guest bedroom with queen bed and yellow accents", label: "Guest Bedroom" },
              { src: "/images/interior/porch-seating.jpg", alt: "Screened porch with comfortable seating area", label: "Screened Porch" },
              { src: "/images/exterior/front.jpg", alt: "Front view of brick ranch home surrounded by trees", label: "Exterior" },
            ].map((img) => (
              <div
                key={img.label}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-sans text-sm font-medium text-white">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Guest Experiences
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              What Our Guests Say
            </h2>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="group border border-border/50 bg-card transition-all duration-500 hover:shadow-xl hover:shadow-nature/5"
              >
                <CardContent className="p-8">
                  <Quote className="mb-6 h-10 w-10 text-nature/20" />
                  <p className="font-sans text-[15px] leading-relaxed text-muted-foreground italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-nature/10 flex items-center justify-center">
                      <span className="font-serif text-sm font-bold text-nature">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-nature/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,oklch(0.72_0.12_85),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Start Planning
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready for Your
            <br />
            Greenville Getaway?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-primary-foreground/80 leading-relaxed">
            Book your stay today and experience the perfect blend of nature and
            comfort in beautiful Greenville, South Carolina.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton
              href="/booking"
              size="lg"
              className="cursor-pointer bg-white text-primary hover:bg-white/90 hover:shadow-lg px-10 rounded-xl transition-all duration-300 font-sans font-semibold"
            >
              Check Availability
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="cursor-pointer border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 rounded-xl transition-all duration-300 font-sans"
            >
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

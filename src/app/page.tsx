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
  MessageSquare,
  Navigation,
  Mountain,
  Plane,
  Bike,
  Footprints,
  ExternalLink,
  Award,
  TrendingUp,
  Heart,
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

const airbnbReviews = [
  {
    name: "Audrey",
    location: "Scottsdale, AZ",
    date: "December 2025",
    rating: 5,
    excerpt:
      "Loved the two-week stay in this safe, peaceful area. The beautiful back porch was a highlight.",
  },
  {
    name: "Rachael & Guy",
    location: "Camden, ME",
    date: "November 2025",
    rating: 5,
    excerpt:
      "Great location near shops and restaurants with clear instructions and a proactive host.",
  },
  {
    name: "Amanda",
    location: "Greenville, SC",
    date: "August 2025",
    rating: 5,
    excerpt:
      "Clean house with a sweet screened porch, perfect for an extended stay.",
  },
];

const vrboReviews = [
  {
    name: "Gina R.",
    location: "Greenville Area",
    date: "August 2025",
    rating: 10,
    excerpt:
      "Great location, easy to find. House was clean, nicely appointed and a very comfortable place to land. I'd definitely rent this home again.",
  },
  {
    name: "Troy H.",
    location: "Verified Traveler",
    date: "May 2025",
    rating: 10,
    excerpt:
      "Loved the home and area. Great home for our stay.",
  },
  {
    name: "Mary S.",
    location: "Verified Traveler",
    date: "May 2025",
    rating: 10,
    excerpt:
      "Enjoyed our stay. Quiet and peaceful — exactly what we were looking for.",
  },
];

const stats = [
  { value: "4.86", label: "Airbnb Rating", icon: Star },
  { value: "9.8", label: "VRBO Rating", icon: Star },
  { value: "207+", label: "Total Reviews", icon: MessageSquare },
  { value: "Super", label: "Host Status", icon: Shield },
];

const nearbyPlaces = [
  { name: "Falls Park & Liberty Bridge", distance: "15 min drive", icon: Footprints },
  { name: "Swamp Rabbit Trail", distance: "10 min drive", icon: Bike },
  { name: "Downtown Main Street", distance: "15 min drive", icon: Navigation },
  { name: "GSP Airport", distance: "25 min drive", icon: Plane },
  { name: "Paris Mountain State Park", distance: "20 min drive", icon: TreePine },
  { name: "Blue Ridge Mountains", distance: "45 min drive", icon: Mountain },
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
              <div className="mt-6 space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Imagine waking up to the soft sound of birds singing outside your
                  window. You step onto the screened porch with a warm cup of coffee
                  and look out at towering oak trees all around you. The morning air
                  is cool and fresh. This is what it feels like to stay at B5 Homes.
                </p>
                <p>
                  Our home sits on 35,000 square feet of private forest land in a
                  quiet, safe neighborhood. You will feel like you are deep in the
                  woods, but you are only 15 minutes from the heart of downtown
                  Greenville. That means you can enjoy the best of both worlds —
                  peaceful nature during the day and great restaurants, shops, and
                  live music at night.
                </p>
                <p>
                  The screened porch is the favorite spot for most of our guests.
                  It is the perfect place to relax with a book, share a meal with
                  your family, or simply watch the fireflies on a warm evening.
                  Inside, you will find a clean, comfortable home with everything
                  you need. The kitchen is fully stocked so you can cook your
                  favorite meals. The beds have premium linens so you sleep well
                  every night. And the living room is cozy and welcoming, with a
                  fireplace and plenty of room for the whole family.
                </p>
                <p>
                  Whether you are visiting Greenville for a weekend getaway, a
                  family vacation, or an extended stay, B5 Homes is the kind of
                  place that makes you feel right at home from the moment you
                  walk in.
                </p>
              </div>
              <ul className="mt-10 space-y-4">
                {[
                  "3 spacious bedrooms with soft, premium bedding for a great night's sleep",
                  "2 full bathrooms, clean and beautifully appointed with fresh towels",
                  "Fully equipped kitchen with everything you need to cook and enjoy meals",
                  "Screened porch surrounded by forest — the perfect spot to unwind",
                  "Free parking, high-speed Wi-Fi, and washer/dryer for your convenience",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-sans text-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nature/10">
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

      {/* Google Maps / Location Section */}
      <section className="border-y border-border/50 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Location
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Prime Location
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              Close to everything Greenville has to offer
            </p>
          </div>
          <div className="mt-16 overflow-hidden rounded-3xl shadow-2xl border border-border/50">
            <iframe
              src="https://maps.google.com/maps?q=34.8526,-82.394&z=13&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="B5 Homes location on Google Maps"
              className="w-full"
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyPlaces.map((place) => (
              <Card
                key={place.name}
                className="group border border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-nature/5"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nature/8 transition-colors duration-300 group-hover:bg-nature/15">
                    <place.icon className="h-5 w-5 text-nature" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold">
                      {place.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {place.distance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Preview */}
      <section className="py-24 lg:py-32">
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

      {/* Guest Reviews */}
      <section className="border-y border-border/50 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Guest Experiences
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              What Our Guests Say
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              Consistently top-rated across both major booking platforms
            </p>
          </div>

          {/* Platform Rating Overview */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Airbnb Ratings */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#FF5A5F]/5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C]" />
              <CardContent className="p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5A5F]/10">
                      <AirbnbLogo className="h-6 w-6 text-[#FF5A5F]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold">Airbnb</h3>
                      <p className="text-xs text-muted-foreground">103+ reviews</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-5 w-5 fill-[#FF5A5F] text-[#FF5A5F]" />
                      <span className="font-serif text-2xl font-bold">4.86</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">out of 5</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5A5F]/8 px-3 py-1 text-xs font-medium text-[#FF5A5F]">
                    <Shield className="h-3 w-3" />
                    Superhost
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5A5F]/8 px-3 py-1 text-xs font-medium text-[#FF5A5F]">
                    <Heart className="h-3 w-3" />
                    Guest Favorite
                  </span>
                </div>

                {/* Category Ratings */}
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {[
                    { label: "Check-in", score: "5.0" },
                    { label: "Communication", score: "5.0" },
                    { label: "Accuracy", score: "4.9" },
                    { label: "Location", score: "4.9" },
                    { label: "Cleanliness", score: "4.8" },
                    { label: "Value", score: "4.8" },
                  ].map((cat) => (
                    <div key={cat.label} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground">{cat.label}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#FF5A5F]"
                            style={{ width: `${(parseFloat(cat.score) / 5) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold w-6 text-right">{cat.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* VRBO Ratings */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-muted/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#3B5FC0]/5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B5FC0] to-[#2B4FA0]" />
              <CardContent className="p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3B5FC0]/10">
                      <VrboLogo className="h-7 w-7 text-[#3B5FC0]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold">VRBO</h3>
                      <p className="text-xs text-muted-foreground">104 verified reviews</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-5 w-5 fill-[#3B5FC0] text-[#3B5FC0]" />
                      <span className="font-serif text-2xl font-bold">9.8</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">out of 10</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3B5FC0]/8 px-3 py-1 text-xs font-medium text-[#3B5FC0]">
                    <Award className="h-3 w-3" />
                    Loved by Guests
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3B5FC0]/8 px-3 py-1 text-xs font-medium text-[#3B5FC0]">
                    <TrendingUp className="h-3 w-3" />
                    Top 10% in Area
                  </span>
                </div>

                {/* Category Ratings */}
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {[
                    { label: "Listing Accuracy", score: "10.0" },
                    { label: "Check-in", score: "9.8" },
                    { label: "Communication", score: "9.8" },
                    { label: "Location", score: "9.8" },
                    { label: "Cleanliness", score: "9.6" },
                    { label: "Overall", score: "9.8" },
                  ].map((cat) => (
                    <div key={cat.label} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground">{cat.label}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#3B5FC0]"
                            style={{ width: `${(parseFloat(cat.score) / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold w-6 text-right">{cat.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Review Cards — Airbnb */}
          <div className="mt-14">
            <div className="flex items-center gap-2 mb-6">
              <AirbnbLogo className="h-4 w-4 text-[#FF5A5F]" />
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Airbnb Reviews
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {airbnbReviews.map((review) => (
                <Card
                  key={review.name}
                  className="group border border-border/50 bg-card transition-all duration-500 hover:shadow-xl hover:shadow-nature/5"
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-[#FF5A5F] text-[#FF5A5F]"
                        />
                      ))}
                    </div>
                    <p className="mt-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                      {review.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                        <span className="font-serif text-sm font-bold text-[#FF5A5F]">
                          {review.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold">
                          {review.name}
                        </p>
                        <p className="font-sans text-xs text-muted-foreground">
                          {review.location} &middot; {review.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Cards — VRBO */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-6">
              <VrboLogo className="h-4 w-4 text-[#3B5FC0]" />
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                VRBO Reviews
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vrboReviews.map((review) => (
                <Card
                  key={review.name}
                  className="group border border-border/50 bg-card transition-all duration-500 hover:shadow-xl hover:shadow-nature/5"
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 fill-[#3B5FC0] text-[#3B5FC0]" />
                      <span className="text-sm font-semibold text-[#3B5FC0]">{review.rating}/10</span>
                      <span className="text-xs text-muted-foreground">Excellent</span>
                    </div>
                    <p className="mt-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                      {review.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#3B5FC0]/10 flex items-center justify-center">
                        <span className="font-serif text-sm font-bold text-[#3B5FC0]">
                          {review.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold">
                          {review.name}
                        </p>
                        <p className="font-sans text-xs text-muted-foreground">
                          {review.location} &middot; {review.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons for Both Platforms */}
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.airbnb.de/h/b5homes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF5A5F] px-6 py-3 font-sans font-medium text-white transition-all duration-300 hover:bg-[#E04E52] hover:shadow-lg hover:shadow-[#FF5A5F]/20"
            >
              <AirbnbLogo className="h-4 w-4" />
              All Reviews on Airbnb
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.vrbo.com/2120967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3B5FC0] px-6 py-3 font-sans font-medium text-white transition-all duration-300 hover:bg-[#2E4FA0] hover:shadow-lg hover:shadow-[#3B5FC0]/20"
            >
              <VrboLogo className="h-4 w-4" />
              All Reviews on VRBO
              <ExternalLink className="h-4 w-4" />
            </a>
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
              className="cursor-pointer border-2 border-white/60 text-white hover:bg-white/15 hover:border-white px-10 rounded-xl transition-all duration-300 font-sans"
            >
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

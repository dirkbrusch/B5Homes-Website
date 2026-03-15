import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClickTracker } from "@/components/click-tracker";
import { StickyCTA } from "@/components/sticky-cta";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://b5homes.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B5 Homes Greenville | Premium Vacation Rental in Greenville, SC",
    template: "%s | B5 Homes Greenville",
  },
  description:
    "Book your private forest retreat in Greenville, SC. 3-bedroom home on 35,000 sq ft of woodland, 15 min from downtown. Superhost rated, family-friendly. Book on Airbnb or VRBO.",
  keywords: [
    "vacation rental Greenville SC",
    "Greenville South Carolina vacation home",
    "Airbnb Greenville SC",
    "VRBO Greenville SC",
    "forest retreat Greenville",
    "B5 Homes",
    "private forest rental",
    "family vacation rental South Carolina",
    "Falls Park vacation home",
    "Greenville SC Superhost",
    "short term rental Greenville",
    "cabin near downtown Greenville",
  ],
  authors: [{ name: "B5 Homes" }],
  creator: "B5 Homes",
  publisher: "B5 Homes",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "B5 Homes | Private Forest Retreat in Greenville, SC",
    description:
      "3-bedroom vacation home on 35,000 sq ft of private forest, just 15 minutes from downtown Greenville. Superhost rated. Book on Airbnb or VRBO.",
    url: SITE_URL,
    siteName: "B5 Homes Greenville",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero/front-view.jpg",
        width: 1200,
        height: 630,
        alt: "B5 Homes — charming brick home surrounded by lush green forest in Greenville, SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B5 Homes | Private Forest Retreat in Greenville, SC",
    description:
      "3-bedroom vacation home on 35,000 sq ft of private forest. Book on Airbnb or VRBO.",
    images: ["/images/hero/front-view.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for vacation rental
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "B5 Homes Greenville — Private Forest Retreat",
  alternateName: "B5 Homes",
  description:
    "Premium 3-bedroom vacation rental home nestled in a private forest in Greenville, SC. 35,000 sq ft private woodland, 15 minutes from downtown Greenville and Falls Park. Superhost rated with 5-star reviews. Fully equipped kitchen, screened porch, playground, free Wi-Fi and parking.",
  url: SITE_URL,
  image: [
    `${SITE_URL}/images/hero/front-view.jpg`,
    `${SITE_URL}/images/interior/living-room.jpg`,
    `${SITE_URL}/images/interior/kitchen-dining.jpeg`,
    `${SITE_URL}/images/interior/porch.jpg`,
    `${SITE_URL}/images/rooms/master-bedroom.jpeg`,
    `${SITE_URL}/images/hero/aerial.jpg`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Oak Glen Ct",
    addressLocality: "Greenville",
    addressRegion: "SC",
    postalCode: "29607",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.8526,
    longitude: -82.394,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.93",
    reviewCount: "207",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fully Equipped Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washer/Dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Screened Porch", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dedicated Workspace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Playground", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Central Heating", value: true },
  ],
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 2,
  numberOfRooms: 6,
  occupancy: {
    "@type": "QuantitativeValue",
    value: 6,
    unitText: "guests",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 1600,
    unitCode: "FTK",
    unitText: "sq ft",
  },
  lotSize: {
    "@type": "QuantitativeValue",
    value: 35000,
    unitCode: "FTK",
    unitText: "sq ft",
  },
  petsAllowed: false,
  checkinTime: "15:00",
  checkoutTime: "11:00",
  tourBookingPage: "https://b5homes.com/booking",
  photo: {
    "@type": "ImageGallery",
    url: "https://b5homes.com/gallery",
    name: "B5 Homes Photo Gallery",
    description: "36 photos of our vacation rental property in Greenville, SC",
  },
  containedInPlace: {
    "@type": "City",
    name: "Greenville",
    containedInPlace: {
      "@type": "State",
      name: "South Carolina",
    },
  },
  sameAs: [
    "https://www.airbnb.de/h/b5homes",
    "https://www.vrbo.com/2120967",
  ],
};

// FAQ structured data — helps AI systems answer common questions
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is B5 Homes located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B5 Homes is located at 5 Oak Glen Ct, Greenville, SC 29607, on 35,000 sq ft of private woodland, just 15 minutes from downtown Greenville and Falls Park.",
      },
    },
    {
      "@type": "Question",
      name: "How many bedrooms does B5 Homes have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B5 Homes has 3 bedrooms: a master bedroom with ensuite bathroom, and two guest bedrooms sharing a second bathroom. The home accommodates up to 6 guests.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book B5 Homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book B5 Homes on Airbnb at airbnb.de/h/b5homes or on VRBO at vrbo.com/2120967. You can also contact us at booking@b5homes.com.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities does B5 Homes offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B5 Homes offers free Wi-Fi, free parking, a fully equipped kitchen, washer/dryer, screened porch with woodland views, dedicated workspace, playground with swing set, Smart TV, and central heating/AC.",
      },
    },
    {
      "@type": "Question",
      name: "What is near B5 Homes in Greenville, SC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B5 Homes is 15 minutes from Falls Park and downtown Greenville's Main Street with restaurants and shops. Nearby attractions include the Swamp Rabbit Trail, Paris Mountain State Park (20 min), and Caesars Head State Park (45 min) in the Blue Ridge Mountains.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ClickTracker />
          <Header />
          <main>{children}</main>
          <StickyCTA />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

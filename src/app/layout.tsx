import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClickTracker } from "@/components/click-tracker";

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

const SITE_URL = "https://www.b5homes.com";

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
  "@type": "LodgingBusiness",
  name: "B5 Homes Greenville",
  description:
    "Premium vacation rental home nestled in a private forest in Greenville, SC. 3 bedrooms, 2 bathrooms, 35,000 sq ft private woodland.",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero/front-view.jpg`,
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
    ratingValue: "5",
    reviewCount: "25",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washer/Dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Screened Porch", value: true },
  ],
  numberOfRooms: 3,
  petsAllowed: false,
  checkinTime: "15:00",
  checkoutTime: "11:00",
  sameAs: [
    "https://www.airbnb.de/h/b5homes",
    "https://www.vrbo.com/2120967",
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
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ClickTracker />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const categories = [
  {
    name: "Exterior",
    images: [
      { id: "ext-1", src: "/images/exterior/front.jpg", alt: "Brick ranch home with lush greenery and garage" },
      { id: "ext-2", src: "/images/exterior/front-fall.jpg", alt: "Front view of house in fall colors" },
      { id: "ext-3", src: "/images/hero/aerial.jpg", alt: "Aerial view of property nestled in forest" },
      { id: "ext-4", src: "/images/exterior/playground.jpg", alt: "Backyard with swing set and slide" },
      { id: "ext-5", src: "/images/exterior/backyard.jpeg", alt: "Wooded backyard with mature trees" },
      { id: "ext-6", src: "/images/hero/aerial-2.jpg", alt: "Aerial view of surrounding forest" },
    ],
  },
  {
    name: "Living Room",
    images: [
      { id: "living-1", src: "/images/interior/living-room.jpg", alt: "Living room with sectional sofa and fireplace" },
      { id: "living-2", src: "/images/interior/living-fireplace.jpg", alt: "Brick fireplace with decorative clock" },
      { id: "living-3", src: "/images/interior/workspace.jpg", alt: "Dedicated workspace with rustic desk" },
      { id: "living-4", src: "/images/gallery/console.jpg", alt: "Welcome console table with decor" },
    ],
  },
  {
    name: "Kitchen",
    images: [
      { id: "kitchen-1", src: "/images/interior/kitchen-dining.jpeg", alt: "Open-concept kitchen and dining area" },
      { id: "kitchen-2", src: "/images/interior/kitchen.jpeg", alt: "Kitchen with forest view and granite countertops" },
      { id: "kitchen-3", src: "/images/gallery/coffee-station.jpeg", alt: "Keurig coffee station with pods" },
      { id: "kitchen-4", src: "/images/gallery/kitchen-appliances.jpg", alt: "Knife set, blender, and toaster" },
      { id: "kitchen-5", src: "/images/gallery/dishware.jpg", alt: "Fully stocked dishware cabinet" },
      { id: "kitchen-6", src: "/images/gallery/silverware.jpg", alt: "Organized silverware drawer" },
      { id: "kitchen-7", src: "/images/gallery/cookware.jpg", alt: "Cookware cabinet with pots and pans" },
    ],
  },
  {
    name: "Master Bedroom",
    images: [
      { id: "master-1", src: "/images/rooms/master-bedroom.jpeg", alt: "Master bedroom with queen bed and premium linens" },
      { id: "master-2", src: "/images/gallery/master-dresser.jpeg", alt: "Master bedroom dresser with gold mirror" },
      { id: "master-3", src: "/images/rooms/master-bath.jpeg", alt: "Private ensuite bathroom with walk-in shower" },
      { id: "master-4", src: "/images/gallery/bathroom-vanity.jpg", alt: "Elegant bathroom vanity with dual mirrors" },
    ],
  },
  {
    name: "Guest Bedrooms",
    images: [
      { id: "guest-1", src: "/images/rooms/guest-bedroom.jpeg", alt: "Guest bedroom with queen bed and yellow accents" },
      { id: "guest-2", src: "/images/gallery/guest-bed-detail.jpeg", alt: "Guest bedroom bed detail with decorative pillows" },
      { id: "guest-3", src: "/images/rooms/third-bedroom.jpeg", alt: "Third bedroom with rustic wood bed frame" },
      { id: "guest-4", src: "/images/gallery/third-bed-closet.jpg", alt: "Third bedroom closet with storage" },
      { id: "guest-5", src: "/images/gallery/closet.jpg", alt: "Guest bedroom closet with organizer" },
    ],
  },
  {
    name: "Bathrooms",
    images: [
      { id: "bath-1", src: "/images/rooms/master-bath.jpeg", alt: "Master bathroom with walk-in shower" },
      { id: "bath-2", src: "/images/rooms/shared-bath.jpeg", alt: "Shared bathroom with tub/shower combo" },
      { id: "bath-3", src: "/images/gallery/bathroom-vanity.jpg", alt: "Bathroom vanity with granite countertop" },
    ],
  },
  {
    name: "Porch",
    images: [
      { id: "porch-1", src: "/images/interior/porch.jpg", alt: "Screened porch with wicker furniture and woodland views" },
      { id: "porch-2", src: "/images/interior/porch-seating.jpg", alt: "Porch seating area with navy cushions" },
      { id: "porch-3", src: "/images/interior/porch-full.jpg", alt: "Full porch view with sectional and dining area" },
      { id: "porch-4", src: "/images/gallery/porch-dining.jpg", alt: "Porch dining area with French doors" },
      { id: "porch-5", src: "/images/gallery/wine-porch.jpg", alt: "Wine on the porch with forest view" },
      { id: "porch-6", src: "/images/gallery/welcome-sign.jpg", alt: "Welcome to the Porch sign" },
    ],
  },
  {
    name: "Laundry",
    images: [
      { id: "laundry-1", src: "/images/gallery/laundry.jpg", alt: "Full-size washer and dryer" },
    ],
  },
];

const allImages = categories.flatMap((cat) =>
  cat.images.map((img) => ({ ...img, category: cat.name }))
);

export default function GalleryPage() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory
    ? allImages.filter((img) => img.category === activeCategory)
    : allImages;

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filtered.length) % filtered.length
      );
    }
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Touch swipe support for lightbox
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const minSwipe = 50;
      if (deltaX < -minSwipe) {
        goNext();
      } else if (deltaX > minSwipe) {
        goPrev();
      }
      touchStartX.current = null;
    },
    [goNext, goPrev]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-primary via-primary/90 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.55_0.14_145_/_15%),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Camera className="h-3.5 w-3.5 text-amber-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                Gallery
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Photo Gallery
            </h1>
            <p className="mt-5 text-white/70 leading-relaxed">
              Explore our home through {allImages.length} photos across{" "}
              {categories.length} rooms and spaces
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="sticky top-20 z-30 border-b"
        style={{
          background: theme === "dark" ? "oklch(0.17 0.012 155 / 97%)" : "oklch(0.99 0.003 145 / 97%)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            <Button
              variant={activeCategory === null ? "default" : "ghost"}
              size="sm"
              className={cn(
                "cursor-pointer shrink-0 rounded-full px-5 transition-all duration-200",
                activeCategory === null && "bg-warm text-warm-foreground hover:bg-warm/90"
              )}
              onClick={() => setActiveCategory(null)}
            >
              All ({allImages.length})
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.name}
                variant={activeCategory === cat.name ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "cursor-pointer shrink-0 rounded-full px-5 transition-all duration-200",
                  activeCategory === cat.name && "bg-warm text-warm-foreground hover:bg-warm/90"
                )}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name} ({cat.images.length})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((img, index) => (
              <button
                key={img.id}
                onClick={() => openLightbox(index)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-warm/50 focus:ring-offset-2",
                  index % 5 === 0 ? "aspect-[3/4] sm:row-span-2" : "aspect-[4/3]"
                )}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-medium text-white/90">{img.category}</p>
                </div>
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative mx-6 flex max-h-[85vh] max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-14 right-0 cursor-pointer rounded-full bg-white/10 p-2.5 text-white/70 transition-all hover:bg-white/20 hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute -left-16 cursor-pointer rounded-full bg-white/10 p-3 text-white/70 transition-all hover:bg-white/20 hover:text-white backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full max-w-4xl rounded-2xl overflow-hidden">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute -right-16 cursor-pointer rounded-full bg-white/10 p-3 text-white/70 transition-all hover:bg-white/20 hover:text-white backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm text-white/60 backdrop-blur-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

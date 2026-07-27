"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/lightbox";
import { galleryPreview, site } from "@/lib/data";

const spanPattern = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-2 row-span-2",
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
            Galeri
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Galeri Portofolio Kami
          </h2>
        </div>
        <Link
          href="/portofolio"
          className="text-sm font-medium text-gold hover:underline sm:text-base"
        >
          Lihat semua →
        </Link>
      </div>

      <div className="mt-8 grid grid-flow-dense auto-rows-22.5 grid-cols-4 gap-2 sm:mt-10 sm:auto-rows-30 sm:gap-3 lg:grid-cols-6">
        {galleryPreview.map((post, i) => (
          <button
            key={post.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label="Perbesar foto galeri"
            className={`group relative block cursor-pointer overflow-hidden rounded-lg sm:rounded-xl ${
              spanPattern[i % spanPattern.length]
            }`}
          >
            <Image
              src={post.image}
              alt={`Galeri portofolio ${site.name}`}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={galleryPreview}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onIndexChange={setActiveIndex}
        />
      )}
    </section>
  );
}

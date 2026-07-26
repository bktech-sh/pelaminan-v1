import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio-gallery";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Portofolio — ${site.name}`,
  description: `Galeri hasil dekorasi tenda pelaminan kami di ${site.serviceArea}.`,
};

export default function PortofolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
          Portofolio
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Galeri Hasil Dekorasi Pelaminan
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Setiap acara memiliki cerita berbeda. Berikut sebagian dokumentasi
          dekorasi pelaminan yang telah kami kerjakan.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <PortfolioGallery />
      </div>
    </div>
  );
}

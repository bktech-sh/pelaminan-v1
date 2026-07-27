import Link from "next/link";
import PortfolioCard from "@/components/portfolio-card";
import { portfolioItems } from "@/lib/data";

export default function PortfolioHighlight() {
  const highlights = portfolioItems.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
            Portofolio Pilihan
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Hasil Karya Terbaik Kami
          </h2>
        </div>
        <Link
          href="/portofolio"
          className="text-sm font-medium text-gold hover:underline sm:text-base"
        >
          Lihat semua →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-4">
        {highlights.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

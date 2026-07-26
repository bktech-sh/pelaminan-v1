"use client";

import { useState } from "react";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioCategory, portfolioCategories, portfolioItems } from "@/lib/data";

export default function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory | "semua">("semua");

  const filtered =
    active === "semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActive("semua")}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
            active === "semua"
              ? "bg-gold text-white"
              : "bg-cream text-foreground hover:bg-gold-light/40"
          }`}
        >
          Semua
        </button>
        {portfolioCategories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActive(cat.value)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
              active === cat.value
                ? "bg-gold text-white"
                : "bg-cream text-foreground hover:bg-gold-light/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted">
          Belum ada portofolio untuk kategori ini.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

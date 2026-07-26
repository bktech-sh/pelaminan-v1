import Image from "next/image";
import { PortfolioItem, portfolioCategories } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const categoryLabel =
    portfolioCategories.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-gold sm:left-4 sm:top-4">
          {categoryLabel}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </div>
  );
}

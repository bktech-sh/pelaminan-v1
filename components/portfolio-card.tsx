import Image from "next/image";
import { PortfolioItem, portfolioCategories } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const categoryLabel =
    portfolioCategories.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md sm:rounded-2xl">
      <div className="relative aspect-square w-full overflow-hidden sm:aspect-4/5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-gold sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
          {categoryLabel}
        </span>
      </div>
      <div className="p-2.5 sm:p-5">
        <h3 className="font-display text-sm font-semibold leading-snug text-foreground sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted sm:mt-1.5 sm:line-clamp-none sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

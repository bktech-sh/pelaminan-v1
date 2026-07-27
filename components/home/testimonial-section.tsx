import { testimonials } from "@/lib/data";

export default function TestimonialSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
            Testimoni
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Kata Mereka yang Sudah Mempercayai Kami
          </h2>
        </div>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[85%] shrink-0 snap-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:w-auto sm:shrink sm:p-6"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-gold-light sm:h-7 sm:w-7"
              >
                <path d="M7.17 6C4.86 7.61 3.5 9.9 3.5 12.5c0 2.21 1.34 3.75 3.09 3.75a2.9 2.9 0 0 0 2.91-2.94c0-1.6-1.13-2.83-2.6-2.83-.24 0-.41.02-.55.06.29-1.53 1.6-3.04 3.27-3.9L7.17 6Zm9 0c-2.31 1.61-3.67 3.9-3.67 6.5 0 2.21 1.34 3.75 3.09 3.75a2.9 2.9 0 0 0 2.91-2.94c0-1.6-1.13-2.83-2.6-2.83-.24 0-.41.02-.55.06.29-1.53 1.6-3.04 3.27-3.9L16.17 6Z" />
              </svg>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {t.quote}
              </p>
              <div className="mt-4 flex items-center gap-3 sm:mt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold sm:h-10 sm:w-10 sm:text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

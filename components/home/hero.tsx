import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "@/components/whatsapp-button";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex h-[60dvh] w-full items-center overflow-hidden sm:h-[70dvh]">
      <Image
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        alt="Pelaminan adat Minang dengan dekorasi emas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.15em] text-gold-light uppercase sm:text-sm sm:tracking-[0.2em]">
            Melayani {site.serviceArea}
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            Mewujudkan Pelaminan Impian di Hari Bahagia Anda
          </h1>
          <p className="mt-2.5 max-w-md text-sm leading-snug text-white/80 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Jasa dekorasi tenda pelaminan dan sewa busana pernikahan dengan
            sentuhan elegan, siap mewujudkan resepsi adat maupun modern.
          </p>
          <div className="mt-4 flex flex-row flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
            <WhatsappButton message="Halo, saya ingin bertanya tentang jasa dekorasi pelaminan.">
              Booking / Tanya-tanya
            </WhatsappButton>
            <Link
              href="/portofolio"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-4 py-2 text-xs font-medium tracking-wide text-white transition-colors hover:bg-white hover:text-foreground sm:px-6 sm:py-3 sm:text-base"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-6 w-6 text-white/70"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

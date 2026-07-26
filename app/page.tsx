import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "@/components/portfolio-card";
import WhatsappButton from "@/components/whatsapp-button";
import { portfolioItems, site } from "@/lib/data";

export default function Home() {
  const highlights = portfolioItems.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
              Melayani {site.serviceArea}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Mewujudkan Pelaminan Impian di Hari Bahagia Anda
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Jasa dekorasi tenda pelaminan dan sewa busana pernikahan dengan
              sentuhan elegan, siap mewujudkan resepsi adat maupun modern.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <WhatsappButton message="Halo, saya ingin bertanya tentang jasa dekorasi pelaminan.">
                Booking / Tanya-tanya
              </WhatsappButton>
              <Link
                href="/portofolio"
                className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-white sm:text-base"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-5/4">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
              alt="Pelaminan adat Minang dengan dekorasi emas"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
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

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {highlights.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Wujudkan Resepsi Impian Anda Bersama Kami
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">
            Konsultasikan kebutuhan dekorasi pelaminan dan busana pernikahan Anda
            secara gratis. Tim kami siap membantu dari perencanaan hingga hari-H.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <WhatsappButton message="Halo, saya ingin konsultasi untuk acara pernikahan saya.">
              Konsultasi Gratis via WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </section>
    </div>
  );
}

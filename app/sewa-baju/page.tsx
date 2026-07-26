import type { Metadata } from "next";
import Image from "next/image";
import WhatsappButton from "@/components/whatsapp-button";
import { dressItems, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Sewa Baju Pernikahan — ${site.name}`,
  description: `Pilihan busana pengantin dan adat untuk disewa, melayani ${site.serviceArea}.`,
};

export default function SewaBajuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase sm:text-sm">
          Sewa Baju
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Koleksi Busana Pernikahan
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Tersedia pilihan gaun pengantin, jas, dan busana adat Minang lengkap.
          Hubungi kami untuk cek ketersediaan dan jadwal fitting.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {dressItems.map((dress) => (
          <div
            key={dress.id}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden">
              <Image
                src={dress.image}
                alt={dress.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                {dress.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {dress.description}
              </p>
              <div className="mt-4">
                <WhatsappButton
                  message={`Halo, saya ingin menanyakan ketersediaan sewa "${dress.name}".`}
                  className="w-full sm:w-auto"
                >
                  Tanya Ketersediaan
                </WhatsappButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

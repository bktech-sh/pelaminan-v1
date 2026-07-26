import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gold-light/30 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-foreground">
              Halaman
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-gold">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-gold">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/sewa-baju" className="hover:text-gold">
                  Sewa Baju
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-foreground">
              Kontak
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{site.address}</li>
              <li>Melayani area {site.serviceArea}</li>
              <li>Instagram {site.instagram}</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-gold-light/30 pt-6 text-xs text-muted sm:mt-10 sm:pt-8">
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}

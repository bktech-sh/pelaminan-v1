export const site = {
  name: "Elok Pelaminan",
  tagline: "Dekorasi Pelaminan & Sewa Busana Pernikahan",
  city: "Bukittinggi",
  serviceArea: "Bukittinggi, Padang Panjang, Payakumbuh & sekitarnya",
  whatsappNumber: "6281234567890",
  address: "Jl. Sudirman No. 12, Bukittinggi, Sumatra Barat",
  instagram: "@elokpelaminan",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type PortfolioCategory = "adat" | "modern" | "minimalis" | "outdoor";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
};

export const portfolioCategories: { value: PortfolioCategory; label: string }[] = [
  { value: "adat", label: "Adat Minang" },
  { value: "modern", label: "Modern" },
  { value: "minimalis", label: "Minimalis" },
  { value: "outdoor", label: "Outdoor" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Pelaminan Adat Minang Emas",
    category: "adat",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    description: "Dekorasi pelaminan adat Minangkabau dengan aksen songket dan ornamen emas.",
  },
  {
    id: "p2",
    title: "Pelaminan Modern Gold",
    category: "modern",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
    description: "Konsep modern elegan dengan dominasi warna gold dan putih.",
  },
  {
    id: "p3",
    title: "Tenda Resepsi Outdoor",
    category: "outdoor",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
    description: "Tenda resepsi outdoor dengan pencahayaan hangat dan dekorasi bunga.",
  },
  {
    id: "p4",
    title: "Pelaminan Minimalis Putih",
    category: "minimalis",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    description: "Desain minimalis serba putih dengan sentuhan gold di detail kecil.",
  },
  {
    id: "p5",
    title: "Pelaminan Adat Songket Merah",
    category: "adat",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    description: "Nuansa merah-emas khas adat, dilengkapi ukiran kayu tradisional.",
  },
  {
    id: "p6",
    title: "Garden Party Reception",
    category: "outdoor",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
    description: "Resepsi taman dengan dekorasi bunga segar dan kursi kristal.",
  },
  {
    id: "p7",
    title: "Pelaminan Modern Marble",
    category: "modern",
    image:
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=1200&q=80",
    description: "Backdrop bertekstur marble dipadu lighting gold yang mewah.",
  },
  {
    id: "p8",
    title: "Pelaminan Minimalis Beige",
    category: "minimalis",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    description: "Palet beige dan cream, cocok untuk resepsi intimate.",
  },
];

export type DressItem = {
  id: string;
  name: string;
  category: "pengantin-wanita" | "pengantin-pria" | "adat";
  image: string;
  description: string;
};

export const dressItems: DressItem[] = [
  {
    id: "d1",
    name: "Gaun Pengantin Klasik Ivory",
    category: "pengantin-wanita",
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=900&q=80",
    description: "Gaun berbahan satin dengan detail brokat, potongan A-line klasik.",
  },
  {
    id: "d2",
    name: "Baju Adat Minang Bundo Kanduang",
    category: "adat",
    image:
      "https://images.unsplash.com/photo-1610030181087-c1c7dbb0b8a3?w=900&q=80",
    description: "Busana adat lengkap dengan suntiang dan songket asli Minang.",
  },
  {
    id: "d3",
    name: "Jas Pengantin Pria Modern",
    category: "pengantin-pria",
    image:
      "https://images.unsplash.com/photo-1592878849122-facb97520f9e?w=900&q=80",
    description: "Jas hitam potongan slim fit dengan vest gold, cocok tema modern.",
  },
  {
    id: "d4",
    name: "Gaun Pengantin Mermaid Gold Detail",
    category: "pengantin-wanita",
    image:
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=900&q=80",
    description: "Siluet mermaid dengan bordir gold di bagian dada dan ekor.",
  },
  {
    id: "d5",
    name: "Baju Adat Pengantin Pria Minang",
    category: "adat",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900&q=80",
    description: "Set lengkap deta dan baju sikepan hitam bersulam benang emas.",
  },
  {
    id: "d6",
    name: "Gaun Pengantin Simple Elegant",
    category: "pengantin-wanita",
    image:
      "https://images.unsplash.com/photo-1546804236-6d4d43be7f5c?w=900&q=80",
    description: "Desain sederhana namun elegan, cocok untuk akad nikah.",
  },
];

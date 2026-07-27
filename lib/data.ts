export const site = {
  name: "Elok Pelaminan",
  tagline: "Dekorasi Pelaminan & Sewa Busana Pernikahan",
  city: "Bukittinggi",
  serviceArea: "Bukittinggi, Padang Panjang, Payakumbuh & sekitarnya",
  whatsappNumber: "6281234567890",
  address: "Jl. Sudirman No. 12, Bukittinggi, Sumatra Barat",
  instagram: "@elokpelaminan",
  // TODO: replace with the real production domain once purchased.
  url: "https://elokpelaminan.id",
};

export const galleryPreview: { id: string; image: string }[] = [
  { id: "ig1", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { id: "ig2", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80" },
  { id: "ig3", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80" },
  { id: "ig4", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
  { id: "ig5", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80" },
  { id: "ig6", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80" },
  { id: "ig7", image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80" },
  { id: "ig8", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" },
  { id: "ig9", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
  { id: "ig10", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80" },
  { id: "ig11", image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&q=80" },
  { id: "ig12", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&q=80" },
];

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rani & Fadli",
    city: "Bukittinggi",
    quote:
      "Dekorasi pelaminannya persis seperti yang kami bayangkan, bahkan lebih bagus. Tim datang tepat waktu dan sangat rapi mengerjakannya.",
  },
  {
    id: "t2",
    name: "Sinta & Doni",
    city: "Padang Panjang",
    quote:
      "Sewa baju adatnya lengkap dan kualitasnya bagus. Prosesnya juga gampang, tinggal chat WhatsApp langsung dibantu sampai hari-H.",
  },
  {
    id: "t3",
    name: "Wulan & Reza",
    city: "Payakumbuh",
    quote:
      "Konsepnya elegan banget, tamu-tamu banyak yang muji pelaminannya. Recommended untuk yang mau resepsi berkesan tanpa ribet.",
  },
  {
    id: "t4",
    name: "Dina & Aldi",
    city: "Bukittinggi",
    quote:
      "Pelayanannya ramah dan sabar banget jawabin pertanyaan kami yang detail-detail. Hasil dekorasinya juga rapi sekali.",
  },
  {
    id: "t5",
    name: "Putri & Yoga",
    city: "Padang Panjang",
    quote:
      "Baju adat yang disewa masih bagus dan wangi, ukurannya juga pas setelah fitting. Harga sebanding dengan kualitasnya.",
  },
  {
    id: "t6",
    name: "Mira & Hendra",
    city: "Bukittinggi",
    quote:
      "Tim datang lebih awal buat persiapan, jadi acara nggak molor. Dekorasi pelaminan sesuai referensi yang kami kasih.",
  },
  {
    id: "t7",
    name: "Alya & Fikri",
    city: "Payakumbuh",
    quote:
      "Dari konsultasi sampai hari-H komunikasinya lancar terus. Hasil akhirnya melebihi ekspektasi kami berdua.",
  },
  {
    id: "t8",
    name: "Nadia & Rio",
    city: "Bukittinggi",
    quote:
      "Suka banget sama detail dekorasinya, sangat elegan dan mewah tapi harganya tetap masuk akal untuk budget kami.",
  },
  {
    id: "t9",
    name: "Fitri & Bayu",
    city: "Padang Panjang",
    quote:
      "Pertama kali sewa baju pengantin dan nggak nyesel pilih di sini. Koleksinya lengkap, tinggal pilih sesuai selera.",
  },
  {
    id: "t10",
    name: "Salsa & Iqbal",
    city: "Payakumbuh",
    quote:
      "Pelaminan adat Minangnya dikerjakan dengan sangat teliti, detail songket dan ukirannya rapi. Keluarga besar pada puas.",
  },
  {
    id: "t11",
    name: "Yuni & Randi",
    city: "Bukittinggi",
    quote:
      "Responsif banget di WhatsApp, tanya apa aja langsung dibalas cepat. Prosesnya jadi nggak bikin stres jelang nikah.",
  },
  {
    id: "t12",
    name: "Intan & Dimas",
    city: "Padang Panjang",
    quote:
      "Kombinasi gold dan putihnya cantik banget difoto. Banyak tamu nanya vendor pelaminan kami pakai siapa.",
  },
  {
    id: "t13",
    name: "Della & Arif",
    city: "Bukittinggi",
    quote:
      "Sudah dua kali pakai jasa mereka untuk acara keluarga, selalu memuaskan dan tepat waktu. Recommended sekali.",
  },
];

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
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=80",
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
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=900&q=80",
    description: "Set lengkap deta dan baju sikepan hitam bersulam benang emas.",
  },
  {
    id: "d6",
    name: "Gaun Pengantin Simple Elegant",
    category: "pengantin-wanita",
    image:
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=900&q=80",
    description: "Desain sederhana namun elegan, cocok untuk akad nikah.",
  },
];

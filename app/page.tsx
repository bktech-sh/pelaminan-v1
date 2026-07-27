import Hero from "@/components/home/hero";
import PortfolioHighlight from "@/components/home/portfolio-highlight";
import GallerySection from "@/components/home/gallery-section";
import CtaSection from "@/components/home/cta-section";
import TestimonialSection from "@/components/home/testimonial-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <PortfolioHighlight />
      <GallerySection />
      <CtaSection />
      <TestimonialSection />
    </div>
  );
}

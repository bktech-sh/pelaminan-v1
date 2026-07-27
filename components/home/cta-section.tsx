import WhatsappButton from "@/components/whatsapp-button";

export default function CtaSection() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 sm:py-20 lg:px-8">
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
  );
}

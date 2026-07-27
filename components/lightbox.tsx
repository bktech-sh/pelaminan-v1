"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

type LightboxItem = {
  id: string;
  image: string;
};

type Props = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeri foto"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Tutup galeri"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 sm:h-7 sm:w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Foto sebelumnya"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:left-4"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 sm:h-9 sm:w-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Foto berikutnya"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:right-4"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 sm:h-9 sm:w-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="relative h-[55dvh] w-full max-w-4xl sm:h-[70dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.image}
          alt="Foto galeri diperbesar"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 sm:bottom-6 sm:text-sm">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

import { waLink } from "@/lib/data";

type Props = {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsappButton({
  message,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors cursor-pointer sm:gap-2 sm:px-6 sm:py-3 sm:text-base";
  const styles =
    variant === "solid"
      ? "bg-gold text-white hover:bg-[#a3814f]"
      : "border border-gold text-gold hover:bg-gold hover:text-white";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3.5 w-3.5 sm:h-5 sm:w-5"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.12.11-1.81-.11a16.6 16.6 0 0 1-1.6-.6c-2.83-1.22-4.67-4.08-4.81-4.27-.14-.19-1.15-1.53-1.15-2.92s.72-2.07.98-2.35c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.16-.3.36-.43.49-.14.14-.29.29-.13.57.17.28.74 1.23 1.6 1.99 1.1.98 2.02 1.29 2.31 1.43.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.63.77 1.91.91.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
      </svg>
      {children}
    </a>
  );
}

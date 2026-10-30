import Image from "next/image";

export default function Frame({
  src,
  alt,
  caption,
  ratio = "aspect-[12/5]",
  mono = true,
  priority = false,
  sizes = "(min-width: 768px) 70vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  mono?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-black/5 ${ratio}`}>
        <div className="frame-shift absolute inset-x-0 -top-[10%] h-[120%]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover ${mono ? "mono-img" : ""}`}
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-current/50">
          <span className="h-px w-8 bg-current/30" />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

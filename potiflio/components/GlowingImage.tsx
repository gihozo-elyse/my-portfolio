import Image from "next/image";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "w-28 h-28",
  md: "w-44 h-44",
  lg: "w-64 h-64 md:w-80 md:h-80",
};

interface Props {
  src: string;
  alt: string;
  size?: Size;
  className?: string;
}

const GlowingImage = ({ src, alt, size = "lg", className }: Props) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "rounded-full border-4 border-primary shadow-glow overflow-hidden animate-glow-pulse",
          sizes[size]
        )}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={size === "lg" ? 320 : size === "md" ? 176 : 112}
          height={size === "lg" ? 320 : size === "md" ? 176 : 112}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    </div>
  );
};

export default GlowingImage;


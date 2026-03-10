import { cn } from "@/lib/utils";

interface KompassLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function KompassLogo({ size = "md", showText = true, className }: KompassLogoProps) {
  const iconSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-14 h-14" }[size];
  const svgSize = { sm: 18, md: 22, lg: 28 }[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(iconSize, "gradient-primary rounded-xl flex items-center justify-center shrink-0 shadow-glow")}>
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-foreground"
        >
          {/* Compass needle - north pointer */}
          <path
            d="M12 2L14.5 10H9.5L12 2Z"
            fill="currentColor"
            opacity="1"
          />
          {/* Compass needle - south pointer */}
          <path
            d="M12 22L9.5 14H14.5L12 22Z"
            fill="currentColor"
            opacity="0.4"
          />
          {/* Compass circle */}
          <circle
            cx="12"
            cy="12"
            r="9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          {/* Center dot */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          {/* Cardinal ticks */}
          <line x1="12" y1="3.5" x2="12" y2="5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <line x1="12" y1="19" x2="12" y2="20.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <line x1="3.5" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <line x1="19" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        </svg>
      </div>
      {showText && (
        <div className="overflow-hidden">
          <p className="font-sora font-700 text-sm leading-tight text-foreground">KIIT</p>
          <p className="text-xs text-muted-foreground font-inter">Kompass</p>
        </div>
      )}
    </div>
  );
}

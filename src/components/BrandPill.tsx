import type { ComponentType } from "react";

function hexToRgba(hex: string, alpha = 0.16) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const int = parseInt(full, 16);
    const r = (int >> 16) & 255, g = (int >> 8) & 255, b = int & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BrandPill({
                                      label,
                                      Icon,
                                      color,
                                  }: {
    label: string;
    Icon: ComponentType<{ size?: number }>; // aceita react-icons e lucide
    color: string;
}) {
    const bg = hexToRgba(color, 0.16);
    const dot = hexToRgba(color, 0.28);

    return (
        <span className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium
                     bg-[var(--card)] dark:bg-[var(--card-dark)]
                     border border-black/5 dark:border-white/10 shadow-[var(--shadow)]">
      <span className="inline-grid place-items-center size-7 rounded-lg" style={{ backgroundColor: bg, color }}>
        <Icon size={16} />
      </span>
      <span className="relative pr-2">
        {label}
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 size-1.5 rounded-full" style={{ backgroundColor: dot }} />
      </span>
    </span>
    );
}
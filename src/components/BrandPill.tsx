import React from "react";

type Props = {
    readonly label: string;
    readonly Icon: React.ComponentType<{ size?: number }>;
    readonly color?: string;          // cor do ícone/borda
    readonly tintLabel?: boolean;     // quando true, texto herda a mesma cor
};

export default function BrandPill({label, Icon, color, tintLabel = false}: Props) {
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium
                  bg-[#1f2537] text-white/90 dark:bg-[#1b2232]
                  border border-black/10 dark:border-white/10 shadow-[var(--shadow)]`}
            style={tintLabel ? {color} : undefined}
            title={label}
        >
      <span
          className="inline-grid place-items-center size-7 rounded-lg border"
          style={{
              color,
              borderColor: color ? `${color}40` : "rgba(255,255,255,.12)",
              backgroundColor: color ? `${color}1a` : "transparent",
          }}
      >
        <Icon size={16} />
      </span>
      <span className={tintLabel ? "" : "text-white/90"}>{label}</span>
    </span>
    );
}

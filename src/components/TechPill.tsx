import type {LucideIcon} from "lucide-react";

export default function TechPill({label, Icon,}: { readonly label: string; readonly Icon: LucideIcon; }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium
                     bg-[--card] dark:bg-[--card-dark] border border-black/5 dark:border-white/10
                     shadow-[var(--shadow)]">
      <span className="inline-grid place-items-center size-7 rounded-lg
                       bg-[var(--primary)]/15 text-[var(--primary)]">
        <Icon size={16} />
      </span>
            {label}
    </span>
    );
}

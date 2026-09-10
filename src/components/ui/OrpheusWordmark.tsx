import { cn } from "@/lib/utils";

type Props = {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

const LOGO_SRC = "/brands/orpheus-client-logo.png";

export function OrpheusWordmark({ compact = false, className }: Props) {
  return (
    <img
      src={LOGO_SRC}
      alt="Orpheus"
      className={cn(
        "block w-auto object-contain object-left",
        compact ? "h-7" : "h-9",
        className
      )}
      draggable={false}
    />
  );
}

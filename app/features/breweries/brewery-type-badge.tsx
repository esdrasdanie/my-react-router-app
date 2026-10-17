const breweryTypeLabels: Record<string, string> = {
  micro: "Micro",
  nano: "Nano",
  regional: "Regional",
  brewpub: "Brewpub",
  large: "Grande",
  planning: "Em planejamento",
  bar: "Bar",
  contract: "Contrato",
  proprietor: "Proprietária",
  closed: "Fechada",
};

const breweryTypeStyles: Record<string, string> = {
  micro: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  nano: "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300",
  regional: "bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300",
  brewpub: "bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300",
  large: "bg-stone-200 text-stone-800 dark:bg-stone-500/20 dark:text-stone-200",
  planning: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  bar: "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300",
  contract: "bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300",
  proprietor: "bg-lime-100 text-lime-800 dark:bg-lime-500/15 dark:text-lime-300",
  closed: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300",
};

export function BreweryTypeBadge({ type }: { type: string }) {
  const label = breweryTypeLabels[type] ?? type;
  const styles =
    breweryTypeStyles[type] ??
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${styles}`}
    >
      {label}
    </span>
  );
}

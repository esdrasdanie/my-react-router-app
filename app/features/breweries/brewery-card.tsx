import { NavLink } from "react-router";
import type { Brewery } from "~/services/beer";
import { BreweryTypeBadge } from "./brewery-type-badge";

function InfoRow({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  if (!value) {
    return null;
  }

  return (
    <p className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
      <span className="shrink-0 font-medium text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <span className="min-w-0 truncate">{value}</span>
    </p>
  );
}

export function BreweryCard({ brewery }: { brewery: Brewery }) {
  const address = [brewery.street || brewery.address_1, brewery.city]
    .filter(Boolean)
    .join(", ");
  const region = [brewery.state_province || brewery.state, brewery.country]
    .filter(Boolean)
    .join(" · ");

  return (
    <NavLink
      to={`/cervejarias/${brewery.id}`}
      className={({ isActive }) =>
        [
          "group block h-full rounded-2xl border bg-white p-5 shadow-sm transition duration-200",
          "hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg",
          "dark:bg-slate-900 dark:hover:border-sky-400",
          isActive
            ? "border-sky-500 ring-2 ring-sky-400/70 shadow-lg dark:border-sky-400"
            : "border-slate-200 dark:border-slate-800",
        ].join(" ")
      }
    >
      <article className="flex h-full flex-col gap-4">
        <header className="space-y-3">
          <BreweryTypeBadge type={brewery.brewery_type} />
          <h2 className="text-lg font-semibold leading-snug break-words text-slate-900 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
            {brewery.name}
          </h2>
        </header>

        <div className="space-y-1.5">
          <InfoRow label="Local" value={address} />
          <InfoRow label="Região" value={region} />
          <InfoRow label="CEP" value={brewery.postal_code} />
          <InfoRow label="Telefone" value={brewery.phone} />
          <InfoRow label="Site" value={brewery.website_url} />
        </div>

        <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-lg bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:group-hover:bg-sky-400">
          Ver detalhes
          <span aria-hidden="true">→</span>
        </span>
      </article>
    </NavLink>
  );
}

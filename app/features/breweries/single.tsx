import { useLoaderData } from "react-router";
import type { Brewery } from "~/services/beer";
import { BreweryTypeBadge } from "./brewery-type-badge";

type Info = {
    label: string;
    value?: string | null;
};

function InfoItem({ label, value }: Info) {
    if (!value) {
        return null;
    }

    return (
        <div className="space-y-1">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {label}
            </dt>
            <dd className="break-words text-sm text-slate-800 dark:text-slate-200">
                {value}
            </dd>
        </div>
    );
}

export function SingleBrewery() {
    const brewery = useLoaderData() as Brewery;

    const fields: Info[] = [
        { label: "Endereço", value: brewery.address_1 },
        { label: "Endereço 2", value: brewery.address_2 },
        { label: "Endereço 3", value: brewery.address_3 },
        { label: "Rua", value: brewery.street },
        { label: "Cidade", value: brewery.city },
        { label: "Estado/Província", value: brewery.state_province },
        { label: "Estado", value: brewery.state },
        { label: "CEP", value: brewery.postal_code },
        { label: "País", value: brewery.country },
        { label: "Telefone", value: brewery.phone },
    ];

    const seen = new Set<string>();
    const details = fields.filter(({ value }) => {
        if (!value || seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });

    return (
        <article className="space-y-6">
            <header className="space-y-2">
                <BreweryTypeBadge type={brewery.brewery_type} />
                <h2 className="text-xl font-bold break-words text-slate-900 dark:text-white">
                    {brewery.name}
                </h2>
            </header>

            {details.length > 0 ? (
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {details.map((detail) => (
                        <InfoItem key={detail.label} {...detail} />
                    ))}
                </dl>
            ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Nenhuma informação adicional disponível para esta cervejaria.
                </p>
            )}

            {brewery.website_url && (
                <a
                    href={brewery.website_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                    Visitar site
                    <span aria-hidden="true">↗</span>
                </a>
            )}
        </article>
    );
}

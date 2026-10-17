import { Outlet, useLoaderData, useParams } from "react-router";
import type { Brewery } from "~/services/beer";
import { BreweryCard } from "./brewery-card";

export function BreweriesList() {
    const loaderData = useLoaderData<{ breweries: Brewery[] }>();
    const { id } = useParams();

    return (
        <section className="mx-auto max-w-7xl px-4 py-8">
            <header className="mb-8 space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
                    Catálogo
                </p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Cervejarias
                </h1>
                <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                    Explore cervejarias ao redor do mundo. Escolha um card para ver os
                    detalhes completos ao lado.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-2">
                    {loaderData.breweries.map((brewery) => (
                        <li key={brewery.id}>
                            <BreweryCard brewery={brewery} />
                        </li>
                    ))}
                </ul>

                <aside className="h-fit overflow-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:sticky xl:top-20 dark:border-slate-800 dark:bg-slate-900">
                    {id ? (
                        <Outlet />
                    ) : (
                        <div className="space-y-2 py-10 text-center">
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                Nenhuma cervejaria selecionada
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Clique em um card para abrir as informações completas.
                            </p>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}

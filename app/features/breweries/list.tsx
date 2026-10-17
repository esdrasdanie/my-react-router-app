import { Link, Outlet, useLoaderData } from "react-router";
import type { Brewery } from "~/services/beer";

export function BreweriesList() {
    const loaderData = useLoaderData<{ breweries: Brewery[] }>()

    return (
        <section className='grid grid-cols-2 gap-6'>
            <ul className='space-y-6'>
                {loaderData.breweries.map((brewery) => (
                    <li key={brewery.id} className='border-b'>
                        <Link to={`/cervejarias/${brewery.id}`}>{brewery.name}</Link>
                    </li>
                ))}
            </ul>
            <div className='bg-slate-800 p-6'>
                <Outlet />
            </div>
        </section>
    )
}
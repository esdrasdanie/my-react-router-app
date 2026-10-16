import { Link, Outlet } from 'react-router';
import { getBreweries } from '../services/beer'
import type { Route } from './+types/cervejarias'

export async function loader() {
  return {
    title: 'RR7',
    breweries: await getBreweries(),
  }
}

export function HydrateFallback() {
  return <h3>Loading...</h3>
}

export default function ({ loaderData }: Route.ComponentProps) {
  return <>
  <h2>{loaderData.title}</h2>
<section className='grid grid-cols-2 gap-6'>
  <ul className='space-y-6'>
    {loaderData.breweries.map((brewery) => (
      <li key={brewery.id} className='border-b'>
        <Link prefetch='intent' to={`/cervejarias/${brewery.id}`}>{brewery.name}</Link>
      </li>
    ))}
  </ul>
  <div className='bg-slate-800 p-6'>
    <Outlet />
  </div>
</section>
  </>
}

import { getBrewery, type Brewery } from "~/services/beer";
import type { Route } from "./+types/cervejaria";
import { ErrorBoundary } from "~/root";

export async function loader({ params }: Route.LoaderArgs) {
    return await getBrewery(params.id)
}

export default function ({ loaderData }: Route.ComponentProps) {
    return <pre>{JSON.stringify(loaderData, null, 2)}</pre>
}

export { ErrorBoundary }
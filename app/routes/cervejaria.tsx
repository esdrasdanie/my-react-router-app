import { getBrewery, type Brewery } from "~/services/beer";
import type { Route } from "./+types/cervejaria";
import { ErrorBoundary } from "~/root";
import { SingleBrewery } from "~/features/breweries/single";

export async function loader({ params }: Route.LoaderArgs) {
    return await getBrewery(params.id)
}

export default SingleBrewery

export { ErrorBoundary }
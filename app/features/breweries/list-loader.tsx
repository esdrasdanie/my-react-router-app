import { getBreweries } from "~/services/beer";

export async function loader() {
    return {
        breweries: await getBreweries(),
    }
}
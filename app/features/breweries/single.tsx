import { useLoaderData } from "react-router"

export function SingleBrewery() {

    const loaderData = useLoaderData()

    return <pre>{JSON.stringify(loaderData, null, 2)}</pre>
}
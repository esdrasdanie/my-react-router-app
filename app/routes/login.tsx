import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/login";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();

    console.log({ email: formData.get("email"), password: formData.get("password") })

    //consultar meu DB ou API externa para login

    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    return redirect("/loaders")
}

export default function Login({actionData}: Route.ComponentProps) {
    console.log(actionData)

    const fetcher = useFetcher()
    const busy = fetcher.state !== 'idle'

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-bold text-white">Login</h2>

                <fetcher.Form className="mt-8 space-y-6" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <button
                        disabled={busy}
                        type="submit"
                        className=" disabled:opacity-25 disabled:bg-gray-700 w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Entrar
                    </button>
                </fetcher.Form>
            </div>
        </div>
    );
}
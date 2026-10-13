import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/login";
import { getFormProps, getInputProps, useForm } from "@conform-to/react"
import z, { json } from "zod";
import { parseWithZod } from "@conform-to/zod/v4";

const schema = z.object({
    email: z.string({ required_error: "O e-mail é obrigatório" }).email("Forneça um e-mail válido"),
    password: z.string({ required_error: "A senha é obrigatória" }).min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();

    const submission = parseWithZod(formData, {schema})

    if (submission.status !== "success") {
        return submission.reply()
    }

    console.log({ email: formData.get("email"), password: formData.get("password") })

    //consultar meu DB ou API externa para login

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return redirect("/breweries")
}

export default function Login({ actionData }: Route.ComponentProps) {
    console.log(actionData)

    const fetcher = useFetcher()
    const busy = fetcher.state !== 'idle'

    const [form, fields] = useForm({
        lastResult: actionData,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema })
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-bold text-white">Login</h2>

                <fetcher.Form {...getFormProps(form)} className="mt-8 space-y-6" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                            <input
                                {...getInputProps(fields.email, { type: "email" })}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                            {fields.email.errors ? (
                                <div className="text-red-600">{fields.email.errors}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
                            <input
                                {...getInputProps(fields.password, { type: "password" })}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                            {fields.password.errors ? (
                                <div className="text-red-600">{fields.password.errors}</div>
                            ) : null}
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
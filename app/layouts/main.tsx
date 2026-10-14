import { NavLink, Outlet } from "react-router";

export default function () {
    return (
        <main>
            <ul className="flex gap-6 bg-slate-900 text-white p-4 fixed left-0 right-0 top-0">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/cervejarias'>Cervejarias</NavLink>
                </li>
            </ul>
            <Outlet />
        </main>
    )
}
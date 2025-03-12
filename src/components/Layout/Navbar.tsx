"use client";

import { mainNavigation } from "@/helpers/navigation/mainNavigation";
import { Button } from "@mui/material";
import { LinkNavbar } from "./styled";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="flex items-center gap-3">
            {mainNavigation.map(nav => (
                <LinkNavbar
                    key={nav.name}
                    className="text-white"
                    onClick={() => router.push(nav.path)}
                >
                    {nav.name}
                </LinkNavbar>
            ))}
        </nav>
    );
}
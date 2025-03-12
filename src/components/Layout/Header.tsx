"use client";

import { PermIdentity } from "@mui/icons-material"
import { CustomButton } from "../Custom/Button"
import { Logo } from "../Logo"
import { Navbar } from "./Navbar"
import { useRouter } from "next/navigation"

export const Header = () => {
    const router = useRouter();

    return (
        <header className="container mx-auto h-20 flex items-center justify-between">
            <Logo width={60} height={60} />
            <div className="flex items-center justify-between gap-20">
                <Navbar />
                <div className="flex gap-5">
                    <CustomButton
                        value="Login"
                        Icon={PermIdentity}
                        color="secondary"
                        onClick={() => router.push('/login')}
                    />
                    <CustomButton
                        value="Registrar"
                        Icon={PermIdentity}
                        color="success"
                        onClick={() => router.push('/register')}
                    />
                </div>
            </div>
        </header>
    )
}
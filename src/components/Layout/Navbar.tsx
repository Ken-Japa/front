"use client";

import { mainNavigation } from "@/helpers/navigation/mainNavigation";
import { motion } from "framer-motion";
import { LinkNavbar } from "./styled";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
        >
            {mainNavigation.map(nav => (
                <motion.div key={nav.name} variants={item}>
                    <LinkNavbar
                        className={`
                            text-white/80 hover:text-white transition-colors duration-200
                            ${pathname === nav.path ? 'text-white font-medium' : ''}
                            ${nav.highlight ? 'text-[#0D95F9] hover:text-[#0D95F9]/80' : ''}
                        `}
                        onClick={() => router.push(nav.path)}
                    >
                        {nav.name}
                    </LinkNavbar>
                </motion.div>
            ))}
        </motion.nav>
    );
}
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
                <motion.div key={nav.name} variants={item} className="relative">
                    <LinkNavbar
                        className={`
                            relative z-10 px-3 py-2 rounded-md transition-all duration-200
                            ${pathname === nav.path 
                                ? 'text-white font-medium bg-white/10' 
                                : 'text-white/70 hover:text-white hover:bg-white/5'}
                            ${nav.highlight ? 'text-[#0D95F9] hover:text-[#0D95F9]' : ''}
                        `}
                        onClick={() => router.push(nav.path)}
                    >
                        {nav.name}
                        {pathname === nav.path && (
                            <motion.span
                                layoutId="activeNav"
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0D95F9]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </LinkNavbar>
                </motion.div>
            ))}
        </motion.nav>
    );
}
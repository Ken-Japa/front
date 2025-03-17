"use client";
import { Typography, Box } from "@mui/material";
import LinkNext from "next/link";
import { usePathname } from 'next/navigation';
import { publicLinks, authLinks } from "../../../constants/Footer";
import { NavigationGrid } from "../styled";
import { useSession } from "next-auth/react";

export const FooterNavigation = () => {
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <Box className="flex flex-col gap-8">
            <Typography variant="h6" className="font-bold text-white">
                Links
            </Typography>
            <NavigationGrid>

                {session ?
                    authLinks.map((link) => (
                        <LinkNext
                            key={link.href}
                            href={link.href}
                            className={`
                            relative transition-colors duration-200
                            ${pathname === link.href
                                    ? 'text-[#0D95F9] font-medium'
                                    : 'text-white/80 hover:text-white'
                                }
                        `}
                        >
                            {link.label}
                        </LinkNext>
                    ))
                    :
                    publicLinks.map((link) => (
                        <LinkNext
                            key={link.href}
                            href={link.href}
                            className={`
                            relative transition-colors duration-200
                            ${pathname === link.href
                                    ? 'text-[#0D95F9] font-medium'
                                    : 'text-white/80 hover:text-white'
                                }
                        `}
                        >
                            {link.label}
                        </LinkNext>
                    ))
                }

            </NavigationGrid>
        </Box>
    );
};
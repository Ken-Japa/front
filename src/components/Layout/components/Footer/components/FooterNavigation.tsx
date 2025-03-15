import { Typography, Box } from "@mui/material";
import LinkNext from "next/link";
import { usePathname } from 'next/navigation';
import { navigationLinks } from "../../../constants/footer";
import { NavigationGrid } from "../styled";

export const FooterNavigation = () => {
    const pathname = usePathname();

    return (
        <Box className="flex flex-col gap-8">
            <Typography variant="h6" className="font-bold text-white">
                Links
            </Typography>
            <NavigationGrid>
                {navigationLinks.map((link) => (
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
                ))}
            </NavigationGrid>
        </Box>
    );
};
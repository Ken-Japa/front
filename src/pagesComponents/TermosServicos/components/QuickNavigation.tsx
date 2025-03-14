import { Box, Typography } from "@mui/material";
import { SECTIONS } from "../constants/sections";

interface QuickNavigationProps {
    onSectionClick: (sectionId: string) => void;
}

export const QuickNavigation = ({ onSectionClick }: QuickNavigationProps) => (
    <>
        <Typography variant="h6" className="text-[#0D95F9] mb-4 text-center">
            Navegação Rápida
        </Typography>
        <Box className="bg-[#ffffff0a] p-6 rounded-lg mb-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {SECTIONS.map((section) => (
                    <a
                        key={section.id}
                        onClick={() => onSectionClick(section.id)}
                        className="text-white/85 hover:text-[#0D95F9] transition-colors cursor-pointer"
                    >
                        {section.title}
                    </a>
                ))}
            </div>
        </Box>
    </>
);
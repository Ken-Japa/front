import { Box, Typography, Skeleton } from "@mui/material";
import { PRIVACY_SECTIONS } from "../constants/sections";

interface QuickNavigationProps {
    onSectionClick: (sectionId: string) => void;
    isLoading?: boolean;
}

export const QuickNavigation = ({ onSectionClick, isLoading }: QuickNavigationProps) => {
    if (isLoading) {
        return (
            <Box className="bg-[#ffffff10] p-6 rounded-lg mb-12 backdrop-blur-sm">
                <Skeleton variant="text" width={200} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {Array(8).fill(0).map((_, index) => (
                        <Skeleton 
                            key={index} 
                            variant="text" 
                            width="100%" 
                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} 
                        />
                    ))}
                </div>
            </Box>
        );
    }
    return (
        <>
            <Typography variant="h6" className="text-[#0D95F9] mb-4 text-center">
                Navegação Rápida
            </Typography>
            <Box className="bg-[#ffffff10] p-6 rounded-lg mb-12 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PRIVACY_SECTIONS.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                onSectionClick(section.id);
                            }}
                            className="text-white/85 hover:text-[#0D95F9] transition-colors cursor-pointer"
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </Box>
        </>
    );
};
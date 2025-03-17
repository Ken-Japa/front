import { Skeleton } from "@mui/material";
import { PRIVACY_SECTIONS } from "../../constants/sections";
import { NavigationContainer, NavigationTitle } from "./styled";

interface QuickNavigationProps {
    onSectionClick: (sectionId: string) => void;
    isLoading?: boolean;
}

export const QuickNavigation = ({ onSectionClick, isLoading }: QuickNavigationProps) => {
    if (isLoading) {
        return (
            <NavigationContainer>
                <Skeleton variant="text" width={200} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                <div className="navigation-grid">
                    {Array(8).fill(0).map((_, index) => (
                        <Skeleton 
                            key={index} 
                            variant="text" 
                            width="100%" 
                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} 
                        />
                    ))}
                </div>
            </NavigationContainer>
        );
    }

    return (
        <>
            <NavigationTitle variant="h6">
                Navegação Rápida
            </NavigationTitle>
            <NavigationContainer>
                <div className="navigation-grid">
                    {PRIVACY_SECTIONS.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                onSectionClick(section.id);
                            }}
                            className="nav-link"
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </NavigationContainer>
        </>
    );
};
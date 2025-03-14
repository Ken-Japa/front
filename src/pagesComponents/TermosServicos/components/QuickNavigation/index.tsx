import { Typography } from "@mui/material";
import { SECTIONS } from "../../constants/sections";
import { NavigationContainer } from "./styled";

interface QuickNavigationProps {
    onSectionClick: (sectionId: string) => void;
}

export const QuickNavigation = ({ onSectionClick }: QuickNavigationProps) => (
    <NavigationContainer>
        <Typography variant="h5" className="navigation-title">
            Navegação Rápida
        </Typography>
        <div className="navigation-content">
            <div className="navigation-grid">
                {SECTIONS.map((section) => (
                    <Typography
                        key={section.id}
                        className="navigation-link"
                        onClick={() => onSectionClick(section.id)}
                    >
                        {section.title}
                    </Typography>
                ))}
            </div>
        </div>
    </NavigationContainer>
);
import { type FC } from 'react';

import { Typography } from "@mui/material";

import { CustomButton } from "@/components/Custom/Button";

import { CallToActionSkeleton } from "./CallToActionSkeleton";
import { CallToActionContainer, ContentStack } from "./styled";

interface CallToActionProps {
    isLoading?: boolean;
}

const BUTTON_STYLES = {
    customColor: "#FFD700",
    textColor: "#000000",
    className: "mt-4 max-w-xs mx-auto"
} as const;

export const CallToAction: FC<CallToActionProps> = ({ isLoading }) => {
    if (isLoading) {
        return <CallToActionSkeleton />;
    }

    return (
        <CallToActionContainer>
            <ContentStack spacing={3} alignItems="center">
                <Typography variant="body1" className="text-white/90">
                    Quer participar deste grupo seleto?
                </Typography>
                <Typography variant="h6" className="text-white">
                    Assine nosso plano Premium e ajude-nos a continuar inovando!
                </Typography>
                <CustomButton
                    value="Fazer parte"
                    {...BUTTON_STYLES}
                />
            </ContentStack>
        </CallToActionContainer>
    );
};
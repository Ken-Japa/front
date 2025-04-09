import { type FC } from 'react';

import { Typography } from "@mui/material";

import { CustomButton } from "@/components/Custom/Button";

import { CallToActionSkeleton } from "./CallToActionSkeleton";
import { CallToActionContainer, ContentStack } from "./styled";
import { visitorColors } from "@/theme/palette/visitor";

interface CallToActionProps {
    isLoading?: boolean;
}

const BUTTON_STYLES = {
    customColor: visitorColors.gold,
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
                <Typography variant="h3" className="cta-question">
                    Quer participar deste grupo seleto?
                </Typography>
                <Typography variant="h5" className="cta-message">
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

export default CallToAction;
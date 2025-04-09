import { type FC } from 'react';
import { Stack, Typography, TextField } from "@mui/material";
import { CustomButton } from "@/components/Custom/Button";
import { NewsletterContainer } from "./styled";
import { NewsletterSkeleton } from "./NewsletterSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

const TEXT_FIELD_STYLES = {
    "& .MuiOutlinedInput-root": {
        color: visitorColors.text,
        backgroundColor: visitorColors.backgroundLight,
    }
} as const;

const BUTTON_PROPS = {
    value: "Cadastrar",
    customColor: visitorColors.buttonPrimary,
    textColor: visitorColors.text,
    sx: { minWidth: { xs: '100%', sm: '120px' } }
} as const;

interface NewsletterProps {
    isLoading?: boolean;
}

export const Newsletter: FC<NewsletterProps> = ({ isLoading }) => {
    if (isLoading) {
        return <NewsletterSkeleton />;
    }

    return (
        <NewsletterContainer>
            <Stack spacing={3} alignItems="center">
                <Typography variant="h4" color={visitorColors.text}>
                    Quer ficar por dentro das novidades?
                </Typography>
                <Typography color={visitorColors.textSecondary} maxWidth="600px">
                    Cadastre-se para receber atualizações exclusivas e descontos especiais
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" maxWidth="500px">
                    <TextField
                        fullWidth
                        placeholder="Seu melhor email"
                        sx={TEXT_FIELD_STYLES}
                    />
                    <CustomButton {...BUTTON_PROPS} />
                </Stack>
            </Stack>
        </NewsletterContainer>
    );
};
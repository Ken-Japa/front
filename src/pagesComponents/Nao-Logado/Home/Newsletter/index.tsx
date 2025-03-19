import { type FC } from 'react';

import { Stack, Typography, TextField } from "@mui/material";

import { CustomButton } from "@/components/Custom/Button";

import { NewsletterContainer } from "./styled";
import { NewsletterSkeleton } from "./NewsletterSkeleton";

const TEXT_FIELD_STYLES = {
    "& .MuiOutlinedInput-root": {
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    }
} as const;

const BUTTON_PROPS = {
    value: "Cadastrar",
    customColor: "#0056b3",
    textColor: "#FFFFFF",
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
                <Typography variant="h4" color="white">
                    Quer ficar por dentro das novidades?
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)" maxWidth="600px">
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
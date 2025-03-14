import { Stack, Typography, TextField, Button } from "@mui/material";
import { NewsletterContainer } from "./styled";

export const Newsletter = () => (
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
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="info"
                    sx={{ minWidth: { xs: '100%', sm: '120px' } }}
                >
                    Cadastrar
                </Button>
            </Stack>
        </Stack>
    </NewsletterContainer>
);
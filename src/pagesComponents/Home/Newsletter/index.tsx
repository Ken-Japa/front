import { Container, Stack, Typography } from "@mui/material";
import { NewsletterSection, NewsletterForm } from "./styled";

export const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
        }

        // TODO: Implement email submission logic
        console.log('Email submitted:', email);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <NewsletterSection>
            <Container maxWidth="xl">
                <Stack spacing={4} alignItems="center">
                    <Typography variant="h4" className="text-white text-center font-bold">
                        Quer ficar por dentro das novidades?
                    </Typography>
                    <Typography variant="h6" className="text-white/90 text-center max-w-2xl">
                        Cadastre-se para receber atualizações exclusivas e descontos especiais
                    </Typography>
                    <NewsletterForm onSubmit={handleSubmit}>
                        <Stack direction="row" spacing={2}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu melhor email"
                                required
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </Stack>
                    </NewsletterForm>
                </Stack>
            </Container>
        </NewsletterSection>
    );
};
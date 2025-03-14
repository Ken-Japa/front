import { Stack, Typography, Button } from "@mui/material";
import Link from 'next/link';
import { CTAContainer } from "./styled";

export const CTASection = () => (
    <CTAContainer>
        <Stack spacing={3} alignItems="center">
            <Typography variant="h4" className="cta-title">
                Pronto para transformar seus investimentos?
            </Typography>
            <Typography className="cta-description">
                Comece agora a usar ferramentas avançadas para tomar decisões mais precisas em seus investimentos.
            </Typography>
            <Button
                variant="contained"
                color="info"
                size="large"
                href="/register"
                className="mt-4 px-8 py-3"
            >
                Começar Gratuitamente
            </Button>
            <Link href="/precos" className="cta-link">
                <Typography>
                    Veja qual plano é o melhor para você
                </Typography>
            </Link>
        </Stack>
    </CTAContainer>
);
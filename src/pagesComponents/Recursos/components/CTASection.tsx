import { Stack, Typography, Button } from "@mui/material";
import Link from 'next/link';

export const CTASection = () => (
    <div className="w-full py-12 bg-[#0D95F9] bg-opacity-10 rounded-lg">
        <Stack spacing={3} alignItems="center">
            <Typography variant="h4" className="text-white text-center">
                Pronto para transformar seus investimentos?
            </Typography>
            <Typography variant="body1" className="text-white/70 text-center max-w-2xl">
                Comece agora mesmo a usar nossas ferramentas avançadas e tome decisões mais precisas no mercado financeiro.
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
            <Link
                href="/precos"
                className="text-[#0D95F9] hover:text-[#0D95F9]/95 underline"
            >
                <Typography variant="body1" className="text-center max-w-2xl">
                    Veja qual plano é o melhor para você
                </Typography>
            </Link>
        </Stack>
    </div>
);
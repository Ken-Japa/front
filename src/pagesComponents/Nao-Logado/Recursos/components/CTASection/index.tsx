import { Stack, Typography } from "@mui/material";
import Link from 'next/link';
import { CTAContainer } from "./styled";
import { CustomButton } from "@/components/Custom/Button";
import { CTASkeleton } from "./CTASkeleton";

interface CTASkeletonProps {
    isLoading?: boolean;
}

export const CTASection = ({ isLoading }: CTASkeletonProps) => {
    if (isLoading) {
        return <CTASkeleton />;
    }
    return (
        <CTAContainer>
            <Stack spacing={3} alignItems="center">
                <Typography variant="h4" className="cta-title text-white">
                    Pronto para transformar seus investimentos?
                </Typography>
                <Typography className="cta-description" color="rgba(255, 255, 255, 0.8)">
                    Comece agora a usar ferramentas avançadas para tomar decisões mais precisas em seus investimentos.
                </Typography>
                <Link href="/register">
                    <CustomButton
                        value="Começar Gratuitamente"
                        customColor="#0056b3"
                        textColor="#FFFFFF"
                        size="large"
                        className="mt-4"
                        padding="24px 32px"
                    />
                </Link>
                <Link href="/visitante/precos" className="text-[#0D95F9] hover:text-[#0D95F9]/95 underline">
                    <Typography >
                        Veja qual plano é o melhor para você
                    </Typography>
                </Link>
            </Stack>
        </CTAContainer>
    );
};
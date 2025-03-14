import { Stack, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const Header = () => (
    <Stack spacing={3} alignItems="center">
        <MatrixRainText
            text="Recursos Avançados"
            className="text-white text-4xl font-bold"
        />
        <Typography
            variant="h6"
            className="text-white/90 text-center max-w-3xl"
        >
            Descubra como nossa plataforma pode transformar sua experiência de investimento com ferramentas poderosas e insights valiosos
        </Typography>
    </Stack>
);
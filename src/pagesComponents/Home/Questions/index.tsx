import { CustomAccordion } from "@/components/Custom/Accordion";
import { questions } from "@/helpers/questions";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

export const Questions = () => {
    return (
        <Stack direction="column" alignItems="center" className="py-10" spacing={4}>
            <h2 className="text-3xl text-infoMain mb-8">Perguntas mais frequentes</h2>
            <Typography variant="body1" className="text-white/60">
                Segurança, Resultados e Tecnologia - Suas Dúvidas Decifradas
            </Typography>
            <Stack maxWidth="800px" width="100%">
                {questions.map((item, index) => (
                    <CustomAccordion key={index} body={item.body} title={item.title} />
                ))}
            </Stack>
        </Stack>
    );
}
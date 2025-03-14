import { Stack, Button } from "@mui/material";
import { EMBAIXADOR_BENEFICIOS } from "../constants/embaixador";

export const EmbaixadorSection = () => (
    <section className="py-16 px-4 bg-black/30">
        <Stack alignItems="center" spacing={6} maxWidth="900px" margin="0 auto">
            <h2 className="text-3xl text-[#FF4081] mb-4">Seja um Embaixador</h2>
            <p className="text-white text-center mb-8 max-w-5xl">
                Torne-se um embaixador da Auge Invest e faça parte do nosso crescimento.<br /><br />
                Como embaixador, você terá acesso vitalício à plataforma após atingirmos 5.000 usuários,
                além de benefícios exclusivos.
            </p>
            <div className="text-white p-8 bg-black/50 rounded-lg border border-[#0D95F9] w-full max-w-md">
                <h3 className="text-2xl mb-4 text-center">Plano Embaixador</h3>
                <p className="text-4xl font-bold mb-2 text-center">R$100</p>
                <p className="opacity-75 mb-6 text-center">/mês</p>
                <ul className="space-y-4 mb-8 mt-2">
                    {EMBAIXADOR_BENEFICIOS.map((beneficio, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-[#0D95F9] mr-2">›</span>
                            {beneficio}
                        </li>
                    ))}
                </ul>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                >
                    Tornar-se Embaixador
                </Button>
            </div>
        </Stack>
    </section>
);
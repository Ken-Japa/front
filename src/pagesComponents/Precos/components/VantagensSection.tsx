import { Stack } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const VantagensSection = () => (
    <section className="py-16 px-4">
        <Stack alignItems="center" spacing={6} maxWidth="1200px" margin="0 auto">
            <MatrixRainText
                text="Por que escolher a Auge Invest?"
                className="text-[#FF4081] text-4xl font-bold mb-8"
            />
            <div className="grid md:grid-cols-3 gap-8 w-full">
                <div className="text-white text-center p-6 bg-black/60 rounded-lg">
                    <h3 className="text-xl mb-4 text-[#0D95F9]">Análise Avançada</h3>
                    <p className="text-white/95">Ferramentas profissionais para análise de mercado e tomada de decisão</p>
                </div>
                <div className="text-white text-center p-6 bg-black/60 rounded-lg">
                    <h3 className="text-xl mb-4 text-[#0D95F9]">Dados em Tempo Real</h3>
                    <p>Acompanhe suas posições e o mercado com atualizações constantes</p>
                </div>
                <div className="text-white text-center p-6 bg-black/60 rounded-lg">
                    <h3 className="text-xl mb-4 text-[#0D95F9]">Suporte Dedicado</h3>
                    <p>Equipe especializada para ajudar em suas dúvidas</p>
                </div>
            </div>
        </Stack>
    </section>
);
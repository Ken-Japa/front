import { Stack, Button } from "@mui/material";
import { PLANOS } from "../constants/planos";

export const PlanosSection = () => (
    <section className="py-16 px-4">
        <Stack alignItems="center" spacing={6} maxWidth="1200px" margin="0 auto">
            <h2 className="text-3xl text-[#FF4081] mb-8">Escolha seu Plano</h2>
            <div className="grid md:grid-cols-3 gap-8 w-full">
                {PLANOS.map((plano) => (
                    <div key={plano.tipo} className="text-white p-8 bg-black/60 rounded-lg border border-[#0D95F9]">
                        <h3 className="text-2xl mb-4">{plano.tipo}</h3>
                        <p className="text-4xl font-bold mb-2">{plano.preco}</p>
                        <p className="opacity-75 mb-2">{plano.periodo}</p>
                        {plano.desconto && (
                            <p className="text-[#00E676] mb-6">{plano.desconto}</p>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            {plano.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </Stack>
    </section>
);
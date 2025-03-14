import HistoryIcon from '@mui/icons-material/Timeline';

export const HistoriaSection = () => (
    <section className="max-w-5xl text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center gap-3 mb-4">
            <HistoryIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <h2 className="text-2xl text-[#FF4081]">Nossa História: A Revolução dos Dados</h2>
        </div>
        <p className="mb-8 text-white/80">
            Forjando o Futuro do Investimento Inteligente
        </p>
        <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm hover:bg-[#ffffff12] transition-duration-300">
            <p className="mb-8 text-white">
                Começamos em 2023 não como mais uma fintech, mas como um movimento. <br /><br />
                A Auge Capital nasceu da necessidade de democratizar o acesso a ferramentas avançadas de análise de investimentos normalmente disponíveis em grandes fundos.<br /><br />
                Nossa equipe de especialistas em tecnologia e mercado financeiro se uniu com um objetivo comum: transformar dados complexos em insights amigáveis para investidores pessoas físicas a um preço justo.
            </p>
        </div>
    </section>
);
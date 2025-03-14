import HandshakeIcon from '@mui/icons-material/Handshake';

export const CompromissoSection = () => (
    <section className="max-w-5xl text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center gap-3 mb-4">
            <HandshakeIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <h2 className="text-2xl text-[#FF4081]">Nosso Compromisso</h2>
        </div>
        <p className="mb-8 text-white/80">
            Não Vendemos Ferramentas. Entregamos Resultados.
        </p>
        <div className="bg-[#ffffff10] p-8 rounded-lg backdrop-blur-sm hover:bg-[#ffffff18]">
            <p className="mb-8 text-white">
                Estamos comprometidos com o crescimento contínuo e a evolução de nossa plataforma. <br /><br />
                Trabalhamos diariamente para trazer novas funcionalidades e melhorias, sempre ouvindo
                o feedback de nossa comunidade.
            </p>
        </div>
    </section>
);
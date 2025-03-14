import GroupsIcon from '@mui/icons-material/Groups';

export const EquipeSection = () => (
    <section className="max-w-5xl text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center gap-3 mb-4">
            <GroupsIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <h2 className="text-2xl text-[#FF4081]">Nossa Equipe</h2>
        </div>
        <p className="mb-8 text-white/90">
            O Cérebro por Trás da Revolução
        </p>
        <div className="bg-[#ffffff10] p-8 rounded-lg backdrop-blur-sm hover:bg-[#ffffff18]">
            <p className="mb-8 text-white">
                Somos um time diversificado de profissionais apaixonados por tecnologia e mercado financeiro.<br /><br />
                Nossa equipe combina experiência em desenvolvimento de software, análise de dados, mercado
                financeiro e atendimento ao cliente para oferecer a melhor experiência possível.
            </p>
        </div>
    </section>
);
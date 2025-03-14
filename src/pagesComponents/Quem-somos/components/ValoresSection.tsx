import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import { VALORES } from '../constants/valores';

export const ValoresSection = () => (
    <section className="max-w-5xl w-full">
        <div className="flex items-center justify-center gap-3 mb-8">
            <StarIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <h2 className="text-2xl text-center text-[#FF4081]">Nossos Valores: Ética e Inteligência</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {VALORES.map((valor) => (
                <div key={valor.title} className="text-center bg-[#ffffff10] p-6 rounded-lg hover:bg-[#ffffff18] transform hover:scale-105 transition-all duration-300">
                    {valor.icon}
                    <h3 className="text-xl mb-2 text-[#64FFDA]">{valor.title}</h3>
                    <p className="text-white">{valor.description}</p>
                </div>
            ))}
        </div>
    </section>
);
import RocketIcon from '@mui/icons-material/Rocket';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const MissaoSection = () => (
    <section className="max-w-5xl text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-center gap-3 mb-4">
            <RocketIcon sx={{ color: '#FF4081', fontSize: 32 }} />
            <MatrixRainText
                text="Nossa Missão: Equilibrar o Jogo Financeiro"
                className="text-2xl text-[#FF4081]"
            />
        </div>
        <p className="mb-8 text-white/80">
            Não Somos Fornecedores. Somos Armas Secretas.
        </p>
        <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm hover:bg-[#ffffff12] transition-duration-300">
            <p className="mt-4 mb-8 text-white">
                Capacitar investidores com ferramentas tecnológicas inovadoras para tomada de decisões mais
                informadas no mercado financeiro, promovendo educação financeira e democratizando o acesso a
                análises avançadas de investimentos.<br /><br />
                Dar conhecimento de padrões de mercado aos nossos usuários <br /><br />
                Dar acesso a estratégias antes restritas a grandes fundos  <br /><br />
                Criar uma geração de investidores tecnicamente empoderados
            </p>
        </div>
    </section>
);
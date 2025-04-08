import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';

// Cor fixa para ícones
const ICON_STYLE = {
  color: '#64FFDA',
  fontSize: 40,
  marginBottom: '16px'
};

export const VALORES = [
  {
    icon: <LightbulbIcon sx={ICON_STYLE} />,
    title: 'Inovação',
    description: 'Buscamos constantemente novas soluções tecnológicas para melhorar a experiência dos nossos usuários.'
  },
  {
    icon: <SecurityIcon sx={ICON_STYLE} />,
    title: 'Transparência',
    description: 'Mantemos uma comunicação clara e honesta com nossa comunidade de investidores.'
  },
  {
    icon: <StarIcon sx={ICON_STYLE} />,
    title: 'Excelência',
    description: 'Comprometidos com a qualidade e precisão em todas as nossas ferramentas e análises.'
  }
] as const;
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';

export const VALORES = [
    {
        icon: <LightbulbIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />,
        title: 'Inovação',
        description: 'Buscamos constantemente novas soluções tecnológicas para melhorar a experiência dos nossos usuários.'
    },
    {
        icon: <SecurityIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />,
        title: 'Transparência',
        description: 'Mantemos uma comunicação clara e honesta com nossa comunidade de investidores.'
    },
    {
        icon: <StarIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />,
        title: 'Excelência',
        description: 'Comprometidos com a qualidade e precisão em todas as nossas ferramentas e análises.'
    }
] as const;
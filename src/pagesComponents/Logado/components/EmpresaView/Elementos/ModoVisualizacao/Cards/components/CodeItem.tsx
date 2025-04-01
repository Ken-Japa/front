import React from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { formatPercentage } from '../../MapaArvore/utils';
import { CodeChip } from '../styled';

interface CodeItemProps {
    codigo: {
        codigo: string;
        variacao?: number;
        preco?: number;
    };
}

export const CodeItem: React.FC<CodeItemProps> = ({ codigo }) => {
    const router = useRouter();

    const handleDoubleClick = () => {
        router.push(`/empresa/${codigo.codigo}`);
    };
    return (
        <CodeChip
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, width: '100%' }}>
                    <Typography variant="caption" fontWeight="bold" sx={{
                        cursor: 'pointer', transition: 'color 0.1s ease',
                        '&:hover': {
                            color: '#4dabf5'
                        }
                    }}
                        onDoubleClick={handleDoubleClick}>
                        {codigo.codigo}
                    </Typography>
                    {codigo.preco !== undefined && (
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            R$ {codigo.preco.toFixed(2)}
                        </Typography>
                    )}
                    {codigo.variacao !== undefined && (
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                            {codigo.variacao > 0 ? (
                                <TrendingUpIcon fontSize="small" color="success" />
                            ) : (
                                <TrendingDownIcon fontSize="small" color="error" />
                            )}
                            <Typography
                                variant="caption"
                                sx={{
                                    color: codigo.variacao > 0 ? 'success.main' : 'error.main',
                                    fontWeight: 'bold'
                                }}
                            >
                                {formatPercentage(codigo.variacao)}
                            </Typography>
                        </Box>
                    )}
                </Box>
            }
            sx={{
                height: 'auto',
                width: '100%',
                backgroundColor: 'rgba(30, 40, 50, 0.8)',
                mb: 0.5
            }}
        />
    );
};
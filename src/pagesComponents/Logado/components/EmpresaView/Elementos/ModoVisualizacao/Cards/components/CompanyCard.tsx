import React from 'react';
import { useRouter } from 'next/navigation';
import { CardContent, Typography, Divider, Box } from '@mui/material';
import { CardContainer, CardHeader, CodesContainer } from '../styled';
import { formatCurrency } from '../../utils/currency';
import { CodeItem } from './CodeItem';

interface CompanyCardProps {
    empresa: {
        empresa: string;
        industria: string;
        segmento: string;
        valorMercado: number;
        codigos: Array<{
            codigo: string;
            variacao?: number;
            preco?: number;
        }>;
    };
    totalMarketValue: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ empresa, totalMarketValue }) => {
    const router = useRouter();

    const handleDoubleClick = () => {
        if (empresa.codigos && empresa.codigos.length > 0) {
            router.push(`/empresa/${empresa.codigos[0].codigo}`);
        }
    };
    return (
        <CardContainer>
            <CardContent sx={{ flexGrow: 1 }}>
                <CardHeader>
                    <Box >
                        <Typography variant="h6" component="div" noWrap title={empresa.empresa} sx={{
                            cursor: 'pointer', transition: 'color 0.1s ease',
                            '&:hover': {
                                color: '#4dabf5'
                            }
                        }}
                            onDoubleClick={handleDoubleClick}>
                            {empresa.empresa}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                            {empresa.segmento}
                        </Typography>
                    </Box>

                </CardHeader>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {empresa.industria}
                </Typography>

                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {formatCurrency(empresa.valorMercado)}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Participação: {((empresa.valorMercado / totalMarketValue) * 100).toFixed(2)}%
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Typography variant="subtitle2" sx={{ mt: 1, mb: 1 }}>
                    Códigos:
                </Typography>

                <CodesContainer>
                    {empresa.codigos.map((codigo, index) => (
                        <CodeItem key={index} codigo={codigo} />
                    ))}
                </CodesContainer>
            </CardContent>
        </CardContainer>
    );
};
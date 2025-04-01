import { Paper, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState, useEffect } from 'react';
import { LineChart } from '@/components/Charts/LineChart';

type PeriodType = '1D' | '5D' | '1M' | '6M' | '1A' | '5A';

interface GraficoHistoricoProps {
    codigoAtivo: string;
}

export const GraficoHistorico: React.FC<GraficoHistoricoProps> = ({ codigoAtivo }) => {
    const [period, setPeriod] = useState<PeriodType>('1M');
    const [chartData, setChartData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHistorico = async () => {
            // Aqui você buscaria os dados históricos do código ativo
            // Por enquanto, vamos gerar dados fictícios
            setLoading(true);
            
            try {
                // Simulação de dados históricos
                const hoje = new Date();
                const dados = [];
                
                // Número de pontos baseado no período
                const pontos = period === '1D' ? 24 : 
                               period === '5D' ? 5 : 
                               period === '1M' ? 30 : 
                               period === '6M' ? 180 : 
                               period === '1A' ? 365 : 730;
                
                // Valor inicial aleatório entre 10 e 100
                let valor = Math.random() * 90 + 10;
                
                for (let i = 0; i < pontos; i++) {
                    const data = new Date(hoje);
                    
                    if (period === '1D') {
                        data.setHours(hoje.getHours() - (pontos - i));
                    } else {
                        data.setDate(hoje.getDate() - (pontos - i));
                    }
                    
                    // Variação aleatória de -5% a +5%
                    const variacao = (Math.random() - 0.5) * 0.1;
                    valor = valor * (1 + variacao);
                    
                    dados.push({
                        data: data.toISOString(),
                        valor: valor
                    });
                }
                
                setChartData(dados);
            } catch (error) {
                console.error('Erro ao buscar histórico:', error);
            } finally {
                setLoading(false);
            }
        };
        
        if (codigoAtivo) {
            fetchHistorico();
        }
    }, [codigoAtivo, period]);

    return (
        <Paper sx={{ p: 3 }}>
            <Box sx={{ mb: 2 }}>
                <ToggleButtonGroup
                    value={period}
                    exclusive
                    onChange={(_, newPeriod) => newPeriod && setPeriod(newPeriod)}
                    size="small"
                >
                    <ToggleButton value="1D">1D</ToggleButton>
                    <ToggleButton value="5D">5D</ToggleButton>
                    <ToggleButton value="1M">1M</ToggleButton>
                    <ToggleButton value="6M">6M</ToggleButton>
                    <ToggleButton value="1A">1A</ToggleButton>
                    <ToggleButton value="5A">5A</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box sx={{ height: 400 }}>
                <LineChart
                    data={chartData}
                    loading={loading}
                    xKey="data"
                    yKey="valor"
                    labelFormat={(value) => `R$ ${value.toFixed(2)}`}
                />
            </Box>
        </Paper>
    );
};
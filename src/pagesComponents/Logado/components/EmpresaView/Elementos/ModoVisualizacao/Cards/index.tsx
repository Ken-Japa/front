import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, Grid } from '@mui/material';
import { SumarioData } from '../TabelaView/types';
import { sumarioService } from './services/sumarioService';
import { CompanyCard } from './components/CompanyCard';

interface CardsViewProps {
  onLoadingChange?: (loading: boolean) => void;
}

export const CardsView: React.FC<CardsViewProps> = ({ onLoadingChange }) => {
  const [data, setData] = useState<SumarioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (onLoadingChange) onLoadingChange(true);
        
        const sumarioData = await sumarioService.getSumarioData();
        setData(sumarioData);
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Falha ao carregar os dados');
      } finally {
        setIsLoading(false);
        if (onLoadingChange) onLoadingChange(false);
      }
    };

    fetchData();
  }, [onLoadingChange]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!data) return null;

  // Flatten all companies for card display
  const allCompanies = data.sumario.flatMap(industria =>
    industria.segmentos.flatMap(segmento =>
      segmento.empresasDetalhes.map(empresa => ({
        ...empresa,
        industria: industria.industria,
        segmento: segmento.segmento
      }))
    )
  );

  // Sort companies by market value (descending)
  const sortedCompanies = [...allCompanies].sort((a, b) => b.valorMercado - a.valorMercado);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {sortedCompanies.map((empresa, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CompanyCard 
              empresa={empresa} 
              totalMarketValue={data.sumarioTotal.valorMercadoTotalGeral} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsView;
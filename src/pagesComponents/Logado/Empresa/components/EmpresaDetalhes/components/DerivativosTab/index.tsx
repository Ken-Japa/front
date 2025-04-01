import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface DerivativosTabProps {
  codigoBase: string;
}

export const DerivativosTab: React.FC<DerivativosTabProps> = ({ codigoBase }) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Derivativos para {codigoBase}
      </Typography>
      <Box>
        {/* Conteúdo dos derivativos será implementado aqui */}
        <Typography>
          Informações sobre derivativos serão exibidas nesta seção.
        </Typography>
      </Box>
    </Paper>
  );
};
import React from 'react';
import { Box, Typography, Chip, Link, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import { formatCurrency } from '../../utils/formatters';
import { EmpresaDetalhada } from '../../../../types';
import { HeaderContainer, EmpresaInfo, CodigosContainer } from './styled';
import LanguageIcon from '@mui/icons-material/Language';

interface EmpresaHeaderProps {
    empresa: EmpresaDetalhada;
    codigoAtivo: string;
    onCodigoChange: (codigo: string) => void;
}

export const EmpresaHeader: React.FC<EmpresaHeaderProps> = ({
    empresa,
    codigoAtivo,
    onCodigoChange
}) => {
    return (
        <Paper elevation={2}>
            <HeaderContainer>
                <EmpresaInfo>
                    <Typography variant="h4" component="h1">
                        {empresa.nome}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        {empresa.setor} • {empresa.subsetor}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                        {empresa.descricao}
                    </Typography>

                    {empresa.site && (
                        <Link
                            href={empresa.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}
                        >
                            <LanguageIcon fontSize="small" />
                            <Typography variant="body2">
                                {empresa.site.replace(/^https?:\/\//, '')}
                            </Typography>
                        </Link>
                    )}

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Chip
                            label={`Valor de Mercado: ${formatCurrency(empresa.valorMercado)}`}
                            color="primary"
                            variant="outlined"
                        />

                    </Box>
                </EmpresaInfo>

                <CodigosContainer>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Códigos Disponíveis:
                    </Typography>

                    <ToggleButtonGroup
                        value={codigoAtivo}
                        exclusive
                        onChange={(_, newCodigo) => newCodigo && onCodigoChange(newCodigo)}
                        aria-label="códigos da empresa"
                        size="small"
                    >
                        {empresa.codigos.map((codigo) => (
                            <ToggleButton
                                key={codigo.codigo}
                                value={codigo.codigo}
                                aria-label={codigo.codigo}
                            >
                                {codigo.codigo}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </CodigosContainer>
            </HeaderContainer>
        </Paper>
    );
};
import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip, Link, ToggleButtonGroup, ToggleButton, Paper, Grid, Divider, Tooltip } from '@mui/material';
import { formatCurrency } from '../../utils/formatters';
import { EmpresaDetalhada } from '../../../../types';
import { HeaderContainer, EmpresaInfo, CodigosContainer } from './styled';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { empresasInfoDicionario } from '../../../../../constants/empresasInfo';

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
    const [empresaInfo, setEmpresaInfo] = useState<any>(null);

    useEffect(() => {
        // Try to find the company in the dictionary by its ticker or name
        const ticker = codigoAtivo.split('.')[0]; // Remove any suffixes like .SA
        const infoFromDictionary = empresasInfoDicionario[ticker] || 
                                  Object.entries(empresasInfoDicionario).find(
                                      ([_, info]) => info.nome.includes(empresa.nome) || 
                                                    empresa.nome.includes(info.nome)
                                  )?.[1];
        
        if (infoFromDictionary) {
            setEmpresaInfo(infoFromDictionary);
        } else {
            setEmpresaInfo(null);
        }
    }, [empresa.nome, codigoAtivo]);

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
                        {empresaInfo?.descricao || empresa.descricao}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                        {empresaInfo?.fundacao && (
                            <Chip
                                icon={<CalendarTodayIcon />}
                                label={`Fundação: ${empresaInfo.fundacao}`}
                                variant="outlined"
                                size="small"
                            />
                        )}
                        
                        {empresaInfo?.sede && (
                            <Chip
                                icon={<LocationOnIcon />}
                                label={`Sede: ${empresaInfo.sede}`}
                                variant="outlined"
                                size="small"
                            />
                        )}
                        
                        {empresaInfo?.sustentabilidade?.esg_score && (
                            <Tooltip title="Pontuação ESG (Environmental, Social, Governance)">
                                <Chip
                                    icon={<EmojiEventsIcon />}
                                    label={`ESG Score: ${empresaInfo.sustentabilidade.esg_score}`}
                                    variant="outlined"
                                    size="small"
                                    color={
                                        empresaInfo.sustentabilidade.esg_score > 80 ? "success" :
                                        empresaInfo.sustentabilidade.esg_score > 60 ? "info" : "warning"
                                    }
                                />
                            </Tooltip>
                        )}
                    </Box>

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

                    {empresaInfo && (
                        <Box sx={{ mt: 3 }}>
                            <Divider sx={{ mb: 2 }} />
                            
                            {empresaInfo.fatos_relevantes && empresaInfo.fatos_relevantes.length > 0 && (
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Fatos Relevantes:
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                                        {empresaInfo.fatos_relevantes.slice(0, 3).map((fato: string, index: number) => (
                                            <Typography component="li" variant="body2" key={index}>
                                                {fato}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            
                            <Grid container spacing={2}>
                                {empresaInfo.vantagens_competitivas && (
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Vantagens Competitivas:
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                                            {empresaInfo.vantagens_competitivas.slice(0, 3).map((vantagem: string, index: number) => (
                                                <Typography component="li" variant="body2" key={index}>
                                                    {vantagem}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Grid>
                                )}
                                
                                {empresaInfo.riscos_negocio && (
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Riscos do Negócio:
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                                            {empresaInfo.riscos_negocio.slice(0, 3).map((risco: string, index: number) => (
                                                <Typography component="li" variant="body2" key={index}>
                                                    {risco}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    )}
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
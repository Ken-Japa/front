import React, { useEffect, useState } from 'react';
import { Typography, Link, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import { EmpresaDetalhada } from '../../../../types';
import { empresasInfoDicionario } from '../../../../../constants/empresasInfo';

import { EmpresaChips } from './components/EmpresaChips';
import { FatosRelevantes } from './components/FatosRelevantes';
import { VantagensRiscos } from './components/VantagensRiscos';
import { InformacoesAdicionais } from './components/InformacoesAdicionais';
import { CodigosDisponiveis } from './components/CodigosDisponiveis';
import { CompanyAvatar } from './components/CompanyAvatar';
import { HeaderContainer, EmpresaInfo, EmpresaTitulo, EmpresaSubtitulo, SiteLink, EmpresaDescricao } from './styled';

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

    const encontrarInfoEmpresa = () => {

        const empresaNomeUpperCase = empresa.nome.toUpperCase();

        let infoFromDictionary = empresasInfoDicionario[empresaNomeUpperCase];

        if (!infoFromDictionary) {
            const matchingEntry = Object.entries(empresasInfoDicionario).find(
                ([_, info]) => info.nome.toUpperCase() === empresa.nome.toUpperCase()
            );

            if (matchingEntry) {
                infoFromDictionary = matchingEntry[1];
            }
        }

        return infoFromDictionary;
    };

    useEffect(() => {
        const fetchEmpresaInfo = () => {
            const infoEmpresa = encontrarInfoEmpresa();
            setEmpresaInfo(infoEmpresa);
        };
        fetchEmpresaInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [empresa.nome]);

    if (!empresa) {
        return <div>Carregando dados da empresa...</div>;
    }

    const companyName = empresa.nome.toUpperCase();

    return (
        <HeaderContainer>
            <EmpresaInfo>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    mb: 2,
                    minHeight: 80
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <CompanyAvatar companyName={companyName} size={70} />
                    </Box>
                    <Box>
                        <EmpresaTitulo variant="h4" component="h1">
                            {empresaInfo?.nome || empresa.nome}
                        </EmpresaTitulo>

                        <EmpresaSubtitulo variant="subtitle1">
                            {empresa.industria} • {empresa.segmento}
                        </EmpresaSubtitulo>
                    </Box>
                </Box>

                {(empresaInfo?.link) && (
                    <SiteLink>
                        <Link
                            href={empresaInfo?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LanguageIcon fontSize="small" />
                            <Typography variant="body2">
                                {(empresaInfo?.link).replace(/^https?:\/\//, '')}
                            </Typography>
                        </Link>
                    </SiteLink>
                )}

                <EmpresaDescricao variant="body1">
                    {empresaInfo?.descricao}
                </EmpresaDescricao>

                <EmpresaChips
                    empresaInfo={empresaInfo}
                    valorMercado={empresa.valorMercado}
                />


                {empresaInfo && (
                    <>
                        <FatosRelevantes
                            fatos={empresaInfo.fatos_relevantes || []}
                        />

                        <VantagensRiscos
                            vantagens={empresaInfo.vantagens_competitivas || []}
                            riscos={empresaInfo.riscos_negocio || []}
                        />

                        <InformacoesAdicionais
                            empresaInfo={empresaInfo}
                        />

                        <CodigosDisponiveis
                            codigos={empresa.codigos}
                            codigoAtivo={codigoAtivo}
                            onCodigoChange={onCodigoChange}
                        />
                    </>
                )}
            </EmpresaInfo>
        </HeaderContainer>
    );
};
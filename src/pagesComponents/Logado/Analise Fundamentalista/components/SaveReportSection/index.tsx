import { FC, useState } from 'react';
import {
    Box,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Typography
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { SaveReportContainer } from './styled';
import { DadosAnaliseFundamental, MetricasCalculadas } from '../../types';
import { ValuationResults, SensitivityResults } from '../ValuationSection/types';
import { GenerateReportParams } from './utils/types';

interface SaveReportSectionProps {
    onSave: (params: GenerateReportParams) => void;
    isEnabled: boolean;
    fundamentalData: DadosAnaliseFundamental;
    valuationResults: ValuationResults | null;
    sensitivityResults: SensitivityResults | null;
    metricsResults?: MetricasCalculadas;
}

export interface SaveReportOptions {
    companyName: string;
    showFormulas: boolean;
    showDescriptions: boolean;
    showCalculations: boolean;
}

export const SaveReportSection: FC<SaveReportSectionProps> = ({
    onSave,
    isEnabled,
    fundamentalData,
    valuationResults,
    sensitivityResults,
    metricsResults
}) => {
    const [options, setOptions] = useState<SaveReportOptions>({
        companyName: '',
        showFormulas: false,
        showDescriptions: true,
        showCalculations: false,
    });

    const handleSave = () => {
        const currentYear = new Date().getFullYear();
        const reportName = options.companyName.trim()
            ? `Análise Fundamentalista - ${options.companyName} - ${currentYear}`
            : `Análise Fundamentalista - ${currentYear}`;

        const reportParams: GenerateReportParams = {
            options: { ...options, companyName: reportName },
            fundamentalData,
            valuationResults,
            sensitivityResults,
            metricsResults
        };

        onSave(reportParams);
    };

    return (
        <SaveReportContainer>
            <Typography variant="h6" gutterBottom>
                Salvar Relatório
            </Typography>

            <Box sx={{ mb: 3 }}>
                <TextField
                    fullWidth
                    label="Nome da Empresa"
                    value={options.companyName}
                    onChange={(e) => setOptions({ ...options, companyName: e.target.value })}
                    disabled={!isEnabled}
                />
            </Box>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={options.showFormulas}
                            onChange={(e) => setOptions({ ...options, showFormulas: e.target.checked })}
                            disabled={!isEnabled}
                        />
                    }
                    label="Mostrar fórmulas utilizadas"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={options.showDescriptions}
                            onChange={(e) => setOptions({ ...options, showDescriptions: e.target.checked })}
                            disabled={!isEnabled}
                        />
                    }
                    label="Adicionar descrição das métricas"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={options.showCalculations}
                            onChange={(e) => setOptions({ ...options, showCalculations: e.target.checked })}
                            disabled={!isEnabled}
                        />
                    }
                    label="Mostrar cálculos detalhados"
                />
            </FormGroup>

            <Box sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    disabled={!isEnabled}
                    fullWidth
                >
                    Salvar Relatório
                </Button>
            </Box>
        </SaveReportContainer>
    );
};
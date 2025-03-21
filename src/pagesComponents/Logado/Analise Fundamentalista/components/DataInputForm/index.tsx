import { Control } from 'react-hook-form';
import { Grid } from '@mui/material';
import { DadosAnaliseFundamental } from '../../types';
import { FormSection } from './components/FormSection';
import { FormField } from './components/FormField';
import { FormContainer } from './styled';
import { FORM_SECTIONS } from './constants/constants';

export const DataInputForm = ({ control }: { control: Control<DadosAnaliseFundamental> }) => {
    return (
        <FormContainer container spacing={3}>
            {FORM_SECTIONS.map((section, index) => (
                <FormSection
                    key={index}
                    title={section.title}
                    description={section.description}
                >
                    <Grid container spacing={2}>
                        {section.fields.map((field, fieldIndex) => (
                            <FormField
                                key={fieldIndex}
                                control={control}
                                {...field}
                            />
                        ))}
                    </Grid>
                </FormSection>
            ))}
        </FormContainer>
    );
};
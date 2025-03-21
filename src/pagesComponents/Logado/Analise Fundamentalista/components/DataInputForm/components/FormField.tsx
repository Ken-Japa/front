import { Controller } from 'react-hook-form';
import { Tooltip } from '@mui/material';

import { NumberInput } from '@/components/NumberInput';
import { FormFieldProps } from '../types/types';
import { FieldContainer } from '../styled';

export const FormField = ({ control, name, label, tooltip }: FormFieldProps) => (
    <FieldContainer item xs={12} sm={6}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Tooltip title={tooltip} placement="top-start">
                    <NumberInput
                        {...field}
                        value={field.value || null}
                        label={label}
                        fullWidth
                    />
                </Tooltip>
            )}
        />
    </FieldContainer>
);
import { type ChangeEvent } from 'react';

import { FormData, FormErrors } from "../../types";
import { getPasswordStrength } from "../../utils/passwordUtils";
import { FormFieldsSkeleton } from "./FormFieldsSkeleton";
import {
    StyledTextField,
    PasswordStrengthContainer,
    StyledLinearProgress,
    StrengthText
} from "./styled";

interface FormFieldsProps {
    formData: FormData;
    errors: FormErrors;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
}

interface PasswordStrength {
    score: number;
    color: string;
    label: string;
}

export const FormFields = ({ formData, errors, onChange, isLoading }: FormFieldsProps) => {
    if (isLoading) {
        return <FormFieldsSkeleton />;
    }

    const passwordStrength: PasswordStrength = getPasswordStrength(formData.password);

    const formatCPF = (value: string): string => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
            .slice(0, 14);
    };

    const formatPhone = (value: string): string => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
            .slice(0, 15);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let processedValue = value;

        const syntheticEvent = {
            ...e,
            target: {
                ...e.target,
                name,
                value: processedValue
            }
        };

        onChange(syntheticEvent);
    };

    const createMaskedChangeHandler = (name: string, formatter: (value: string) => string) => (e: ChangeEvent<HTMLInputElement>) => {
        const masked = formatter(e.target.value);
        handleChange({ target: { name, value: masked } } as ChangeEvent<HTMLInputElement>);
    };

    return (
        <>
            <StyledTextField
                label="Nome completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
                id="nome-registrar"
            />
            <StyledTextField
                name="cpf"
                label="CPF"
                value={formData.cpf}
                onChange={createMaskedChangeHandler('cpf', formatCPF)}
                error={!!errors.cpf}
                helperText={errors.cpf}
                required
                inputProps={{ maxLength: 14 }}
                id="cpf-registrar"
            />
            <StyledTextField
                name="phone"
                label="Telefone"
                value={formData.phone}
                onChange={createMaskedChangeHandler('phone', formatPhone)}
                error={!!errors.phone}
                helperText={errors.phone}
                required
                inputProps={{ maxLength: 15 }}
                id="telefone-registrar"
            />
            <StyledTextField
                name="email"
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                id="email-registrar"
            />
            <StyledTextField
                name="password"
                label="Senha"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                required
                id="senha-registrar"
            />

            {formData.password && (
                <PasswordStrengthContainer>
                    <StyledLinearProgress
                        variant="determinate"
                        value={passwordStrength.score}
                        sx={{
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: passwordStrength.color,
                                transition: 'background-color 0.3s ease'
                            }
                        }}
                    />
                    <StrengthText variant="caption">
                        {passwordStrength.label}
                    </StrengthText>
                </PasswordStrengthContainer>
            )}

            <StyledTextField
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                required
                id="confirmarsenha-registrar"
            />
        </>
    );
};
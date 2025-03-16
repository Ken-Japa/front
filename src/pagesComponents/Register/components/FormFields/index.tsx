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
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
}

interface PasswordStrength {
    score: number;
    color: string;
    label: string;
}

export const FormFields = ({ formData, errors, onChange, isLoading }: FormFieldsProps) => {
    const passwordStrength: PasswordStrength = getPasswordStrength(formData.password);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (isLoading) {
        return <FormFieldsSkeleton />;
    }
    return (
        <>
            <StyledTextField
                label="Nome completo"
                name="nome-registrar"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
                id="nome-registrar"
            />
            <StyledTextField
                name="cpf-registrar"
                label="CPF"
                value={formData.cpf}
                onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    const masked = value
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
                        .slice(0, 14);
                    handleChange({ target: { name: 'cpf', value: masked } } as React.ChangeEvent<HTMLInputElement>);
                }}
                error={!!errors.cpf}
                helperText={errors.cpf}
                required
                inputProps={{ maxLength: 14 }}
                id="cpf-registrar"
            />
            <StyledTextField
                name="telefone-registrar"
                label="Telefone"
                value={formData.phone}
                onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    const masked = value
                        .replace(/(\d{2})(\d)/, '($1) $2')
                        .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
                        .slice(0, 15);
                    handleChange({ target: { name: 'phone', value: masked } } as React.ChangeEvent<HTMLInputElement>);
                }}
                error={!!errors.phone}
                helperText={errors.phone}
                required
                inputProps={{ maxLength: 15 }}
                id="telefone-registrar"
            />
            <StyledTextField
                name="email-registrar"
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
                name="senha-registrar"
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
                name="confirmarsenha-registrar"
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
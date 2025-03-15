import { FormData, FormErrors } from "../../types";
import { getPasswordStrength } from "../../utils/passwordUtils";
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
}

interface PasswordStrength {
    score: number;
    color: string;
    label: string;
}

export const FormFields = ({ formData, errors, onChange }: FormFieldsProps) => {
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
            />
            <StyledTextField
                name="cpf"
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
            />
            <StyledTextField
                name="phone"
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
            />
        </>
    );
};
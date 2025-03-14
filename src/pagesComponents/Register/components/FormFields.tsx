import { TextField, Box, LinearProgress, Typography } from "@mui/material";
import { FormData, FormErrors } from "../types";
import { getPasswordStrength } from "../utils/passwordUtils";

interface FormFieldsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFields = ({ formData, errors, handleChange }: FormFieldsProps) => (
    <>
        <TextField
            name="name"
            label="Nome completo"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            required
        />
        <TextField
            name="cpf"
            label="CPF"
            variant="outlined"
            fullWidth
            margin="normal"
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
        <TextField
            name="phone"
            label="Telefone"
            variant="outlined"
            fullWidth
            margin="normal"
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
        <TextField
            name="email"
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
        />
        <TextField
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            required
        />

        {formData.password && (
            <Box sx={{ width: '100%', mt: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={getPasswordStrength(formData.password)}
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: getPasswordStrength(formData.password) < 50 ? '#ff4444' :
                                getPasswordStrength(formData.password) < 100 ? '#ffbb33' :
                                    '#00C851'
                        }
                    }}
                />
                <Typography variant="caption" sx={{ color: 'white', opacity: 0.9, mt: 0.5 }}>
                    Força da senha: {getPasswordStrength(formData.password)}%
                </Typography>
            </Box>
        )}

        <TextField
            name="confirmPassword"
            label="Confirmar Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            required
        />
    </>
);
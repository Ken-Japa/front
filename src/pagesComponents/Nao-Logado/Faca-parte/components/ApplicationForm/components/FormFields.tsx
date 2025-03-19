import { type FC } from 'react';
import { TextField, MenuItem } from "@mui/material";
import { FormData, FormErrors } from '../../../types';
import { ROLES } from '../../../constants';

interface FormFieldsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormFields: FC<FormFieldsProps> = ({ formData, errors, handleChange }) => (
    <>
        <TextField
            name="name"
            label="Nome Completo"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
        />

        <TextField
            name="email"
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
        />

        <TextField
            name="phone"
            label="Telefone"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="Ex: 11999999999"
        />

        <TextField
            name="role"
            label="Área de Interesse"
            select
            variant="outlined"
            fullWidth
            required
            value={formData.role}
            onChange={handleChange}
            SelectProps={{
                MenuProps: {
                    PaperProps: {
                        sx: {
                            backgroundColor: 'rgba(0, 21, 41, 0.98)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(13, 149, 249, 0.2)',
                            '& .MuiMenuItem-root': {
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(13, 149, 249, 0.35)'
                                }
                            }
                        }
                    }
                }
            }}
        >
            {ROLES.map((role) => (
                <MenuItem key={role} value={role}>
                    {role}
                </MenuItem>
            ))}
        </TextField>

        <TextField
            name="experience"
            label="Experiência"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            required
            value={formData.experience}
            onChange={handleChange}
            error={!!errors.experience}
            helperText={errors.experience}
            placeholder="Conte-nos sobre sua experiência profissional (mínimo 15 caracteres)"
        />

        <TextField
            name="portfolio"
            label="Portfolio/LinkedIn"
            variant="outlined"
            fullWidth
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="Links para seu portfolio ou LinkedIn"
        />

        <TextField
            name="github"
            label="GitHub"
            variant="outlined"
            fullWidth
            value={formData.github}
            onChange={handleChange}
            placeholder="Link para seu perfil no GitHub (opcional)"
        />

        <TextField
            name="message"
            label="Por que quer se juntar ao nosso time?"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            placeholder="Explique por que você quer fazer parte da nossa equipe (mínimo 50 caracteres)"
        />
    </>
);
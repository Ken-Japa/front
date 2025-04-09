import { type FC, type FormEvent, type ChangeEvent } from 'react';

import { TextField, Button, Autocomplete } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { ContactFormStyled } from "./styled";
import { visitorColors } from "@/theme/palette/visitor";
import { FormData, FormErrors } from '../../types';

interface ContactFormProps {
    formData: FormData;
    errors: FormErrors;
    isBlocked: boolean;
    blockTimer: number;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: FormEvent) => void;
}

const subjectOptions = [
    "Assinaturas",
    "Problemas de Acesso",
    "Estratégias",
    "Relatórios",
    "Problemas Técnicos",
    "Parcerias Comerciais",
    "Outros"
] as const;

const autocompleteStyles = {
    backgroundColor: visitorColors.backgroundDark,
    backdropFilter: visitorColors.blur,
    border: `1px solid ${visitorColors.primary}20`,
    '& .MuiAutocomplete-option': {
        color: visitorColors.text,
        '&:hover': {
            backgroundColor: `${visitorColors.primary}40`
        },
        '&.Mui-focused': {
            backgroundColor: `${visitorColors.primary}30`
        }
    }
};

export const ContactFormComponent: FC<ContactFormProps> = ({
    formData,
    errors,
    isBlocked,
    blockTimer,
    handleChange,
    handleSubmit
}) => {
    const commonTextFieldProps = {
        className: "form-field",
        onChange: handleChange
    };

    return (
        <ContactFormStyled onSubmit={handleSubmit} id="contato-form">
            <TextField
                {...commonTextFieldProps}
                label="Nome"
                name="name"
                value={formData.name}
                error={!!errors.name}
                helperText={errors.name}
                id="nome-contato"
            />
            <TextField
                {...commonTextFieldProps}
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
                id="email-contato"
            />
            <Autocomplete
                className="form-field"
                freeSolo
                options={subjectOptions}
                value={formData.subject}
                onChange={(_, newValue) => {
                    handleChange({
                        target: { name: 'subject', value: newValue || '' }
                    } as ChangeEvent<HTMLInputElement>);
                }}
                componentsProps={{
                    paper: { sx: autocompleteStyles }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Assunto"
                        name="subject"
                        error={!!errors.subject}
                        helperText={errors.subject}
                        fullWidth
                        id="assunto-contato"
                    />
                )}
                id="assunto-contato2"
            />
            <TextField
                {...commonTextFieldProps}
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                error={!!errors.message}
                helperText={errors.message}
                id="mensagem-contato"
            />
            <Button
                className="submit-button"
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                endIcon={<SendIcon />}
                disabled={isBlocked}
            >
                {isBlocked ? `Aguarde ${blockTimer}s` : 'Enviar Mensagem'}
            </Button>
        </ContactFormStyled>
    );
};
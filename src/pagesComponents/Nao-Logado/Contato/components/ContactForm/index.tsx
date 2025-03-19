import { type FC, type FormEvent, type ChangeEvent } from 'react';

import { TextField, Button, Autocomplete } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { ContactFormStyled } from "./styled";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

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
    backgroundColor: 'rgba(0, 21, 41, 0.98)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(13, 149, 249, 0.2)',
    '& .MuiAutocomplete-option': {
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(13, 149, 249, 0.4)'
        },
        '&.Mui-focused': {
            backgroundColor: 'rgba(13, 149, 249, 0.3)'
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
                color="primary"
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
import { TextField, Button, Autocomplete } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { ContactFormStyled } from "./styled";

interface ContactFormProps {
    formData: {
        name: string;
        email: string;
        subject: string;
        message: string;
    };
    errors: {
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    };
    isBlocked: boolean;
    blockTimer: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const subjectOptions = [
    "Assinaturas",
    "Problemas de Acesso",
    "Estratégias",
    "Relatórios",
    "Problemas Técnicos",
    "Parcerias Comerciais",
    "Outros"
];

export const ContactFormComponent = ({
    formData,
    errors,
    isBlocked,
    blockTimer,
    handleChange,
    handleSubmit
}: ContactFormProps) => {
    return (
        <ContactFormStyled onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
            />
            <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
            />
            <Autocomplete
                freeSolo
                options={subjectOptions}
                value={formData.subject}
                onChange={(_, newValue) => {
                    handleChange({
                        target: { name: 'subject', value: newValue || '' }
                    } as React.ChangeEvent<HTMLInputElement>);
                }}
                componentsProps={{
                    paper: {
                        sx: {
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
                        }
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Assunto"
                        name="subject"
                        error={!!errors.subject}
                        helperText={errors.subject}
                        fullWidth
                    />
                )}
            />
            <TextField
                fullWidth
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
            />
            <Button
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
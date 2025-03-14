import { Typography, Link, Button } from "@mui/material";
import { FormData, FormErrors } from "../types";
import { FormFields } from "./FormFields";
import { TermsCheckbox } from "./TermsCheckbox";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { RegisterHeader } from "./RegisterHeader";
import { RegisterForm } from "../styled";

interface RegisterFormProps {
    formData: FormData;
    errors: FormErrors;
    acceptedTerms: boolean;
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTermsChange: (checked: boolean) => void;
    onGoogleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RegisterFormContent = ({
    formData,
    errors,
    acceptedTerms,
    onSubmit,
    onChange,
    onTermsChange,
    onGoogleClick
}: RegisterFormProps) => (
    <RegisterForm onSubmit={onSubmit} >
        <RegisterHeader />

        <FormFields
            formData={formData}
            errors={errors}
            handleChange={onChange}
        />

        <TermsCheckbox
            checked={acceptedTerms}
            onChange={onTermsChange}
        />

        <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{
                mt: 2,
                backgroundColor: '#0D95F9',
                '&:hover': {
                    backgroundColor: '#0b86e3'
                }
            }}
        >
            Registrar
        </Button>

        <div className="divider-container">
            <div className="divider" />
            <span className="divider-text text-white/90">ou</span>
            <div className="divider" />
        </div>

        <GoogleSignInButton onClick={onGoogleClick} />

        <Typography variant="body2" className="mt-4 text-center" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            Já tem uma conta?{' '}
            <Link href="/login" sx={{ color: '#0D95F9', textDecoration: 'underline', '&:hover': { opacity: 0.9 } }}>
                Faça login
            </Link>
        </Typography>
    </RegisterForm>
);
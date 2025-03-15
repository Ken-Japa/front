import { FormData, FormErrors } from "../../types";
import { RegisterFormStyled } from "./styled";
import { RegisterHeader } from "../Header";
import { FormFields } from "../FormFields";
import { TermsCheckbox } from "../TermsCheckbox";
import { GoogleSignInButton } from "../GoogleSignInButton";
import { SubmitButton } from "../Buttons/styled";

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
    <RegisterFormStyled onSubmit={onSubmit}>
        <RegisterHeader />
        <FormFields
            formData={formData}
            errors={errors}
            onChange={onChange}
        />
        <TermsCheckbox
            checked={acceptedTerms}
            onChange={onTermsChange}
        />
        <SubmitButton
            type="submit"
            variant="contained"
            fullWidth
        >
            Criar conta
        </SubmitButton>
        
        <div className="divider-container">
            <div className="divider" />
            <span className="divider-text">ou</span>
            <div className="divider" />
        </div>

        <GoogleSignInButton onClick={onGoogleClick} />
    </RegisterFormStyled>
);
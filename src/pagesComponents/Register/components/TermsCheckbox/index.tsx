import { Checkbox } from "@mui/material";
import { StyledFormControlLabel, StyledLink } from "./styled";

interface TermsCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const TermsCheckbox = ({ checked, onChange }: TermsCheckboxProps) => (
    <StyledFormControlLabel
        control={
            <Checkbox
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
        }
        label={
            <>
                Li e aceito os{" "}
                <StyledLink href="/terms" target="_blank">
                    termos e condições
                </StyledLink>
            </>
        }
    />
);
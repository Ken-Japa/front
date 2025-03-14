import { FormControlLabel, Checkbox, Typography, Link } from "@mui/material";

interface TermsCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const TermsCheckbox = ({ checked, onChange }: TermsCheckboxProps) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                sx={{
                    color: 'rgba(255,255,255,0.9)',
                    '&.Mui-checked': { color: '#0D95F9' }
                }}
            />
        }
        label={
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Li e aceito os{' '}
                <Link href="/termos-servicos" sx={{ color: '#0D95F9', textDecoration: 'underline', '&:hover': { opacity: 0.9 } }}>
                    termos e condições
                </Link>
            </Typography>
        }
    />
);
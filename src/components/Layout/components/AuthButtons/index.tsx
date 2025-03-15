import { PermIdentity } from "@mui/icons-material";
import { CustomButton } from "../../../Custom/Button";
import { useRouter } from "next/navigation";
import { ButtonsContainer } from "./styled";

interface AuthButtonsProps {
    onButtonClick?: () => void;
    fullWidth?: boolean;
}

export const AuthButtons = ({ onButtonClick, fullWidth }: AuthButtonsProps) => {
    const router = useRouter();

    return (
        <ButtonsContainer
            fullwidth={fullWidth}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <CustomButton
                value="Login"
                Icon={PermIdentity}
                customColor="#0056b3"
                textColor="#FFFFFF"
                onClick={() => {
                    router.push('/login');
                    onButtonClick?.();
                }}
                fullWidth={fullWidth}
            />
            <CustomButton
                value="Registrar"
                Icon={PermIdentity}
                customColor="#F5F5F5"
                textColor="#000000"
                onClick={() => {
                    router.push('/register');
                    onButtonClick?.();
                }}
                fullWidth={fullWidth}
            />
        </ButtonsContainer>
    );
};
import { PermIdentity } from "@mui/icons-material";
import { CustomButton } from "../../../../Custom/Button";
import Link from "next/link";
import { motion } from "framer-motion";

interface AuthButtonsProps {
    onButtonClick?: () => void;
    isFullWidth?: boolean;
}

export const LoginsButtons = ({ onButtonClick, isFullWidth }: AuthButtonsProps) => {
    return (
        <motion.div
            className={`flex gap-4 ${isFullWidth ? 'w-full' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Link href="/login" className={isFullWidth ? 'w-full' : ''}>
                <CustomButton
                    value="Login"
                    Icon={PermIdentity}
                    customColor="#0056b3"
                    textColor="#FFFFFF"
                    onClick={onButtonClick}
                    fullWidth={isFullWidth}
                />
            </Link>
            <Link href="/register" className={isFullWidth ? 'w-full' : ''}>
                <CustomButton
                    value="Registrar"
                    Icon={PermIdentity}
                    customColor="#F5F5F5"
                    textColor="#000000"
                    onClick={onButtonClick}
                    fullWidth={isFullWidth}
                />
            </Link>
        </motion.div>
    );
};
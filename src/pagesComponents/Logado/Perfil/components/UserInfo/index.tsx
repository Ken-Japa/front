import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { CustomButton } from "@/components/Custom/Button";
import { ProfileSection, ProfileLabel, ProfileValue } from "../../styled";

interface UserInfoProps {
    label: string;
    value: string | null | undefined;
    onEdit: () => void;
    addMode?: boolean;
}

export const UserInfo = ({ label, value, onEdit, addMode }: UserInfoProps) => (
    <ProfileSection>
        <ProfileLabel>{label}</ProfileLabel>
        <ProfileValue>{value || 'Não informado'}</ProfileValue>
        <CustomButton
            variant="outlined"
            size="small"
            startIcon={addMode ? <AddIcon /> : <EditIcon />}
            onClick={onEdit}
        >
            {addMode ? 'Adicionar' : 'Editar'}
        </CustomButton>
    </ProfileSection>
);
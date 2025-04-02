import EditIcon from '@mui/icons-material/Edit';
import { CustomButton } from "@/components/Custom/Button";
import { ProfileSection, ProfileInfo, ProfileLabel, ProfileValue } from "../../styled";


interface UserInfoProps {
    label: string;
    value: string | null | undefined;
    onEdit: () => void;
}

export const UserInfo = ({ label, value, onEdit }: UserInfoProps) => (
    <ProfileSection>
        <ProfileInfo>
            <ProfileLabel>{label}</ProfileLabel>
            <ProfileValue>{value || 'Não informado'}</ProfileValue>
        </ProfileInfo>
        <CustomButton
            variant="outlined"
            size="small"
            startIcon={<EditIcon />}
            onClick={onEdit}
        >
            Editar
        </CustomButton>
    </ProfileSection>
);
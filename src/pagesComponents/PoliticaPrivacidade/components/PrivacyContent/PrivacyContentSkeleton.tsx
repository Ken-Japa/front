import { Stack } from "@mui/material";
import { PrivacySectionSkeleton } from "../PrivacySection/PrivacySectionSkeleton";
import { PRIVACY_SECTIONS } from "../../constants/sections";

export const PrivacyContentSkeleton = () => {
    return (
        <Stack direction="column" spacing={6} className="text-white/95">
            {PRIVACY_SECTIONS.map(section => (
                <PrivacySectionSkeleton key={section.id} />
            ))}
        </Stack>
    );
};
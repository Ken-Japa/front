import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { ProfileLabel, ProfileValue } from "../../styled";

export const SubscriptionContainer = styled(motion.div)`
  width: 100%;
`;

export const SubscriptionField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  color: ${({ theme }) => theme.palette.text.primary};

  &:last-child {
    border-bottom: none;
  }
`;

export const LabelRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledProfileLabel = styled(ProfileLabel)`
  color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.7)"};
`;

export const StyledProfileValue = styled(ProfileValue)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 500;
`;

export const ButtonContainer = styled(Box)`
  margin-top: 1.5rem;
`;

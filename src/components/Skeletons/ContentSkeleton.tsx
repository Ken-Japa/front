"use client";

import { Box, Skeleton, Stack } from "@mui/material";

interface ContentSkeletonProps {
  type?: "text" | "card" | "form";
}

export const ContentSkeleton = ({ type = "text" }: ContentSkeletonProps) => {
  if (type === "card") {
    return (
      <Box className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm">
        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={200} className="bg-white/10" />
          <Skeleton variant="text" className="bg-white/10" />
          <Skeleton variant="text" width="60%" className="bg-white/10" />
          <Stack direction="row" spacing={1}>
            <Skeleton variant="rounded" width={80} height={32} className="bg-white/10" />
            <Skeleton variant="rounded" width={80} height={32} className="bg-white/10" />
          </Stack>
        </Stack>
      </Box>
    );
  }

  if (type === "form") {
    return (
      <Stack spacing={3} className="p-4">
        <Skeleton variant="text" width="40%" height={32} className="bg-white/10" />
        <Skeleton variant="rounded" height={56} className="bg-white/10" />
        <Skeleton variant="rounded" height={56} className="bg-white/10" />
        <Skeleton variant="rounded" height={56} className="bg-white/10" />
        <Skeleton variant="rounded" height={48} className="bg-white/10" />
      </Stack>
    );
  }

  return (
    <Stack spacing={1}>
      <Skeleton variant="text" className="bg-white/10" />
      <Skeleton variant="text" width="80%" className="bg-white/10" />
      <Skeleton variant="text" width="60%" className="bg-white/10" />
    </Stack>
  );
};
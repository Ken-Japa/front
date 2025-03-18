"use client";

import { Box, Skeleton, Stack } from "@mui/material";

interface ContentSkeletonProps {
  type?: "text" | "card" | "form";
  className?: string;
  cardHeight?: number;
  formFields?: number;
  textLines?: number;
  height?: number;
}

export const ContentSkeleton = ({
  type = "text",
  className = "",
  cardHeight = 200,
  formFields = 4,
  textLines = 3,
  height
}: ContentSkeletonProps) => {
  if (type === "card") {
    return (
      <Box className={`p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm ${className}`} style={{ height }}>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={cardHeight} className="bg-white/10" />
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
      <Stack spacing={3} className={`p-4 ${className}`} style={{ height }}>
        <Skeleton variant="text" width="40%" height={32} className="bg-white/10" />
        {Array(formFields).fill(0).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={56}
            className="bg-white/10"
          />
        ))}
      </Stack>
    );
  }

  return (
    <Stack spacing={1} className={className} style={{ height }}>
      {Array(textLines).fill(0).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === textLines - 1 ? "60%" : "100%"}
          className="bg-white/10"
        />
      ))}
    </Stack>
  );
};
import { Stack, Container } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <div className="w-full">
        <Container maxWidth="xl">
            <Stack spacing={12}>
                {/* Vantagens Section */}
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {Array(3).fill(0).map((_, index) => (
                            <ContentSkeleton key={`vantagem-${index}`} type="card" cardHeight={200} className="bg-[#ffffff0a] backdrop-blur-sm" />
                        ))}
                    </div>
                </Stack>

                {/* Recursos Section */}
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {Array(6).fill(0).map((_, index) => (
                            <ContentSkeleton key={`recurso-${index}`} type="card" cardHeight={180} className="bg-[#ffffff0a] backdrop-blur-sm" />
                        ))}
                    </div>
                </Stack>

                {/* Planos Section */}
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {Array(3).fill(0).map((_, index) => (
                            <ContentSkeleton key={`plano-${index}`} type="card" cardHeight={500} className="bg-[#ffffff0a] backdrop-blur-sm" />
                        ))}
                    </div>
                </Stack>

                {/* Embaixador Section */}
                <Stack spacing={4}>
                    <ContentSkeleton type="card" cardHeight={300} className="bg-[#ffffff0a] backdrop-blur-sm" />
                </Stack>

                {/* Testimonials Section */}
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {Array(3).fill(0).map((_, index) => (
                            <ContentSkeleton key={`testimonial-${index}`} type="card" cardHeight={250} className="bg-[#ffffff0a] backdrop-blur-sm" />
                        ))}
                    </div>
                </Stack>

                {/* FAQ Section */}
                <Stack spacing={4}>
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    {Array(4).fill(0).map((_, index) => (
                        <ContentSkeleton key={`faq-${index}`} type="card" cardHeight={100} className="bg-[#ffffff0a] backdrop-blur-sm" />
                    ))}
                </Stack>
            </Stack>
        </Container>
    </div>
);
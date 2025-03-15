import { Stack, Container } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <main className="bg-gradient-to-b from-black to-[#001529]">
        <Container maxWidth="xl">
            <section className="min-h-screen flex items-center">
                <Stack spacing={4} width="100%">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <ContentSkeleton type="text" textLines={3} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <Stack direction="row" spacing={2}>
                        <ContentSkeleton type="text" textLines={1} className="w-40 p-3 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                        <ContentSkeleton type="text" textLines={1} className="w-40 p-3 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    </Stack>
                </Stack>
            </section>

            <section className="py-20">
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {Array(6).fill(0).map((_, index) => (
                            <ContentSkeleton
                                key={`feature-${index}`}
                                type="card"
                                cardHeight={200}
                                className="bg-[#ffffff0a] backdrop-blur-sm"
                            />
                        ))}
                    </div>
                </Stack>
            </section>

            <section className="py-20">
                <Stack spacing={4} alignItems="center">
                    <ContentSkeleton type="text" textLines={3} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {Array(3).fill(0).map((_, index) => (
                            <ContentSkeleton
                                key={`plan-${index}`}
                                type="card"
                                cardHeight={400}
                                className="bg-[#ffffff0a] backdrop-blur-sm"
                            />
                        ))}
                    </div>
                </Stack>
            </section>

            <section className="py-20">
                <Stack spacing={4}>
                    <ContentSkeleton type="text" textLines={2} className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm" />
                    {Array(4).fill(0).map((_, index) => (
                        <ContentSkeleton
                            key={`faq-${index}`}
                            type="card"
                            cardHeight={100}
                            className="bg-[#ffffff0a] backdrop-blur-sm"
                        />
                    ))}
                </Stack>
            </section>
        </Container>
    </main>
);
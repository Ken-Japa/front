import { Stack } from "@mui/material";
import { TESTIMONIALS } from "../constants/testimonials";

export const TestimonialsSection = () => (
    <section className="py-16 px-4">
        <Stack alignItems="center" spacing={4} maxWidth="1200px" margin="0 auto">
            <h2 className="text-3xl text-white mb-8">O que dizem nossos usuários</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="bg-black/60 p-6 rounded-lg border border-[#0D95F9]/40">
                        <p className="text-white/95 mb-4">&quot;{testimonial.comment}&quot;</p>
                        <p className="text-[#0D95F9]">{testimonial.name}</p>
                        <p className="text-white/85 text-sm">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </Stack>
    </section>
);
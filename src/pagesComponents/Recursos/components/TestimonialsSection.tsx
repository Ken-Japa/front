import { Stack, Typography, Grid, Divider } from "@mui/material";
import { motion } from 'framer-motion';
import { TESTIMONIALS } from "../constants/testimonials";

export const TestimonialsSection = () => (
    <div className="w-full">
        <Stack spacing={4} alignItems="center">
            <Typography
                variant="h4"
                className="text-center text-[#0D95F9]"
                component={motion.h2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                O que nossos usuários dizem:
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {TESTIMONIALS.map((testimonial, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="bg-[#ffffff0a] p-6 rounded-lg backdrop-blur-sm hover:bg-[#ffffff15] transition-all duration-300">
                                <Typography className="text-white/90 mb-4 italic">
                                    &quot;{testimonial.comment}&quot;
                                </Typography>
                                <Divider sx={{ bgcolor: 'rgba(13, 149, 249, 0.2)', my: 2 }} />
                                <Typography variant="subtitle1" className="text-[#0D95F9] font-bold">
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body2" className="text-white/70">
                                    {testimonial.role}
                                </Typography>
                            </div>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    </div>
);
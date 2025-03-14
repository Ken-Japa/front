import { Stack } from "@mui/material";
import Link from "next/link";
import { FAQ_ITEMS } from "../constants/faq";

export const FAQSection = () => (
    <section className="py-16 px-4 bg-black/30">
        <Stack alignItems="center" spacing={4} maxWidth="800px" margin="0 auto">
            <h2 className="text-3xl text-white mb-8">Dúvidas Frequentes sobre Planos</h2>
            <div className="w-full space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                        <h3 className="text-[#0D95F9] mb-2">{item.question}</h3>
                        <p className="text-white">{item.answer}</p>
                    </div>
                ))}
            </div>
            <Link href="/faq" className="text-[#0D95F9] hover:underline">
                Ver todas as dúvidas →
            </Link>
        </Stack>
    </section>
);
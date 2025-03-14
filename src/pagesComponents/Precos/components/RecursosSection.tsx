import { Stack } from "@mui/material";
import Link from "next/link";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { RECURSOS_LIST } from "../constants/recursos";

export const RecursosSection = () => (
    <section className="py-16 px-4 bg-black/40">
        <Stack alignItems="center" spacing={4} maxWidth="1200px" margin="0 auto">
            <MatrixRainText
                text="Recursos Principais"
                className="text-3xl text-[#FF4081] mb-8" 
            />
            <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                <ul className="text-white/95 space-y-4">
                    {RECURSOS_LIST.slice(0, 3).map((recurso, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-[#0D95F9] mr-2 text-lg">›</span>
                            {recurso}
                        </li>
                    ))}
                </ul>
                <ul className="text-white space-y-4">
                    {RECURSOS_LIST.slice(3).map((recurso, index) => (
                        <li key={index + 3} className="flex items-center">
                            <span className="text-[#0D95F9] mr-2 text-lg">›</span>
                            {recurso}
                        </li>
                    ))}
                </ul>
            </div>
            <Link href="/recursos" className="text-[#0D95F9] hover:underline">
                Conheça todos os recursos →
            </Link>
        </Stack>
    </section>
);
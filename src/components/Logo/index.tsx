"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogoContainer } from "./styled";

type Props = {
    width: number;
    height: number;
}

export const Logo = ({ width, height }: Props) => {
    const router = useRouter();

    return (
        <LogoContainer onClick={() => router.push('/')}>
            <Image
                src="/assets/images/logo/Logo6.png"
                alt="Auge Invest"
                width={width}
                height={height}
            />
        </LogoContainer>
    );
}
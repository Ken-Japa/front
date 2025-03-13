"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogoContainer } from "./styled";

interface LogoProps {
    width?: number;
    height?: number;
    onClick?: () => void;
}

export const Logo = ({ width, height, onClick }: LogoProps) => {
    return (
        <LogoContainer onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <Image
                src="/assets/images/logo/Logo6.png"
                alt="Auge Invest"
                width={width}
                height={height}
            />
        </LogoContainer>
    );
}
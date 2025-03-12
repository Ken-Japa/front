"use client";

import { useEffect, useState } from "react";
import { Home } from "@/pagesComponents/Home";

export default function HomePage() {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const hasAnimationPlayed = localStorage.getItem('matrixAnimationPlayed');
        if (!hasAnimationPlayed) {
            setShowAnimation(true);
            localStorage.setItem('matrixAnimationPlayed', 'true');
        }
    }, []);

    return <Home showAnimation={showAnimation} />;
}
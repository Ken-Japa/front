"use client";
import { CustomButton } from "@/components/Custom/Button";
import { SectionWelcome } from "./styled";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useEffect, useState } from "react";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const Welcome = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const hasAnimationPlayed = localStorage.getItem('matrixAnimationPlayed');
        if (!hasAnimationPlayed) {
            setShowAnimation(true);
            localStorage.setItem('matrixAnimationPlayed', 'true');
        }
    }, []);

    return (
        <SectionWelcome>
            <div className="home">
                <div className="welcome">
                    <div className="title-left">
                        <MatrixRainText
                            text="Seja bem vindo a"
                            className="text-white"
                        />
                    </div>
                    <div className="title-right">
                        <MatrixRainText
                            text="Auge Invest"
                            className="text-white font-bold"
                        />
                    </div>
                </div>
                <div className="free-test container">
                    <div className="container-free-test">
                        <div className="text-white">
                            <MatrixRainText
                                text="O aplicativo perfeito para acompanhar o mercado. Insights, análises e ferramentas exclusivas."
                            />
                        </div>
                        <div className="text-white">
                            <MatrixRainText text="Faça parte desse time!" />
                        </div>
                        <CustomButton
                            value="Teste grátis por 21 dias"
                            Icon={CardGiftcardIcon}
                            color="primary"
                            align="center"
                        />
                    </div>
                </div>
            </div>
        </SectionWelcome>
    );
}
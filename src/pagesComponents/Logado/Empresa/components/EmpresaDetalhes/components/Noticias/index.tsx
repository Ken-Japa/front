import React, { useEffect, useRef, memo } from 'react';
import { Box } from '@mui/material';

interface NoticiasProps {
    symbol: string;
}

const NoticiasComponent: React.FC<NoticiasProps> = ({ symbol }) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        const currentContainer = container.current;

        const existingWidget = currentContainer.querySelector('script[src*="embed-widget-timeline"]');
        if (existingWidget) {
            existingWidget.remove();
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            feedMode: "symbol",
            symbol: `BMFBOVESPA:${symbol}`,
            isTransparent: false,
            displayMode: "adaptive",
            width: "100%",
            height: 500,
            colorTheme: "dark",
            locale: "br",
            utm_source: "www.trae.com",
            utm_medium: "widget",
            utm_campaign: "timeline",
            isCustomSize: true,
            enableScrolling: true
        });

        currentContainer.appendChild(script);

        return () => {
            const scriptElement = currentContainer.querySelector('script[src*="embed-widget-timeline"]');
            if (scriptElement) {
                scriptElement.remove();
            }
        };
    }, [symbol]);

    return (
        <Box sx={{ width: '100%', height: '500px', mb: 3 }}>
            <div className="tradingview-widget-container" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </Box>
    );
};

export const Noticias = memo(NoticiasComponent);
Noticias.displayName = 'Noticias';
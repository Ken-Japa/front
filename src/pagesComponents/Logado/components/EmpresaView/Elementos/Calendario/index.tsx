import React, { useEffect, useRef, memo } from 'react';
import { Box } from '@mui/material';

const CalendarioComponent: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        const currentContainer = container.current;

        // Clear any existing widgets first
        const existingWidget = currentContainer.querySelector('script[src*="embed-widget-events"]');
        if (existingWidget) {
            existingWidget.remove();
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            width: "100%",
            height: "100%",
            colorTheme: "dark",
            isTransparent: false,
            locale: "br",
            importanceFilter: "-1,0,1",
            countryFilter: "br"
        });

        currentContainer.appendChild(script);

        return () => {
            const scriptElement = currentContainer.querySelector('script[src*="embed-widget-events"]');
            if (scriptElement) {
                scriptElement.remove();
            }
        };
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '400px',
                '& .tradingview-widget-copyright': {
                    display: 'none'
                }
            }}
        >
            <div className="tradingview-widget-container" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </Box>
    );
};

export const Calendario = memo(CalendarioComponent);
Calendario.displayName = 'Calendario';
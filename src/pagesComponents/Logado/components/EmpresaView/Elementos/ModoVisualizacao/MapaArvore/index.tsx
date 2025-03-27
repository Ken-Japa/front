import React, { useEffect, useRef, memo } from 'react';
import { Box } from '@mui/material';

interface MapaArvoreProps {
    onLoadingChange?: (loading: boolean) => void;
}

const MapaArvoreComponent: React.FC<MapaArvoreProps> = ({ onLoadingChange }) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        onLoadingChange?.(true);
        const currentContainer = container.current;

        // Clear any existing widgets first
        const existingWidget = currentContainer.querySelector('script[src*="embed-widget-stock-heatmap"]');
        if (existingWidget) {
            existingWidget.remove();
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            exchanges: ["BMFBOVESPA"],
            dataSource: "AllBR",
            grouping: "sector",
            blockSize: "market_cap_basic",
            blockColor: "change",
            locale: "br",
            symbolUrl: "http://localhost:3000/empresa/{tvsymbol}",
            colorTheme: "dark",
            hasTopBar: true,
            isDataSetEnabled: false,
            isZoomEnabled: true,
            hasSymbolTooltip: true,
            isMonoSize: false,
            width: "100%",
            height: "100%"
        });

        currentContainer.appendChild(script);

        let attempts = 0;
        const maxAttempts = 10;
        const checkWidgetLoaded = setInterval(() => {
            attempts++;
            const widget = currentContainer.querySelector('.tradingview-widget-container__widget');
            if ((widget && widget.children.length > 0) || attempts >= maxAttempts) {
                clearInterval(checkWidgetLoaded);
                onLoadingChange?.(false);
            }
        }, 20);

        return () => {
            clearInterval(checkWidgetLoaded);
            onLoadingChange?.(false);
            const scriptElement = currentContainer.querySelector('script[src*="embed-widget-stock-heatmap"]');
            if (scriptElement) {
                scriptElement.remove();
            }
        };
    }, [onLoadingChange]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '800px',
                minHeight: '600px',
                flex: '1 1 auto',
                display: 'flex',
                position: 'relative',
                '& .tradingview-widget-copyright': {
                    display: 'none'
                },
                '& .tradingview-widget-container': {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                '& .tradingview-widget-container__widget': {
                    width: '100%',
                    height: '100%'
                }
            }}
        >
            <div className="tradingview-widget-container" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </Box>
    );
};

export const MapaArvore = memo(MapaArvoreComponent);
MapaArvore.displayName = 'MapaArvore';


import React, { useEffect, useRef } from 'react';
import { Network, NetworkEvents } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';

interface GraphProps {
  graph: {
    nodes: any[];
    edges: any[];
  };
  options: any;
  events: {
    [key in NetworkEvents]?: (params: any) => void;
  };
}

export const CustomGraph: React.FC<GraphProps> = ({ graph, options, events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Import vis-network modules dynamically to avoid SSR issues
    const initNetwork = async () => {
      try {
        const { DataSet } = await import('vis-data/standalone');
        const { Network } = await import('vis-network/standalone');

        // Create datasets
        const nodes = new DataSet(graph.nodes);
        const edges = new DataSet(graph.edges);

        // Create network
        const network = new Network(
          containerRef.current!,
          { nodes, edges },
          options
        );

        // Register events
        if (events) {
          Object.entries(events).forEach(([eventName, callback]) => {
            // Cast eventName to NetworkEvents to satisfy TypeScript
            network.on(eventName as NetworkEvents, callback);
          });
        }

        networkRef.current = network;
      } catch (error) {
        console.error('Error initializing network:', error);
      }
    };

    initNetwork();

    // Cleanup function
    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
        networkRef.current = null;
      }
    };
  }, [graph, options, events]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%' 
      }} 
    />
  );
};
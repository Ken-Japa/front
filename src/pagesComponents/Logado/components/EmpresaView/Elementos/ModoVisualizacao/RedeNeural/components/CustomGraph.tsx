import React, { useEffect, useRef } from 'react';
import { Network, NetworkEvents } from 'vis-network/standalone';
import { Node, Edge, Options } from 'vis-network/standalone';
import { DataSet } from 'vis-data/standalone';
import 'vis-network/styles/vis-network.css';

interface GraphProps {
  graph: {
    nodes: Node[];
    edges: Edge[];
  };
  options: Options;
  events: {
    [key in NetworkEvents]?: (params: any) => void;
  };
}

export const CustomGraph: React.FC<GraphProps> = ({ graph, options, events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initNetwork = async () => {
      try {
        // Create datasets
        // Add id to edges if not present
        const edgesWithIds = graph.edges.map((edge, index) => ({
          ...edge,
          id: edge.id || `${edge.from}-${edge.to}-${index}`
        }));

        const nodes = new DataSet<Node>(graph.nodes);
        const edges = new DataSet<Edge>(edgesWithIds);

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
        console.error('Erro ao inicializar rede:', error);
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
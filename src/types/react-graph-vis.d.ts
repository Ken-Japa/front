declare module 'react-graph-vis' {
  import { Component } from 'react';

  export interface Node {
    id: string;
    label: string;
    title?: string;
    color?: string | {
      background?: string;
      border?: string;
      opacity?: number;
    };
    size?: number;
    font?: {
      size?: number;
      color?: string;
    };
  }

  export interface Edge {
    from: string;
    to: string;
    color?: string;
  }

  export interface GraphData {
    nodes: Node[];
    edges: Edge[];
  }

  export interface GraphEvents {
    select?: (params: { nodes: string[]; edges: string[] }) => void;
    // Add other events as needed
  }

  export interface GraphOptions {
    nodes?: any;
    edges?: any;
    physics?: any;
    height?: string;
    width?: string;
    background?: string;
  }

  export interface GraphProps {
    graph: GraphData;
    options?: GraphOptions;
    events?: GraphEvents;
    style?: React.CSSProperties;
  }

  export default class Graph extends Component<GraphProps> {}
}
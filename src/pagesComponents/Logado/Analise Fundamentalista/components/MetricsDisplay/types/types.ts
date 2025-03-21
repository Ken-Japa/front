import { MetricType } from "../constants/constants";

export interface MetricCardProps {
  title: string;
  value: number;
  formula: string;
  description: string;
  missingFields?: string[];
  type: MetricType;
}

export interface MetricCategory {
  title: string;
  metrics: {
    title: string;
    value: number;
    formula: string;
    description: string;
    missingFields: string[];
    type: MetricType;
  }[];
}

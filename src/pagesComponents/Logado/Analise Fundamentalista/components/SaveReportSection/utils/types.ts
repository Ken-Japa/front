import { SaveReportOptions } from "../index";
import { DadosAnaliseFundamental, MetricasCalculadas } from "../../../types";
import {
  ValuationResults,
  SensitivityResults,
} from "../../ValuationSection/types";

export interface GenerateReportParams {
  options: SaveReportOptions;
  fundamentalData: DadosAnaliseFundamental;
  valuationResults: ValuationResults | null;
  sensitivityResults: SensitivityResults | null;
  metricsResults?: MetricasCalculadas;
}

export type MetricName =
  | "precoLucro"
  | "evEbitda"
  | "margemLiquida"
  | "roe"
  | "roic"
  | "dividaLiquidaEbitda"
  | "dividendYield"
  | "precoValorPatrimonial"
  | "margemBruta"
  | "payoutRatio"
  | "evReceita"
  | "margemOperacional";

export interface MetricItem {
  name: string;
  value: number | undefined;
  key?: MetricName;
  isCurrency?: boolean;
}
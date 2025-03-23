import { GenerateReportParams } from "./types";
import {
  generateBasicInfo,
  generateOperationalMetrics,
  generateMargins,
  generateProfitability,
  generateDebt,
  generateMultiples,
  generateValuation,
  generateSensitivity,
  generateAdditionalInputs,
} from "./sections";

export const generateReport = ({
  options,
  fundamentalData,
  valuationResults,
  sensitivityResults,
  metricsResults,
}: GenerateReportParams): string => {
  let report = `# ${options.companyName}\n\n`;

  report += generateBasicInfo(fundamentalData);
  report += `## Métricas Financeiras\n\n`;
  report += generateOperationalMetrics(fundamentalData);
  report += generateAdditionalInputs(fundamentalData);
  report += generateMargins(metricsResults, options);
  report += generateProfitability(metricsResults, options);
  report += generateDebt(fundamentalData, options);
  report += generateMultiples(metricsResults, options);
  report += generateValuation(valuationResults, options);
  report += generateSensitivity(sensitivityResults);

  return report;
};

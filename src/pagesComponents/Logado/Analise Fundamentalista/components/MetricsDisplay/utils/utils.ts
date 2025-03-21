import React, { ReactNode } from "react";
import { MetricType } from "../constants/constants";
import { UnitText } from "../styled";

export const formatMetricValue = (
  value: number,
  type: MetricType
): ReactNode => {
  switch (type) {
    case "currency":
      return React.createElement(
        React.Fragment,
        null,
        `R$ ${value.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`
      );
    case "multiplier":
      return React.createElement(
        React.Fragment,
        null,
        value.toLocaleString("pt-BR", { maximumFractionDigits: 2 }),
        React.createElement(UnitText, null, "x")
      );
    case "percentage":
      return React.createElement(
        React.Fragment,
        null,
        value.toLocaleString("pt-BR", { maximumFractionDigits: 2 }),
        React.createElement(UnitText, null, "%")
      );
    default:
      return React.createElement(
        React.Fragment,
        null,
        value.toLocaleString("pt-BR", { maximumFractionDigits: 2 })
      );
  }
};

export const checkMissingFields = <T extends Record<string, any>>(
  data: T,
  fields: Array<keyof T>,
  getFieldLabel: (field: keyof T) => string
): string[] => {
  return fields.filter((field) => !data[field]).map(getFieldLabel);
};

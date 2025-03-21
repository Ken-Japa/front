import { Control } from "react-hook-form";
import { DadosAnaliseFundamental } from "../../../types";

export interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export interface FormFieldProps {
  control: Control<DadosAnaliseFundamental>;
  name: keyof DadosAnaliseFundamental;
  label: string;
  tooltip: string;
}

import { z } from "zod";

export type QuoteFormData = {
  name: string;
  lastname: string;
  company: string;
  companyId: string;
  email: string;
  phone: number | null;
  average: AverageType;
  serviceType: ServiceType;
};

export const averageTypeSchema = z.enum([
  "Selecciona",
  "La empresa no tiene carga mensual",
  "Menos de $1,000 USD",
  "De $1,000 a $10,000 USD",
  "De $11,000 a $20,000 USD",
  "De $21,000 a $100,000 USD",
  "Más de $100,000 USD",
]);

export type AverageType = z.infer<typeof averageTypeSchema>;

export const serviceTypeSchema = z.enum([
  "Selecciona",
  "FCL",
  "LCL",
  "FTL",
  "LTL",
  "Aéreo",
  "Terrestre",
  "Marítimo",
]);

export type ServiceType = z.infer<typeof serviceTypeSchema>;

export type Service = {
  name: string;
  img: string;
  description: string;
};

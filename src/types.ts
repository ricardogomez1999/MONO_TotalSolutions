import { z } from "zod";

export type QuoteFormData = {
  name: string;
  lastname: string;
  company: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  message: string;
};

export const serviceTypeSchema = z.enum([
  "select",
  "logistics",
  "commercial",
  "rental",
]);

export type ServiceType = z.infer<typeof serviceTypeSchema>;

export type Service = {
  id: string;
  img: string;
  titleKey: string;
  descriptionKey: string;
  imageAltKey: string;
};

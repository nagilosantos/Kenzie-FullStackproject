import { z } from "zod";
import { usertSchemaResponse } from "./userSchema";

export const contactSchema = z.object({
  name: z.string().max(45),
  email: z.string().email(),
  phone: z.string().max(45),
});

export const contactSchemaResponse = contactSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});

export const ContactWithClientSchemaResponse = contactSchemaResponse.extend({
  user: usertSchemaResponse,
});

export const contactListSchema = contactSchemaResponse.array();

export const updateContactSchema = contactSchema.partial();

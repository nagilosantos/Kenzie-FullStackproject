import { z } from "zod";

export const userSchema = z.object({
  name: z.string().max(45),
  email: z.string().email(),
  phone: z.string().max(45),
  password: z.string().max(120),
});

export const usertSchemaResponse = userSchema
  .extend({
    id: z.number(),
    createdat: z.date().optional(),
  })
  .omit({ password: true });

export const userListSchema = usertSchemaResponse.array();

export const updateUserSchema = userSchema.partial();

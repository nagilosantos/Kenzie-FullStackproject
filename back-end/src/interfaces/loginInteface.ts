import { z } from "zod";
import { createLoginSchema } from "../schemas/loginSchema";

export type ILogin = z.infer<typeof createLoginSchema>;

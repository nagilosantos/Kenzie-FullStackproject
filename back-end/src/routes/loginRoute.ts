import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { createLoginSchema } from "../schemas/loginSchema";
import { login } from "../controllers/loginController";

export const loginRoutes = Router();

loginRoutes.post("", ensureDataIsValid(createLoginSchema), login);

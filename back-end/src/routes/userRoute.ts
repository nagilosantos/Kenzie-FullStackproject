import { Router } from "express";
import { validateEmail } from "../middlewares/validateEmail";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { updateUserSchema, userSchema } from "../schemas/userSchema";
import { userController } from "../controllers/userController";
import { validateToken } from "../middlewares/validateToken";
import { verifyUserId } from "../middlewares/verifiUserId";
import { validateIsOwnerOnly } from "../middlewares/validateIsOwnerOnly";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateEmail,
  ensureDataIsValid(userSchema),
  userController.create
);

userRoutes.use(validateToken);

userRoutes.get("", userController.list);

userRoutes.get("/:id", verifyUserId, userController.retrieve);

userRoutes.patch(
  "/:id",
  verifyUserId,
  validateIsOwnerOnly,
  ensureDataIsValid(updateUserSchema),
  userController.update
);

userRoutes.delete(
  "/:id",
  verifyUserId,
  validateIsOwnerOnly,
  userController.del
);

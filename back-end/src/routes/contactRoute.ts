import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchema, updateContactSchema } from "../schemas/contactSchema";
import { contactController } from "../controllers/contactController";
import { validateContactID } from "../middlewares/validateContactId";
import { verifyContactPermission } from "../middlewares/validateContactPermission";

export const contactRoutes = Router();

contactRoutes.use(validateToken);

contactRoutes.post(
  "",
  ensureDataIsValid(contactSchema),
  contactController.create
);

contactRoutes.get("", contactController.list);

contactRoutes.get(
  "/:id",
  validateContactID,
  verifyContactPermission,
  contactController.retrieve
);

contactRoutes.patch(
  "/:id",
  validateContactID,
  verifyContactPermission,
  ensureDataIsValid(updateContactSchema),
  contactController.update
);

contactRoutes.delete(
  "/:id",
  validateContactID,
  verifyContactPermission,
  contactController.del
);

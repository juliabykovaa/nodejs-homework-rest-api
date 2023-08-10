import express from "express";
import contactsSchemas from "../../schemas/contacts-schemas.js";
import contactsController from "../../controllers/contacts-controller.js";
import { validateBody } from "../../decorators/index.js";
import { isEmptyBody, isValidId } from "../../middlewars/index.js";
const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getContacts);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.postContact
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteContact);

contactsRouter.put(
  "/:id", isValidId, 
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsController.updateFavorite
);

export default contactsRouter;

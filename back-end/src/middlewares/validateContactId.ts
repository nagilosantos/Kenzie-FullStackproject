import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { iContactRepository } from "../interfaces/contactInterfaces";
import { AppError } from "../errors/AppError";

export const validateContactID = async (
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const contactFind = await contactRepository.findOne({
    where: {
      id: parseInt(request.params.id),
    },
  });

  if (!contactFind) {
    throw new AppError("Contact not found!", 404);
  }
  return next();
};

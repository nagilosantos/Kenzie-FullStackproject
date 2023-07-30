import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { iContactRepository } from "../interfaces/contactInterfaces";
import { Contact } from "../entities";

export const verifyContactPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const contactId = parseInt(request.params.id);
  const userId = request.user.id;

  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const foundContact = await contactRepository.findOne({
    where: {
      id: contactId,
      user: {
        id: parseInt(userId),
      },
    },
  });

  if (!foundContact) {
    return response
      .status(401)
      .json({ message: "You don`t have permissions." });
  }

  next();
};

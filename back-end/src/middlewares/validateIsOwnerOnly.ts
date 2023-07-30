import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

export const validateIsOwnerOnly = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const UserID = request.user.id;
  const reqUserID = parseInt(request.params.id);

  if (parseInt(UserID) !== reqUserID) {
    return response
      .status(401)
      .json({ message: "You don`t have permissions." });
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: parseInt(UserID),
    },
    relations: {
      Contacts: true,
    },
  });

  if (!user) {
    return response.status(404).json({ message: "User not found!" });
  }

  return next();
};

import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { iUserRepository } from "../interfaces/userInterfaces";
import { User } from "../entities";
import { AppError } from "../errors/AppError";

export const verifyUserId = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: iUserRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOne({
    where: {
      id: parseInt(request.params.id) || parseInt(request.user.id),
    },
  });

  if (!userFind) {
    throw new AppError("User not found!", 404);
  }
  return next();
};

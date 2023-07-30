import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { AppError } from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { iUserRepository } from "../interfaces/userInterfaces";

export const validateEmail = async (
    request: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const userRepository: iUserRepository = AppDataSource.getRepository(User);
  
    const emailFind = await userRepository.findOne({
      where: {
        email: request.body.email,
      },
    });
  
    if (!!emailFind) {
      throw new AppError("Email already exists", 409);
    }
    return next();
  };
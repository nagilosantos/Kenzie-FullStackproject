import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";
import {
  IUpdateUser,
  IUserReturn,
  iUserRepository,
} from "../../interfaces/userInterfaces";
import { usertSchemaResponse } from "../../schemas/userSchema";

export const updateUser = async (
  id: number,
  userData: IUpdateUser
): Promise<IUserReturn> => {
  const userEntry = Object.keys(userData);
  if (userEntry.length == 0) {
    throw new AppError("invalid data!", 400);
  }

  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const prevUser = await userRepostitory.findOneBy({
    id: id,
  });

  const user = userRepostitory.create({
    ...prevUser,
    ...userData,
  });

  await userRepostitory.save(user);

  const userModified = usertSchemaResponse.parse(user);
  return userModified;
};

import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IUser,
  IUserReturn,
  iUserRepository,
} from "../../interfaces/userInterfaces";
import { usertSchemaResponse } from "../../schemas/userSchema";

export const createUser = async (userData: IUser): Promise<IUserReturn> => {
  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const user: User = userRepostitory.create(userData);

  await userRepostitory.save(user);

  const newUser = usertSchemaResponse.parse(user);

  return newUser;
};

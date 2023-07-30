import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IAllUserResponse,
  iUserRepository,
} from "../../interfaces/userInterfaces";
import { userListSchema } from "../../schemas/userSchema";

export const listUsers = async (): Promise<IAllUserResponse> => {
  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const userFind: Array<User> = await userRepostitory.find();

  const userList = userListSchema.parse(userFind);
  return userList;
};

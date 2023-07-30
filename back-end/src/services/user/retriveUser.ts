import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IUserWithContact,
  iUserRepository,
} from "../../interfaces/userInterfaces";
import { usertSchemaResponse } from "../../schemas/userSchema";

export const retrieveUser = async (id: string): Promise<IUserWithContact> => {
  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const finduser = await userRepostitory.findOne({
    where: {
      id: parseInt(id),
    },
    relations: {
      Contacts: true,
    },
  });

  const user = usertSchemaResponse.parse(finduser!);

  const contacts = finduser ? finduser.Contacts : [];

  return { user, contacts };
};

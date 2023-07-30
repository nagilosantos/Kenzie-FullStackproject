import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserRepository } from "../../interfaces/userInterfaces";

export const deleteUser = async (id: number): Promise<void> => {
  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const user = await userRepostitory.findOne({
    where: {
      id: id,
    },
    relations: ["Contacts"],
  });

  const contacts = user!.Contacts;

  for (const contact of contacts) {
    await userRepostitory.manager.remove(contact);
  }

  await userRepostitory.remove(user!);
};

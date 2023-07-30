import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../errors/AppError";
import {
  IContact,
  IContactReturn,
  iContactRepository,
} from "../../interfaces/contactInterfaces";
import { iUserRepository } from "../../interfaces/userInterfaces";
import { contactSchemaResponse } from "../../schemas/contactSchema";

export const createContact = async (
  contactsData: IContact,
  userID: number
): Promise<IContactReturn> => {
  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);
  const userRepostitory: iUserRepository = AppDataSource.getRepository(User);

  const user = await userRepostitory.findOneBy({
    id: userID,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactRepository.create({
    ...contactsData,
    user: user!,
  });

  await contactRepository.save(contact);

  const newContact = contactSchemaResponse.parse(contact);

  return newContact;
};

import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  IContactList,
  iContactRepository,
} from "../../interfaces/contactInterfaces";
import { contactListSchema } from "../../schemas/contactSchema";

export const listContacts = async (): Promise<IContactList> => {
  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const findContacts: Array<Contact> = await contactRepository.find();

  const contacts = contactListSchema.parse(findContacts);

  return contacts;
};

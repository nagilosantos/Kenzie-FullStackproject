import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors/AppError";
import {
  IContactReturn,
  IUpdateContact,
  iContactRepository,
} from "../../interfaces/contactInterfaces";
import { contactSchemaResponse } from "../../schemas/contactSchema";

export const editContatcts = async (
  ContactData: IUpdateContact,
  id: number
): Promise<IContactReturn> => {
  const contactsEntry = Object.keys(ContactData);
  if (contactsEntry.length == 0) {
    throw new AppError("invalid data!", 400);
  }

  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const prevContacts = await contactRepository.findOneBy({
    id: id,
  });

  const contact = contactRepository.create({
    ...prevContacts,
    ...ContactData,
  });

  await contactRepository.save(contact);

  const editedContact = contactSchemaResponse.parse(contact);

  return editedContact;
};

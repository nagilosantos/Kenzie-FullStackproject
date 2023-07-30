import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  IContactReturn,
  iContactRepository,
} from "../../interfaces/contactInterfaces";
import { ContactWithClientSchemaResponse } from "../../schemas/contactSchema";

export const getContactById = async (id: number): Promise<IContactReturn> => {
  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const findContacts = await contactRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });

  const contact = ContactWithClientSchemaResponse.parse(findContacts!);

  return contact;
};

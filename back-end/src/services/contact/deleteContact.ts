import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { iContactRepository } from "../../interfaces/contactInterfaces";

export const deleteContacts = async (id: number): Promise<void> => {
  const contactRepository: iContactRepository =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: id,
    },
  });

  await contactRepository.remove(contact!);
};

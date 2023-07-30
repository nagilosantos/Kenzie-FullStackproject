import { Request, Response } from "express";
import { IContact } from "../../interfaces/contactInterfaces";
import { createContact } from "../../services/contact/createContact";
import { listContacts } from "../../services/contact/listContatcts";
import { editContatcts } from "../../services/contact/editContacts";
import { getContactById } from "../../services/contact/getContactById";
import { deleteContacts } from "../../services/contact/deleteContact";

const create = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: IContact = request.body;
  const userId = parseInt(request.user.id);

  const contactCreated = await createContact(contactData, userId);

  return response.status(200).json(contactCreated);
};

const list = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const listedContact = await listContacts();
  return response.json(listedContact);
};

const update = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: IContact = request.body;
  const Id = parseInt(request.params.id);

  const updatedContact = await editContatcts(contactData, Id);

  return response.json(updatedContact);
};

const retrieve = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const Id = parseInt(request.params.id);

  const retriveContact = await getContactById(Id);

  return response.json(retriveContact);
};

const del = async (request: Request, response: Response) => {
  const Id = parseInt(request.params.id);

  await deleteContacts(Id);
  return response.status(204).send();
};

export default { create, list, update, del, retrieve };

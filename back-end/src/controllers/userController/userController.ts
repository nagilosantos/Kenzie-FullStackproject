import { Request, Response } from "express";
import { IUser } from "../../interfaces/userInterfaces";
import { createUser } from "../../services/user/createUser";
import { listUsers } from "../../services/user/listUsers";
import { updateUser } from "../../services/user/updateUser";
import { retrieveUser } from "../../services/user/retriveUser";
import { deleteUser } from "../../services/user/deleteUser";

const create = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: IUser = request.body;

  const newUser = await createUser(userData);

  return response.status(201).json(newUser);
};

const list = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const listedUsers = await listUsers();

  return response.json(listedUsers);
};

const update = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: IUser = request.body;
  const id = parseInt(request.params.id);

  const userUpdate = await updateUser(id, userData);

  return response.json(userUpdate);
};

const retrieve = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = request.user.id;

  const { user, contacts } = await retrieveUser(id);

  const userContacts = {
    user: user,
    contacts: contacts,
  };

  return response.json(userContacts);
};

const del = async (request: Request, response: Response): Promise<Response> => {
  const id = parseInt(request.params.id);
  await deleteUser(id);

  return response.status(204).send();
};

export default { create, list, update, del, retrieve };

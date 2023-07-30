import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  userListSchema,
  userSchema,
  usertSchemaResponse,
} from "../schemas/userSchema";
import { User } from "../entities";
import { IContactListReturn } from "./contactInterfaces";

export type IUser = z.infer<typeof userSchema>;

export type IUserReturn = z.infer<typeof usertSchemaResponse>;

export type IAllUserResponse = z.infer<typeof userListSchema>;

export type iUserRepository = Repository<User>;

export type IUpdateUser = DeepPartial<IUser>;

export interface IUserWithContact {
  user: IUserReturn;
  contacts: IContactListReturn;
}

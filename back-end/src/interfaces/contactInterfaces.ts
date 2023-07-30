import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Contact } from "../entities";
import {
  contactListSchema,
  contactSchema,
  contactSchemaResponse,
} from "../schemas/contactSchema";
import { IUserReturn } from "./userInterfaces";

export type IContact = z.infer<typeof contactSchema>;

export type IContactReturn = z.infer<typeof contactSchemaResponse>;

export type IContactList = z.infer<typeof contactListSchema>;

export type iContactRepository = Repository<Contact>;

export type IUpdateContact = DeepPartial<IContact>;

export interface IContactWithClientReturn {
  contact: IContactReturn;
  user: IUserReturn;
}

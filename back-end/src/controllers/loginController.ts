import { Request, Response } from "express";
import { loginService } from "../services/login/createLogin";

export const login = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const getToken = await loginService(request.body);

  return response.json({ token: getToken });
};

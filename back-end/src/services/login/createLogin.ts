import jwt from "jsonwebtoken";
import "dotenv/config";
import { ILogin } from "../../interfaces/loginInteface";
import { iUserRepository } from "../../interfaces/userInterfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";

export const loginService = async (loginData: ILogin): Promise<string> => {
  const userRepository: iUserRepository = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

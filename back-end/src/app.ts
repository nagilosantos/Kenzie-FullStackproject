import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleAppError } from "./middlewares/haldleAppError.middleware";
import { userRoutes } from "./routes/userRoute";
import { loginRoutes } from "./routes/loginRoute";
import { contactRoutes } from "./routes/contactRoute";

const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use(handleAppError);

export default app;

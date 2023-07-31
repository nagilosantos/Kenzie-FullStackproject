import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleAppError } from "./middlewares/haldleAppError.middleware";
import { userRoutes } from "./routes/userRoute";
import { loginRoutes } from "./routes/loginRoute";
import { contactRoutes } from "./routes/contactRoute";
import cors from 'cors';


const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use(handleAppError);

export default app;

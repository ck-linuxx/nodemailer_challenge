import { Router } from "express";
import { EmailController } from "./controllers/EmailController";

export const routes = Router()

const emailController = new EmailController()

routes.get("/send", emailController.handle)
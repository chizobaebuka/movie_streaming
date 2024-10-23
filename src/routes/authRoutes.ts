import { Router } from "express";
import AuthController from "../controllers/AuthController";
import authMiddleware from "../middleware/authMiddleware";

const authRouter = Router();

authRouter.post('/signup', AuthController.register)
authRouter.post('/login', AuthController.login)
authRouter.get('/', AuthController.getAllUsers)
authRouter.get('/:id', AuthController.getUserById)
authRouter.put('/:id', AuthController.updateUser)

export default authRouter;
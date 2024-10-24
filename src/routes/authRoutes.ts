import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

/**
   * @swagger
   * tags:
   *   name: Movies
   *   description: API endpoints to manage movies 
*/

authRouter.post('/signup', AuthController.register)
authRouter.post('/login', AuthController.login)
authRouter.get('/', AuthController.getAllUsers)
authRouter.get('/:id', AuthController.getUserById)
authRouter.put('/update/:id', AuthController.updateUser)

export default authRouter;
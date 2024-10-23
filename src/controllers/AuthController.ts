import { Request, Response } from 'express';
import AuthService from '../services/AuthService'
import { createUserSchema, loginUserSchema } from '../utils/validators';

class AuthController {
    public async register(req: Request, res: Response) {
        try {
            const validatedData = createUserSchema.parse(req.body);
            const user = await AuthService.createUser(validatedData);
            res.status(201).json({
                status: 'success',
                message: 'User created successfully',
                data: user,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const validatedData = loginUserSchema.parse(req.body);
            const user = await AuthService.loginUser(validatedData);
            res.status(200).json({
                status: 'success',
                message: 'User logged in successfully',
                data: user,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async getAllUsers(req: Request, res: Response) {
        try {
            const users = await AuthService.getAllUsers();
            res.status(200).json({
                status: 'success',
                message: 'Users retrieved successfully',
                data: users,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const user = await AuthService.getUserById(id);

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({
                status: 'success',
                message: 'User retrieved successfully',
                data: user,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedUser = await AuthService.updateUser(id, req.body);

            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({
                status: 'success',
                message: 'User updated successfully',
                data: updatedUser,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}

export default new AuthController();
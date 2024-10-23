import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users';
import { IUser, IUserWithoutPassword } from '../models/interfaces';

class AuthService {
    public async createUser(data: Omit<IUser, "id" | "createdAt" | "updatedAt">): Promise<IUserWithoutPassword> {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(data.password, salt);

        // Create user instance
        const user = await User.create({
            ...data,
            password: hashedPassword,
        });

        // Omit password from the user object
        const { password, ...userWithoutPassword } = user.get();
        return userWithoutPassword as IUserWithoutPassword; // Return user data without the password
    }

    public async loginUser(data: Pick<IUser, 'email' | 'password'>): Promise<string> {
        const user = await User.findOne({ where: { email: data.email } });
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
        return token;
    }

    public async getAllUsers(): Promise<IUserWithoutPassword[]> {
        const users = await User.findAll();
        return users.map((user) => {
            const { password, ...userWithoutPassword } = user.get();
            return userWithoutPassword as IUserWithoutPassword;
        });
    }

    public async getUserById(id: string): Promise<IUserWithoutPassword | null> {
        const user = await User.findByPk(id);
        if (!user) {
            return null;
        }

        const { password, ...userWithoutPassword } = user.get();
        return userWithoutPassword as IUserWithoutPassword;
    }

    public async updateUser(id: string, data: Partial<IUser>): Promise<IUserWithoutPassword | null> {
        const user = await User.findByPk(id);
        if (!user) {
            return null;
        }

        const updatedUser = await user.update(data);
        const { password, ...userWithoutPassword } = updatedUser.get();
        return userWithoutPassword as IUserWithoutPassword;
    }

    public async deleteUser(id: string): Promise<void> {
        await User.destroy({ where: { id } });
    }
}

export default new AuthService();

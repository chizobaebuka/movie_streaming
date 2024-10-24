import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginUserSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const createGenreSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

export const createMovieSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    rating: z.number().min(0, "Rating must be a positive number").max(10, "Rating must be between 0 and 10"),
    genreId: z.string().uuid("Invalid genreId format"),
});

export const updateMovieSchema = z.object({
    title: z.string().min(1, "Title is required").optional(),
    description: z.string().min(10, "Description must be at least 10 characters long").optional(),
    rating: z.number().min(0, "Rating must be a positive number").max(10, "Rating must be between 0 and 10").optional(),
    genreId: z.string().uuid("Invalid genreId format").optional(),
});
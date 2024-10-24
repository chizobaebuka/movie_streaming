import { Request, Response } from 'express';
import AuthService from '../services/AuthService'
import { createGenreSchema, createMovieSchema, createUserSchema, loginUserSchema, updateMovieSchema } from '../utils/validators';
import MovieService from '../services/MovieService';
import { WatchState } from '../models/interfaces';

class MovieController {
    public async createMovie(req: Request, res: Response) {
        try {
            const movieData = createMovieSchema.parse(req.body);
            const movie = await MovieService.createMovie(movieData);
            res.status(201).json({
                status: 'success',
                message: 'Movie created successfully',
                data: movie,
            });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    public async getAllMovies(req: Request, res: Response) {
        try {
            const movies = await MovieService.getMovies();
            res.status(200).json({
                status: 'success',
                message: 'Movies retrieved successfully',
                data: movies,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async getMovieById(req: Request, res: Response) {
        try {
            const movieId = req.params.id;
            const movie = await MovieService.getMovieById(movieId);
            if (movie) {
                res.status(200).json({
                    status: 'success',
                    message: 'Movie retrieved successfully',
                    data: movie,
                });
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        } catch (err: any) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }

    public async updateMovie(req: Request, res: Response) {
        const movieId = req.params.id;
        try {
            const movieData = updateMovieSchema.parse(req.body);
            const [rowsUpdated, updatedMovies] = await MovieService.updateMovie(movieId, movieData);
            if (rowsUpdated) {
                res.status(200).json({
                    status: 'success',
                    message: 'Movie updated successfully',
                    data: updatedMovies,
                });
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    public async deleteMovie(req: Request, res: Response) {
        const movieId = req.params.id;
        try {
            const rowsDeleted = await MovieService.deleteMovie(movieId);
            if (rowsDeleted) {
                res.status(200).json({
                    status: 'success',
                    message: 'Movie deleted successfully',
                });
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async saveWatchState(req: Request, res: Response): Promise<void> {
        try {
            const movieId = req.params.id;
            const { watchState } = req.body;

            if (!Object.values(WatchState).includes(watchState)) {
                res.status(400).json({ error: "Invalid watch state provided." });
                return; // Ensure we exit after sending a response
            }

            await MovieService.saveWatchState(movieId, watchState);

            res.status(200).json({
                status: 'success',
                message: 'Watch state saved successfully',
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error instanceof Error ? error.message : "An unexpected error occurred." });
            return; // Ensure we exit after sending a response
        }
    }
}

export default new MovieController();
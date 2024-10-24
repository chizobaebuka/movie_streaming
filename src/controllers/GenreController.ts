import { Request, Response } from "express";
import { createGenreSchema } from "../utils/validators";
import GenreService from "../services/GenreService";

class GenreController {
    public async createGenre(req: Request, res: Response) {
        try {
            const genreData = createGenreSchema.parse(req.body);
            const genre = await GenreService.createMovieGenre(genreData);
            if (!genre) {
                res.status(400).json({ error: "Genre already exists" });
            }

            res.status(201).json({
                status: "success",
                message: "Genre created successfully",
                data: genre,
            })
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async getAllGenres(req: Request, res: Response) {
        try {
            const genres = await GenreService.getAllGenres();
            if (genres.length === 0) {
                res.status(404).json({ message: 'No genres found' });
                return;
            }
            res.status(200).json({
                status: 'success',
                message: 'Genres retrieved successfully',
                data: genres,
            });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    public async getGenreById(req: Request, res: Response) {
        try {
            const genreId = req.params.id;
            const genre = await GenreService.getGenreById(genreId);
            if (genre) {
                res.status(200).json({
                    status: 'success',
                    message: 'Genre retrieved successfully',
                    data: genre,
                });
            } else {
                res.status(404).json({ error: 'Genre not found' });
            }
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}

export default new GenreController();
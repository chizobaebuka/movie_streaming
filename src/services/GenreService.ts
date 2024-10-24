import Genre from "../models/genres";
import { IGenre, IGenreCreation } from "../models/interfaces";


class GenreService {
    public async createMovieGenre(genreData: IGenreCreation): Promise<IGenre> {
        return await Genre.create(genreData);
    }

    public async getAllGenres(): Promise<IGenre[]> {
        return await Genre.findAll();
    }

    public async getGenreById(genreId: string): Promise<IGenre | null> {
        return await Genre.findByPk(genreId);
    }
}

export default new GenreService();

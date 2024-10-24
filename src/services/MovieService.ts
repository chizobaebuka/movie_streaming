import { IMovie, IMovieCreation } from "../models/interfaces";
import Movie from "../models/movies";

class MovieService {
    public async createMovie(movieData: IMovieCreation): Promise<IMovie> {
        return await Movie.create(movieData);
    }

    public async getMovies(): Promise<IMovie[]> {
        return await Movie.findAll();
    }

    public async getMovieById(movieId: string): Promise<IMovie | null> {
        return await Movie.findByPk(movieId);
    }

    public async updateMovie(movieId: string, movieData: Partial<IMovieCreation>): Promise<[number, IMovie[]]> {
        return await Movie.update(movieData, {
            where: { id: movieId },
            returning: true,
        });
    }

    public async deleteMovie(movieId: string): Promise<number> {
        return await Movie.destroy({
            where: { id: movieId },
        });
    }

    public async saveWatchState(movieId: string, watchState: string): Promise<[number, IMovie[]]> {
        return await Movie.update({ watchState }, {
            where: { id: movieId },
            returning: true,
        });
    }
}

export default new MovieService();
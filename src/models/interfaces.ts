import { Optional } from "sequelize";

export interface ICore {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser extends ICore {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserWithoutPassword extends Omit<IUser, 'password'> { }


export enum WatchState {
    UNWATCHED = 'unwatched',
    WATCHING = 'watching',
    WATCHED = 'watched'
}
export interface IMovie extends ICore {
    title: string;
    description: string;
    rating: number;
    genreId: string;
}

// Optional fields for creating a movie (id, createdAt, updatedAt are auto-generated)
export interface IMovieCreation extends Optional<IMovie, "id" | "createdAt" | "updatedAt"> { }


export interface IGenre extends ICore {
    name: string;
}

export interface IGenreCreation extends Optional<IGenre, 'id' | 'createdAt' | 'updatedAt'> { }

export interface IWatchlist extends ICore {
    userId: string;
    movieId: string;
}

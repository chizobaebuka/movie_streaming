export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IMovie {
    id: string;
    title: string;
    description: string;
    genreId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGenre {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IWatchlist {
    id: string;
    userId: string;
    movieId: string;
    createdAt: Date;
    updatedAt: Date;
}

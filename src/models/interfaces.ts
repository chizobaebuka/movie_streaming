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

export interface IUserWithoutPassword extends Omit<IUser, 'password'> {}

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

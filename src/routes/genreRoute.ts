import { Router } from 'express';
import GenreController from '../controllers/GenreController';
import authMiddleware from '../middleware/authMiddleware';

const genreRouter = Router();

/**
   * @swagger
   * tags:
   *   name: Genre
   *   description: API endpoints to manage genre routes
*/


genreRouter.post('/create', authMiddleware, GenreController.createGenre)
genreRouter.get('/', authMiddleware, GenreController.getAllGenres)
genreRouter.get('/:id', authMiddleware, GenreController.getGenreById)

export default genreRouter;
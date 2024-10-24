import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import MovieController from "../controllers/MovieController";

const movieRouter = Router();

/**
   * @swagger
   * tags:
   *   name: Movie
   *   description: API endpoints to manage movies
*/


movieRouter.post('/create', authMiddleware, MovieController.createMovie)
movieRouter.get('/', authMiddleware, MovieController.getAllMovies)
movieRouter.get('/:id', authMiddleware, MovieController.getMovieById)
movieRouter.put('/:id', authMiddleware, MovieController.updateMovie)
movieRouter.delete('/:id', authMiddleware, MovieController.deleteMovie)
movieRouter.post('/:id', authMiddleware, MovieController.saveWatchState)


export default movieRouter;
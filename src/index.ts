import express from 'express';
import sequelize from './config/database';
import dotenv from 'dotenv';
import swaggerSpec from './config/swagger';
import swaggerUi from 'swagger-ui-express';
import authRouter from './routes/authRoutes';
import movieRouter from './routes/movieRoutes';
import genreRouter from './routes/genreRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/auth', authRouter);
app.use('/movie', movieRouter);
app.use('/genre', genreRouter);

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Server is running on port http://localhost:${PORT} and connected to the database.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

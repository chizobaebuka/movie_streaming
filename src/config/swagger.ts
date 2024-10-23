import swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
    info: {
        title: 'Movie Streaming API Documentation',
        version: '1.0.0',
        description: 'Movie Streaming API is a RESTful service using Node.js, Express, TypeScript, and PostgreSQL.',
    },
    host: 'localhost:4402',
    basePath: '/',
    produces: ['application/json'],
    paths: {},
    securityDefinitions: {
        JWTAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    },
    components: {
        schema: {}
    },
};

const options = {
    swaggerDefinition,
    apis: ["src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
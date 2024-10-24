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
    paths: {
        '/auth/signup': {
            post: {
                summary: 'Register a new user',
                description: 'Register a new user',
                tags: ['Auth'],
                parameters: [
                    {
                        name: 'body',
                        in: 'body',
                        description: 'User information',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                firstName: {
                                    type: 'string',
                                    description: 'First name of the user',
                                },
                                lastName: {
                                    type: 'string',
                                    description: 'Last name of the user',
                                },
                                email: {
                                    type: 'string',
                                    description: 'Email of the user',
                                },
                                password: {
                                    type: 'string',
                                    description: 'Password of the user',
                                },
                            },
                        },
                    },
                ],
                responses: {
                    '201': {
                        description: 'User created successfully',
                        schema: {
                            $ref: '#/components/schema/User'
                        }
                    },
                    '400': {
                        description: 'User already exists',
                    }
                }
            },
        },
        '/auth/login': {
            post: {
                summary: 'Login a user',
                description: 'Login a user',
                tags: ['Auth'],
                parameters: [
                    {
                        name: 'user',
                        in: 'body',
                        description: 'user credentials',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                email: {
                                    type: 'string',
                                    description: 'Email of the user',
                                },
                                password: {
                                    type: 'string',
                                    description: 'Password of the user',
                                },
                            },
                        },
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schema/User',
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'User logged in successfully',
                        status: 'success',
                        schema: {
                            $ref: '#/components/schema/User'
                        }
                    },
                    '400': {
                        description: 'Invalid credentials',
                    }
                }
            },
        },
        '/auth': {
            get: {
                summary: 'Get all users',
                description: 'Get all users',
                tags: ['Auth'],
                responses: {
                    '200': {
                        description: 'Users retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/User'
                        }
                    },
                    '400': {
                        description: 'No users found',
                    }
                }
            },
        },
        '/auth/{id}': {
            get: {
                summary: 'Get a user by ID',
                description: 'Get a user by ID',
                tags: ['Auth'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID of the user',
                        required: true,
                        type: 'string',
                    },
                ],
                responses: {
                    '200': {
                        description: 'User retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/User'
                        }
                    },
                    '404': {
                        description: 'User not found',
                    }
                }
            },
        },
        '/auth/update/{id}': {
            put: {
                summary: 'Update a user',
                description: 'Update a user',
                tags: ['Auth'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID of the user',
                        required: true,
                        type: 'string',
                    },
                    {
                        name: 'body',
                        in: 'body',
                        description: 'User information',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                firstName: {
                                    type: 'string',
                                    description: 'First name of the user',
                                },
                                lastName: {
                                    type: 'string',
                                    description: 'Last name of the user',
                                },
                                email: {
                                    type: 'string',
                                    description: 'Email of the user',
                                },
                                password: {
                                    type: 'string',
                                    description: 'Password of the user',
                                },
                            },
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'User updated successfully',
                        schema: {
                            $ref: '#/components/schema/User'
                        }
                    },
                    '404': {
                        description: 'User not found',
                    }
                }
            },
        },
        '/genre/create': {
            post: {
                summary: 'Create a new genre',
                description: 'Create a new genre',
                tags: ['Genre'],
                parameters: [
                    {
                        name: 'body',
                        in: 'body',
                        description: 'Genre information',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'Name of the genre',
                                },
                            },
                        },
                    },
                ],
                security: {
                    JWTAuth: [],
                },
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                        description: 'Name of the genre',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: 'Genre created successfully',
                        schema: {
                            $ref: '#/components/schema/Genre'
                        }
                    },
                    '400': {
                        description: 'Genre already exists',
                    }
                }
            },
        },
        '/genre': {
            get: {
                summary: 'Get all genres',
                description: 'Get all genres',
                tags: ['Genre'],
                responses: {
                    '200': {
                        description: 'Genres retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/Genre'
                        }
                    },
                    '400': {
                        description: 'No genres found',
                    }
                },
                security: {
                    JWTAuth: [],
                },
            },
        },
        '/genre/{id}': {
            get: {
                summary: 'Get a genre by ID',
                description: 'Get a genre by ID',
                tags: ['Genre'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID of the genre',
                        required: true,
                        type: 'string',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Genre retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/Genre'
                        }
                    },
                    '404': {
                        description: 'Genre not found',
                    }
                }
            },
        },
        '/movie/create': {
            post: {
                summary: 'Create a new movie',
                description: 'Create a new movie',
                tags: ['Movie'],
                parameters: [
                    {
                        name: 'body',
                        in: 'body',
                        description: 'Movie information',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                title: {
                                    type: 'string',
                                    description: 'Title of the movie',
                                },
                                description: {
                                    type: 'string',
                                    description: 'Description of the movie',
                                },
                                rating: {
                                    type: 'number',
                                    description: 'Rating of the movie',
                                },
                                genreId: {
                                    type: 'string',
                                    description: 'Genre ID of the movie',
                                },
                            },
                        },
                    },
                ],
                security: {
                    JWTAuth: [],
                },
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    title: {
                                        type: 'string',
                                        description: 'Title of the movie',
                                    },
                                    description: {
                                        type: 'string',
                                        description: 'Description of the movie',
                                    },
                                    rating: {
                                        type: 'number',
                                        description: 'Rating of the movie',
                                    },
                                    genreId: {
                                        type: 'string',
                                        description: 'Genre ID of the movie',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Movie created successfully',
                        schema: {
                            $ref: '#/components/schema/Movie'
                        }
                    },
                    '400': {
                        description: 'Movie already exists',
                    }
                }
            },
        },
        '/movie': {
            get: {
                summary: 'Get all movies',
                description: 'Get all movies',
                tags: ['Movie'],
                responses: {
                    '200': {
                        description: 'Movies retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/Movie'
                        }
                    },
                    '400': {
                        description: 'No movies found',
                    }
                },
                security: {
                    JWTAuth: [],
                },
            },
        },
        '/movie/{id}': {
            get: {
                summary: 'Get a movie by ID',
                description: 'Get a movie by ID',
                tags: ['Movie'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID of the movie',
                        required: true,
                        type: 'string',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Movie retrieved successfully',
                        schema: {
                            $ref: '#/components/schema/Movie'
                        }
                    },
                    '404': {
                        description: 'Movie not found',
                    }
                }
            },
        },
    },
    securityDefinitions: {
        JWTAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    },
    components: {
        schema: {
            User: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    firstName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                }
            },
            Movie: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    title: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    rating: {
                        type: 'number'
                    },
                    genreId: {
                        type: 'string'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                },
            },
            Genre: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    name: {
                        type: 'string'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                },
            },
            Watchlist: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    userId: {
                        type: 'string'
                    },
                    movieId: {
                        type: 'string'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time'
                    },
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ["src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
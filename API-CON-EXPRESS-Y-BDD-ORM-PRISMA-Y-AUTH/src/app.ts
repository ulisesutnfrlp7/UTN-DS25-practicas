// src/app.ts

import express from 'express';
import dotenv from 'dotenv';
import { authRoutes } from './routes/auth.routes';
import { authorRoutes } from './routes/author.routes'
import { bookRoutes } from './routes/book.routes';
import { userRoutes } from './routes/user.routes';
import { contactRoutes } from './routes/contact.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';
import cors from 'cors';

dotenv.config();

const app = express();

const corsOptions = { // Opciones de CORS (con defaults)
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Middleware para loguear cada request
app.use(logRequest);

// Conexión de rutas
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/authors', authorRoutes);

// Middleware para manejar errores ---> siempre al final
app.use(handleError);

const PORT = process.env.PORT || 3000

// Arranque del servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
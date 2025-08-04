// src/app.ts

import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para loguear cada request
app.use(logRequest);

// Conexión de rutas
app.use('/api/books', bookRoutes);

// Middleware para manejar errores ---> siempre al final
app.use(handleError);

// Arranque del servidor
app.listen(3000, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3000');
});
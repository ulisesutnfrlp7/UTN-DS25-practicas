// src/routes/book.routes.ts

import { Router } from 'express';

import * as bookController from '../controllers/book.controller';

import { validate } from '../middlewares/validation.middleware';

import { createBookSchema, updateBookSchema } from '../validations/book.validation';

import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// GET /api/books
router.get('/', bookController.getAllBooks);

// GET /api/books/by-category
router.get('/by-category', bookController.getBooksByCategory);

// GET /api/books/:id 
router.get('/:id', bookController.getBookById);

// POST /api/books
router.post('/', authenticate, authorize('ADMIN'), validate(createBookSchema), bookController.createBook);

// PUT /api/books/:id
router.put('/:id', authenticate, authorize('ADMIN'), validate(updateBookSchema), bookController.updateBook);

// DELETE /api/books/:id
router.delete('/:id', authenticate, authorize('ADMIN'), bookController.deleteBook);

export const bookRoutes = router;
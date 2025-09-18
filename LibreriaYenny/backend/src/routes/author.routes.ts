// src/routes/author.routes.ts

import { Router } from 'express';

import * as authorController from '../controllers/author.controller';

import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// GET /api/authors
router.get('/', authorController.getAllAuthors);

// POST /api/authors
router.post('/', authenticate, authorize('ADMIN'), authorController.createAuthor);

export const authorRoutes = router;
// src/routes/author.routes.ts

import { Router } from 'express';

import * as authorController from '../controllers/author.controller';

const router = Router();

// GET /api/authors
router.get('/', authorController.getAllAuthors);

// POST /api/authors
router.post('/', authorController.createAuthor);

export const authorRoutes = router;
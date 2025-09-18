// src/routes/user.routes.ts

import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { createUserSchema } from '../validations/user.validation';

const router = Router();

// POST /api/users
router.post('/', authenticate, authorize('ADMIN'), validate(createUserSchema), userController.createUser);

// GET /api/users
router.get('/', authenticate, authorize('ADMIN'), userController.getAllUsers);

export const userRoutes = router;
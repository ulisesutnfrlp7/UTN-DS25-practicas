// src/routes/user.routes.ts

import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

// POST /api/users
router.post('/', userController.createUser);

// GET /api/users
router.get('/', userController.getAllUsers);

export const userRoutes = router;
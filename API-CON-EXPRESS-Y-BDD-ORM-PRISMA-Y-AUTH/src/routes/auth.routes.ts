// src/routes/auth.routes.ts

import { Router } from 'express';

import * as authController from '../controllers/auth.controller';

import { validate } from '../middlewares/validation.middleware';

import { LoginSchema } from '../validations/auth.validation';

const router = Router();

// Ruta pública

router.post('/login',
    validate(LoginSchema),
    authController.login
);

export const authRoutes = router;
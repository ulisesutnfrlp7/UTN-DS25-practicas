// src/validations/user.validation.ts

import { z } from 'zod';

// Schema para crear usuario

export const createUserSchema = z.object({
    nombre: z.string().min(2),
    apellido: z.string().min(2),
    email: z.email('Email inválido')
    .toLowerCase()
    .trim(),
    password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
    sexo: z.enum(['Masculino', 'Femenino']),
    temaFavorito: z.enum(['Novela', 'Terror', 'Ciencia Ficción', 'Policial']),
    role: z.enum(['USER', 'ADMIN']).optional().default('USER')
});

// Schema para actualizar (todos los campos opcionales)

export const updateUserSchema = createUserSchema.partial();
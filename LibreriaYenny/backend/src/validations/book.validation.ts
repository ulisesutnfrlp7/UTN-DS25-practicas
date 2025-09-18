// src/validations/book.validations.ts

import { z } from 'zod';
import { Category } from '@prisma/client';

// Schema para crear libro

export const createBookSchema = z.object({
  
  title: z.string()
  .min(1, 'El título es requerido')
  .max(200, 'El título no puede exceder 200 caracteres')
  .trim(),

  authorId: z.number()
  .int('ID de autor inválido')
  .positive('ID de autor debe ser positivo'),

  description: z.string()
  .min(1, 'La sinopsis es requerida')
  .max(200, 'La sinopsis no puede exceder 200 caracteres')
  .trim(),

  image: z.string()
    .url()
    .refine(val => !!val, { message: 'La URL de la imagen no es válida' }),

  categoria: z.nativeEnum(Category)
    .refine(val => Object.values(Category).includes(val), {
      message: 'Categoría inválida'
    })
});

// Schema para actualizar (todos los campos opcionales)

export const updateBookSchema = createBookSchema.partial();
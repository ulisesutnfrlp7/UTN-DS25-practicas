// src/middlewares/validations.middleware.ts

import { ZodError, ZodType } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validar y transformar datos
      const validatedData = await schema.parseAsync(req.body);
      // Reemplazar body con datos validados
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // 👀 Log detallado para debug
        console.error('Errores de validación Zod:', JSON.stringify(error.format(), null, 2));

        return res.status(400).json({
          success: false,
          message: 'Datos inválidos',
          errors: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      return next(error);
    }
  };
};
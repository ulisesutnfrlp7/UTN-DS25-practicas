// src/validations/auth.validation.ts

import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email("Correo electrónico no válido"),
  password: z.string().min(1, "La contraseña es obligatoria")
});
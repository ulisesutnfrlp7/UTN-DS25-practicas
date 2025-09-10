// src/services/auth.service.ts

import { PrismaClient }  from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginRequest, LoginResponse } from '../types/auth.types';

const prisma = new PrismaClient();

// 🔐 Servicio de login: verifica credenciales y genera JWT
export async function login(data: LoginRequest): Promise<LoginResponse['data']> {
  // 1. Buscar usuario por email
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  // 2. Verificar contraseña
  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  // 3. Generar token JWT
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  // 4. Retornar usuario sin contraseña
  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token
  };
}
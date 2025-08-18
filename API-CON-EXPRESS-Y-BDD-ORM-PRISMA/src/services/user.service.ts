// src/services/user.service.ts

import { PrismaClient } from '@prisma/client';
import { CreateUserRequest } from '../types/user.types';

const prisma = new PrismaClient();

// Crear un nuevo usuario
export async function createUser(data: CreateUserRequest) {
  const user = await prisma.user.create({ data });

  return {
    ...user,
    registrado: true,
  };
}

// Obtener todos los usuarios
export async function getAllUsers() {
  const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });

  return users.map(user => ({
    ...user,
    registrado: true,
  }));
}
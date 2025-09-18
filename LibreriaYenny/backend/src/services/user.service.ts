// src/services/user.service.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { CreateUserRequest, PublicUser } from '../types/user.types';

const prisma = new PrismaClient();

// Obtener todos los usuarios (sin contraseña)
export async function getAllUsers(limit: number = 10): Promise<PublicUser[]> {
  const users = await prisma.user.findMany({
    orderBy: { id: 'asc' },
    take: limit,
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      role: true,
      sexo: true,
      temaFavorito: true,
      createdAt: true
    }
  });

  return users.map(user => ({ ...user, registrado: true }));
}

// Obtener usuario por ID (sin contraseña)
export async function getUserById(id: number): Promise<PublicUser> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      role: true,
      sexo: true,
      temaFavorito: true,
      createdAt: true
    }
  });

  if (!user) {
    const error = new Error('Usuario no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }

  return { ...user, registrado: true };
}

// Crear nuevo usuario con hash de contraseña
export async function createUser(data: CreateUserRequest): Promise<PublicUser> {
  const exists = await prisma.user.findUnique({ where: { email: data.email } });
  if (exists) {
    const error = new Error('Email ya registrado') as any;
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: hashedPassword,
      role: data.role ?? 'USER',
      sexo: data.sexo,
      temaFavorito: data.temaFavorito
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      role: true,
      sexo: true,
      temaFavorito: true,
      createdAt: true
    }
  });

  return { ...user, registrado: true };
}
// src/types/user.types.ts

import { User as PrismaUser } from '@prisma/client';

export type User = PrismaUser & { registrado: boolean };

export interface CreateUserRequest {
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
  sexo: 'masculino' | 'femenino';
  temaFavorito: 'Novela' | 'Terror' | 'Ciencia Ficción' | 'Policial';
  role?: 'USER' | 'ADMIN';
}

export interface UserResponse {
  user: User;
  message: string;
}

export interface UsersListResponse {
  users: User[];
  total: number;
}
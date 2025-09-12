// src/types/user.types.ts

import { User as PrismaUser } from '@prisma/client';

export type PublicUser = Omit<PrismaUser, 'password'> & { registrado: boolean };

export interface CreateUserRequest {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  sexo: 'Masculino' | 'Femenino';
  temaFavorito: 'Novela' | 'Terror' | 'Ciencia Ficción' | 'Policial';
  role?: 'USER' | 'ADMIN';
}

export interface UserResponse {
  user: PublicUser;
  message: string;
}

export interface UsersListResponse {
  users: PublicUser[];
  total: number;
}
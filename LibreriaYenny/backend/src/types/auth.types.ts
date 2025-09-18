// src/types/auth.types.ts

// 📥 Datos que recibe el login
export interface LoginRequest {
  email: string;
  password: string;
}

// 📤 Estructura de la respuesta del login
export interface LoginResponse {
  success: boolean;
  data: {
    user: {
      id: number;
      nombre: string;
      apellido: string;
      email: string;
      sexo?: string;
      temaFavorito?: string;
      role: 'USER' | 'ADMIN';
      createdAt?: Date;
    };
    token: string;
  };
}

// 🔐 Payload del JWT (opcional para tipificación)
export interface JwtPayload {
  id: number;
  email: string;
  role: 'USER' | 'ADMIN';
}
import pool from '../config/db';
import { CreateUserRequest, User } from '../types/user.types';

// Crear un nuevo usuario
export async function createUserDB(data: CreateUserRequest): Promise<User> {
  const result = await pool.query(
    `INSERT INTO users (nombre, apellido, contraseña, sexo, tema_favorito) VALUES ($1, $2, $3, $4, $5)
    RETURNING id, nombre, apellido, contraseña, sexo, tema_favorito, created_at`,
    [data.nombre, data.apellido, data.contraseña, data.sexo, data.temaFavorito]
  );

  const row = result.rows[0];

  return {
    id: row.id,
    nombre: row.nombre,
    apellido: row.apellido,
    contraseña: row.contraseña,
    sexo: row.sexo,
    temaFavorito: row.tema_favorito,
    registrado: true,
    createdAt: row.created_at,
  };
}

// Obtener todos los usuarios
export async function getAllUsersDB(): Promise<User[]> {
  const result = await pool.query('SELECT * FROM users ORDER BY id');
  return result.rows.map(row => ({
    id: row.id,
    nombre: row.nombre,
    apellido: row.apellido,
    contraseña: row.contraseña,
    sexo: row.sexo,
    temaFavorito: row.tema_favorito,
    registrado: true,
    createdAt: row.created_at,
  }));
}
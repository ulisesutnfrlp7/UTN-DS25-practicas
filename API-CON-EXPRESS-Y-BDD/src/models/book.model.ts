// src/models/book.model.ts

import pool from '../config/db';
import { Book, CreateBookRequest, UpdateBookRequest } from '../types/book.types';

// Obtener todos los libros
export async function getAllBooksDB(): Promise<Book[]> {
  const result = await pool.query('SELECT * FROM books ORDER BY id');
  return result.rows;
}

// Obtener un libro por ID
export async function getBookByIdDB(id: number): Promise<Book | null> {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return result.rows[0] || null;
}

// Crear un nuevo libro
export async function createBookDB(data: CreateBookRequest): Promise<Book> {
  const result = await pool.query(
    `INSERT INTO books (title_and_author, description, image) VALUES ($1, $2, $3) RETURNING *`,
    [data.title_and_author, data.description, data.image]
  );
  return result.rows[0];
}

// Actualizar un libro
export async function updateBookDB(id: number, data: UpdateBookRequest): Promise<Book | null> {
  const existing = await getBookByIdDB(id);
  if (!existing) return null;

  const updated = {
    title_and_author: data.title_and_author ?? existing.title_and_author,
    description: data.description ?? existing.description,
    image: data.image ?? existing.image,
  };

  const result = await pool.query(
    `UPDATE books SET title_and_author = $1, description = $2, image = $3 WHERE id = $4 RETURNING *`,
    [updated.title_and_author, updated.description, updated.image, id]
  );
  return result.rows[0];
}

// Eliminar un libro
export async function deleteBookDB(id: number): Promise<boolean> {
  const result = await pool.query('DELETE FROM books WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
}
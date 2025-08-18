// src/services/book.service.ts

import { Book, CreateBookRequest, UpdateBookRequest } from '../types/book.types';
import { getAllBooksDB, getBookByIdDB, createBookDB, updateBookDB, deleteBookDB } from '../models/book.model';

// Obtener todos los libros
export async function getAllBooks(): Promise<Book[]> {
  return await getAllBooksDB();
}

// Obtener un libro por ID
export async function getBookById(id: number): Promise<Book | null> {
  return await getBookByIdDB(id);
}

// Crear un nuevo libro
export async function createBook(bookData: CreateBookRequest): Promise<Book> {
  return await createBookDB(bookData);
}

// Actualizar un libro existente
export async function updateBook(id: number, updateData: UpdateBookRequest): Promise<Book | null> {
  return await updateBookDB(id, updateData);
}

// Eliminar un libro
export async function deleteBook(id: number): Promise<boolean> {
  return await deleteBookDB(id);
}
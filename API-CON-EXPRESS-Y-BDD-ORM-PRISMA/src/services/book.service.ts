// src/services/book.service.ts

import { PrismaClient } from '@prisma/client';
import { CreateBookRequest, UpdateBookRequest } from '../types/book.types';

const prisma = new PrismaClient();

// Obtener todos los libros
export async function getAllBooks() {
  return await prisma.book.findMany({ orderBy: { id: 'asc' } });
}

// Obtener un libro por ID
export async function getBookById(id: number) {
  return await prisma.book.findUnique({ where: { id } });
}

// Crear un nuevo libro
export async function createBook(data: CreateBookRequest) {
  return await prisma.book.create({ data });
}

// Actualizar un libro existente
export async function updateBook(id: number, data: UpdateBookRequest) {
  return await prisma.book.update({
    where: { id },
    data,
  });
}

// Eliminar un libro
export async function deleteBook(id: number) {
  const deleted = await prisma.book.delete({ where: { id } });
  return !!deleted;
}
// src/services/book.service.ts

import { PrismaClient } from '@prisma/client';
import { CreateBookRequest, UpdateBookRequest, BookWithAuthor } from '../types/book.types';
import { Category } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todos los libros
export async function getAllBooks() {
  return await prisma.book.findMany({ 
    include: { author: true },
    orderBy: { id: 'asc' } 
  });
}

// Obtener libros por categoría
export async function getBooksByCategory(categoria: Category) {
  return await prisma.book.findMany({
    where: { categoria },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

// Obtener un libro por ID
export async function getBookById(id: number) {
  const book = await prisma.book.findUnique({ 
    where: { id }, 
    include: { author: true }
  })

  if (!book) {
    const error = new Error('Libro no encontrado') as any
    error.statusCode = 404
    throw error
  }

  return book
}

// Crear un nuevo libro
export async function createBook(data: CreateBookRequest): Promise<BookWithAuthor | undefined> {
  const book = await prisma.book.create({ data });
  const fullBook = await prisma.book.findUnique({
    where: { id: book.id },
    include: { author: true }
  });
  return fullBook ?? undefined; // ← convierte null en undefined
}

// Actualizar un libro existente
export async function updateBook(id: number, data: UpdateBookRequest) {
  const book = await prisma.book.update({
    where: { id },
    data,
  });
  return await prisma.book.findUnique({
    where: { id: book.id },
    include: { author: true }
  });
}

// Eliminar un libro
export async function deleteBook(id: number) {
  const deleted = await prisma.book.delete({ where: { id } });
  return !!deleted;
}
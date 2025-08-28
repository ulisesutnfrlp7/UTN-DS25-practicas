// src/services/author.service.ts

import { PrismaClient } from '@prisma/client';
import { CreateAuthorRequest } from '../types/author.types';

const prisma = new PrismaClient();

// Obtener todos los autores
export async function getAllAuthors() {
  return await prisma.author.findMany({ orderBy: { id: 'asc' } });
}


// Crear un nuevo autor
export async function createAuthor(data: CreateAuthorRequest) {
  return await prisma.author.create({ data });
}
// src/services/contact.service.ts

import { PrismaClient } from '@prisma/client';
import { ContactMessageRequest } from '../types/contact.types';

const prisma = new PrismaClient();

// Crear un nuevo mensaje de contacto
export async function sendMessage(data: ContactMessageRequest) {
  return await prisma.contactMessage.create({ data });
}
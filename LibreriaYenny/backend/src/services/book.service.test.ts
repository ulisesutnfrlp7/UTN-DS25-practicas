// src/services/book.service.test.ts

import { getBookById } from './book.service'
import { PrismaClient } from '@prisma/client'

// 🧩 Mock del módulo completo
jest.mock('@prisma/client', () => {
  const mockFindUnique = jest.fn()

  // Guardamos los mocks en una variable accesible desde fuera
  const mockPrismaInstance = {
    book: {
      findUnique: mockFindUnique
    }
  }

  return {
    PrismaClient: jest.fn(() => mockPrismaInstance),
    __mock__: {
      mockFindUnique,
      mockPrismaInstance
    }
  }
})

// 🔧 Accedemos a los mocks desde el módulo mockeado
const { __mock__ } = jest.requireMock('@prisma/client')
const prisma = new PrismaClient()

describe('BookService - getBookById', () => {
  test('debe retornar un libro cuando existe', async () => {
    const mockBook = { id: 1, title: '1984', author: 'Orwell' }
    __mock__.mockFindUnique.mockResolvedValue(mockBook)

    const result = await getBookById(1)

    expect(result).toEqual(mockBook)
    expect(prisma.book.findUnique).toHaveBeenCalledWith({ where: { id: 1 }, include: { author: true } })
  })

  test('debe lanzar error 404 cuando no existe', async () => {
    __mock__.mockFindUnique.mockResolvedValue(null)

    await expect(getBookById(999)).rejects.toThrow('Libro no encontrado')
  })
})
import { createAuthor } from './author.service'
import { PrismaClient } from '@prisma/client'

jest.mock('@prisma/client', () => {
  const mockCreate = jest.fn()
  return {
    PrismaClient: jest.fn(() => ({
      author: { create: mockCreate }
    })),
    __mock__: { mockCreate }
  }
})

const { __mock__ } = jest.requireMock('@prisma/client')
const prisma = new PrismaClient()

describe('AuthorService - createAuthor', () => {
  test('crea un autor correctamente', async () => {
    const mockAuthor = { id: 1, name: 'George Orwell' }
    __mock__.mockCreate.mockResolvedValue(mockAuthor)

    const result = await createAuthor({ name: 'George Orwell' })
    expect(result).toEqual(mockAuthor)
    expect(prisma.author.create).toHaveBeenCalledWith({ data: { name: 'George Orwell' } })
  })
})
import { getUserById, createUser } from './user.service'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

jest.mock('@prisma/client', () => {
  const mockFindUnique = jest.fn()
  const mockCreate = jest.fn()
  return {
    PrismaClient: jest.fn(() => ({
      user: {
        findUnique: mockFindUnique,
        create: mockCreate
      }
    })),
    __mock__: { mockFindUnique, mockCreate }
  }
})

jest.mock('bcrypt', () => ({
  hash: jest.fn()
}))

const { __mock__ } = jest.requireMock('@prisma/client')
const prisma = new PrismaClient()

describe('UserService - getUserById', () => {
  test('debe retornar usuario sin contraseña y con registrado', async () => {
    const mockUser = {
      id: 1,
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email: 'ulibuccchino@gmail.com',
      role: 'USER',
      sexo: 'Masculino',
      temaFavorito: 'Ciencia Ficción',
      createdAt: new Date()
    }

    __mock__.mockFindUnique.mockResolvedValue(mockUser)

    const result = await getUserById(1)
    expect(result).toEqual({ ...mockUser, registrado: true })
  })

  test('debe lanzar error si no existe', async () => {
    __mock__.mockFindUnique.mockResolvedValue(null)
    await expect(getUserById(999)).rejects.toThrow('Usuario no encontrado')
  })
})

describe('UserService - createUser', () => {
  test('debe lanzar error si el email ya existe', async () => {
    __mock__.mockFindUnique.mockResolvedValue({ id: 1 })
    await expect(createUser({
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email: 'ulibuccchino@gmail.com',
      password: '123',
      sexo: 'Masculino',
      temaFavorito: 'Ciencia Ficción'
    })).rejects.toThrow('Email ya registrado')
  })

  test('debe crear usuario con contraseña hasheada', async () => {
    __mock__.mockFindUnique.mockResolvedValue(null)
    ;(bcrypt.hash as jest.Mock).mockResolvedValue('hashed123')
    __mock__.mockCreate.mockResolvedValue({
      id: 1,
      nombre: 'Ulises',
      apellido: 'Test',
      email: 'ulibuccchino@gmail.com',
      role: 'USER',
      sexo: 'Masculino',
      temaFavorito: 'Ciencia Ficción',
      createdAt: new Date()
    })

    const result = await createUser({
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email: 'ulibuccchino@gmail.com',
      password: '123',
      sexo: 'Masculino',
      temaFavorito: 'Ciencia Ficción'
    })

    expect(result).toMatchObject({ nombre: 'Ulises', registrado: true })
    expect(bcrypt.hash).toHaveBeenCalledWith('123', 10)
  })
})
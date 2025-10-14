import { login } from './auth.service'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwt'

jest.mock('@prisma/client', () => {
  const mockFindUnique = jest.fn()
  return {
    PrismaClient: jest.fn(() => ({
      user: { findUnique: mockFindUnique }
    })),
    __mock__: { mockFindUnique }
  }
})

jest.mock('bcrypt', () => ({
  compare: jest.fn()
}))

jest.mock('../utils/jwt', () => ({
  generateToken: jest.fn()
}))

const { __mock__ } = jest.requireMock('@prisma/client')
const prisma = new PrismaClient()

describe('AuthService - login', () => {
  test('retorna token y usuario sin contraseña si credenciales son válidas', async () => {
    const mockUser = {
      id: 1,
      email: 'ulibucchino@gmail.com',
      password: 'hashed',
      role: 'USER',
      nombre: 'Ulises',
      apellido: 'Bucchino'
    }

    __mock__.mockFindUnique.mockResolvedValue(mockUser)
    ;(bcrypt.compare as jest.Mock).mockResolvedValue(true)
    ;(generateToken as jest.Mock).mockReturnValue('mocked-token')

    const result = await login({ email: 'ulibucchino@gmail.com', password: '123' })

    expect(result).toEqual({
      user: {
        id: 1,
        email: 'ulibucchino@gmail.com',
        role: 'USER',
        nombre: 'Ulises',
        apellido: 'Bucchino'
      },
      token: 'mocked-token'
    })
  })

  test('lanza error si el usuario no existe', async () => {
    __mock__.mockFindUnique.mockResolvedValue(null)
    await expect(login({ email: 'x@mail.com', password: '123' })).rejects.toThrow('Credenciales inválidas')
  })

  test('lanza error si la contraseña es incorrecta', async () => {
    __mock__.mockFindUnique.mockResolvedValue({ id: 1, email: 'x@mail.com', password: 'hashed', role: 'USER' })
    ;(bcrypt.compare as jest.Mock).mockResolvedValue(false)
    await expect(login({ email: 'x@mail.com', password: 'wrong' })).rejects.toThrow('Credenciales inválidas')
  })
})
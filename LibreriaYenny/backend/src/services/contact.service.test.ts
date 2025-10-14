import { sendMessage } from './contact.service'
import { PrismaClient } from '@prisma/client'

jest.mock('@prisma/client', () => {
  const mockCreate = jest.fn()
  return {
    PrismaClient: jest.fn(() => ({
      contactMessage: { create: mockCreate }
    })),
    __mock__: { mockCreate }
  }
})

const { __mock__ } = jest.requireMock('@prisma/client')
const prisma = new PrismaClient()

describe('ContactService - sendMessage', () => {
  test('debe crear un mensaje de contacto correctamente', async () => {
    const mockMessage = {
      id: 1,
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email: 'ulibuccchino@gmail.com',
      mensaje: 'Hola!',
      enviadoEn: new Date(),
      userId: 1
    }

    __mock__.mockCreate.mockResolvedValue(mockMessage)

    const result = await sendMessage({
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email: 'ulibucchino@gmail.com',
      mensaje: 'Hola!',
      userId: 1
    })

    expect(result).toEqual(mockMessage)
    expect(prisma.contactMessage.create).toHaveBeenCalledWith({
      data: {
        nombre: 'Ulises',
        apellido: 'Bucchino',
        email: 'ulibucchino@gmail.com',
        mensaje: 'Hola!',
        userId: 1
      }
    })
  })
})
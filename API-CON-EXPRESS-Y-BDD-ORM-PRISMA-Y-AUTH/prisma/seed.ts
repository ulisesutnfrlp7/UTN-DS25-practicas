// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'ulibucchino@gmail.com';

  const exists = await prisma.user.findUnique({ where: { email } });

  if (exists) {
    console.log(`Usuario con email ${email} ya existe`);
    return;
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const user = await prisma.user.create({
    data: {
      nombre: 'Ulises',
      apellido: 'Bucchino',
      email,
      password: hashedPassword,
      role: 'ADMIN',
      sexo: 'Masculino',
      temaFavorito: 'Terror'
    }
  });

  console.log(`✅ Usuario admin creado: ${user.email}`);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
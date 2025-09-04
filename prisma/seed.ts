import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('Birgul12345**', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'admin@birgulhanimkizogrenciyurdukartal.com.tr' },
    update: {
      password: hashedPassword,
    },
    create: {
      email: 'admin@birgulhanimkizogrenciyurdukartal.com.tr',
      password: hashedPassword,
      name: 'Admin',
    },
  })
  
  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
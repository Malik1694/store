import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const electronics = await prisma.category.create({
    data: { name: 'Electronics' },
  });

  const books = await prisma.category.create({
    data: { name: 'Books' },
  });

  // Create products
  await prisma.product.create({
    data: {
      name: 'Laptop',
      price: 150000,
      categoryId: electronics.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'The Alchemist',
      price: 1200,
      categoryId: books.id,
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

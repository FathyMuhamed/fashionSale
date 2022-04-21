import { PrismaClient } from '@prisma/client';
import { clothes } from './../assert/data';

const db = new PrismaClient();

async function main() {
  await db.clothes.createMany({
    data: clothes as any,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

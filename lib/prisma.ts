// TEMPORALMENTE COMENTADO PARA DESARROLLO SIN BASE DE DATOS
// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// MOCK PRISMA PARA DESARROLLO
export const prisma = {
  user: {
    findUnique: () => Promise.resolve(null),
    create: () => Promise.resolve({}),
    update: () => Promise.resolve({}),
  },
  account: {
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve({}),
  },
  session: {
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve({}),
  },
  profile: {
    findUnique: () => Promise.resolve(null),
    create: () => Promise.resolve({}),
  },
  impactMetric: {
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve({}),
  },
  $disconnect: () => Promise.resolve(),
};

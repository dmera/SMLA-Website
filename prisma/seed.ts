import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create default roles/users
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@smla.com' },
    update: {},
    create: {
      email: 'admin@smla.com',
      name: 'Admin User',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  // Create sample impact metrics
  const impactMetrics = [
    {
      title: 'Árboles plantados',
      description: 'Número total de árboles nativos plantados en el proyecto',
      value: '1,250',
      unit: 'árboles',
      category: 'reforestación',
    },
    {
      title: 'CO2 capturado',
      description: 'Toneladas de CO2 capturadas anualmente',
      value: '45',
      unit: 'toneladas/año',
      category: 'carbono',
    },
    {
      title: 'Especies protegidas',
      description: 'Número de especies de fauna protegidas',
      value: '12',
      unit: 'especies',
      category: 'biodiversidad',
    },
    {
      title: 'Agua regenerada',
      description: 'Litros de agua regenerada en sistemas naturales',
      value: '50,000',
      unit: 'litros/mes',
      category: 'agua',
    },
  ];

  for (const metric of impactMetrics) {
    await prisma.impactMetric.upsert({
      where: { title: metric.title },
      update: {},
      create: metric,
    });
  }

  console.log('Database seeded successfully!');
  console.log('Admin user created:', adminUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

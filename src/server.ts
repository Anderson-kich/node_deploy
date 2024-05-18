import { PrismaClient } from '@prisma/client';
import express from 'express';
import { z } from 'zod';

const app = express();

const prisma = new PrismaClient();

app.get('/', (request, response) => {
  return response.json({ message: 'Executando...' });
});

app.get('/users', async (request, response) => {
  const users = await prisma.user.findMany();

  return response.json({ users });
});

app.post('/users', async (request, response) => {
  const creteUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const { name, email } = creteUserSchema.parse(request.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return response.status(201).send();
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`);
});

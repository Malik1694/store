import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const categorySchema = z.object({
  name: z.string().min(2),
});

export async function GET(request: Request) {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const body = await request.json();
  const validation = categorySchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newCategory = await prisma.category.create({
    data: validation.data,
  });

  return NextResponse.json(newCategory, { status: 201 });
}

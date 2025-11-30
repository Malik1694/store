import { NextResponse } from 'next/server';
import { z } from 'zod';

const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
});

// This is a simplified example. In a real app, you'd likely use sessions or JWTs to manage carts.
let cart: any = {
    items: []
};

export async function GET(request: Request) {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const body = await request.json();
  const validation = cartItemSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Logic to add item to cart
  cart.items.push(validation.data);

  return NextResponse.json(cart, { status: 201 });
}

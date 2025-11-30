import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust this path

export async function GET(request: Request) {
    // const session = await getServerSession(authOptions);
    // if (!session?.user) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const orders = await prisma.order.findMany({
    //     where: { userId: session.user.id }
    // });
    
    // return NextResponse.json(orders);
    return NextResponse.json({ message: "This should return a list of orders for the authenticated user." });
}

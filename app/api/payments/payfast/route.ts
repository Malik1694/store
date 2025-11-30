import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Handle payment initiation with PayFast
    return NextResponse.json({ message: "PayFast payment initiation endpoint." });
}

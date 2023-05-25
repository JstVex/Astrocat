import { NextResponse } from 'next/server';
import openai from '@/utils/openai';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        const { message } = body;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",

            messages: [
                { role: "system", content: "Just reply meow to every message." },
                { role: "user", content: message }
            ],
        });
        const reply = completion.data.choices[0].message?.content;

        return NextResponse.json(reply);
    } catch (error: any) {
        return new NextResponse(`Internal Error: ${error}`, { status: 500 })
    }
}


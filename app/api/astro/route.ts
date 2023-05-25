import { NextResponse } from 'next/server';
import openai from '@/utils/openai';
import prisma from '@/libs/prismadb';
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { message } = body;

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",

            messages: [
                { role: "system", content: "Just reply meow to every message." },
                { role: "user", content: message }
            ],
        });
        const reply = completion.data.choices[0].message?.content;

        const senderMessage = await prisma.astro.create({
            data: {
                messageBySender: message,
                sender: {
                    connect: {
                        id: currentUser.id,
                    }
                },
            },
            include: {
                sender: true
            }
        })

        const replyMessage = await prisma.astro.create({
            data: {
                messageByAstro: reply,
                sender: {
                    connect: {
                        id: currentUser.id,
                    }
                },
            },
            include: {
                sender: true
            }
        })

        return NextResponse.json(replyMessage);
    } catch (error: any) {
        return new NextResponse(`Internal Error: ${error}`, { status: 500 })
    }
}


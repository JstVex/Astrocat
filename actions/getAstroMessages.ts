import prisma from '@/libs/prismadb';
import getCurrentUser from './getCurrentUser';

const getAstroMessages = async () => {
    const currentUser = await getCurrentUser();
    try {
        const messages = await prisma.astro.findMany({
            where: {
                senderId: currentUser?.id
            },
            include: {
                sender: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        });

        return messages;
    } catch (error: any) {
        return [];
    }
};

export default getAstroMessages;
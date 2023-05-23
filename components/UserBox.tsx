'use client'

import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Avatar from './Avatar';
import LoadingModal from './LoadingModal';

interface UserBoxProps {
    data: User
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);

        axios.post('/api/conversations', {
            userId: data.id
        })
            .then((data) => {
                router.push(`/conversations/${data.data.id}`)
            })
            .finally(() => setIsLoading(false));
    }, [data, router])

    return (
        <>
            {isLoading && (
                <LoadingModal />
            )}

            <div onClick={handleClick} className='w-full relative flex items-center space-x-3 bg-white my-2 px-3 py-2 hover:bg-neutral-100 rounded-lg transition cursor-pointer dark:bg-zinc-900 dark:hover:bg-zinc-800'>
                <Avatar user={data} />
                <div className='min-w-0 flex-1'>
                    <div className='focus:outline-none'>
                        <div className="flex justify-between items-center mb-1">
                            <p className='text-md font-medium text-zinc-900 dark:text-zinc-100'>
                                {data.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserBox;
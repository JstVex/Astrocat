'use client'

import { User } from '@prisma/client';
import Image from 'next/image';
import clsx from 'clsx';
import useActiveList from '@/hooks/useActiveList';

interface AvatarProps {
    user?: User,
    large?: Boolean
}

const Avatar: React.FC<AvatarProps> = ({ user, large }) => {
    const { members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;

    return (
        <div className="relative">
            <div className={clsx(`
                relative 
                inline-block 
                rounded-full 
                overflow-hidden 
            `, large ? `w-20 h-20` : `h-9 
                w-9 md:h-11 
                md:w-11`)}>
                <Image
                    fill
                    src={user?.image || '/../public/placeholder.jpeg'}
                    alt="Avatar"
                />
            </div>
            {isActive && (
                <span
                    className={clsx(`
                    absolute 
                    block 
                    rounded-full 
                    bg-green-500 
                    ring-2 
                    ring-white 
                    top-0 
                    right-0
                    
                `, large ? `w-4 h-4` : `h-2 
                    w-2 
                    md:h-3 
                    md:w-3`)}
                />
            )}

        </div>
    );
}

export default Avatar;
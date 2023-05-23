'use client'

import { User } from '@prisma/client';
import UserBox from './UserBox';


interface UserListProps {
    items: User[]
}

const UserList: React.FC<UserListProps> = ({ items }) => {
    return (
        <aside className='fixed w-full inset-y-0 pb-20 md:pb-0 md:left-20 md:w-80 md:block overflow-y-auto md:border-r border-gray-200 block w-fll left-0 dark:bg-zinc-900 dark:border-zinc-700'>
            <div className='px-5'>
                <div className='flex-col'>
                    <div className='text-2xl font-bold text-neutral-800 py-4 dark:text-zinc-100'>
                        Fellows
                    </div>
                </div>
                {items.map((item) => {
                    return <UserBox key={item.id} data={item} />
                })}
            </div>
        </aside>
    );
}

export default UserList;
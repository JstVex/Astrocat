'use client';

import { User } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";

interface AvatarGroupProps {
    users?: User[],
    large?: boolean
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({
    users = [],
    large
}) => {
    const slicedUsers = users.slice(0, 3);

    const positionMap = {
        0: 'top-0 left-[12px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    }

    const positionMapLarge = {
        0: 'top-0 left-[27px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    }

    return (
        <div className={clsx("relative ", large ? "h-28 w-28" : "h-11 w-11")}>
            {slicedUsers.map((user, index) => (
                <div
                    key={user.id}
                    className={clsx(`
                    absolute
                    inline-block 
                    rounded-full 
                    overflow-hidden
                   
                `, large ? `w-[50px] h-[50px] ${positionMapLarge[index as keyof typeof positionMap]}` : `h-[21px]
                    w-[21px] ${positionMap[index as keyof typeof positionMap]}`)}>
                    <Image
                        fill
                        src={user?.image || 'https://dsm01pap007files.storage.live.com/y4mdH7gn0qUQ8E76WN-QTWM9bIQi9IuOvHl7YUhRhXWHO5-aT_2AiZNTxg9zQHfEto3w3X_5o6mBoSzLuetWmB6lKJKPLxXRcXAzsZNfICw7LtFlMcLwmdNo_Asv8GelQORmBx_u5GTkRJaTsw5IyA0tsg5FHb_NsXXf67eTd4q2UnWhSrGsEt2K5iUBqiOJw_N?width=360&height=360&cropmode=none'}
                        alt="Avatar"
                    />
                </div>
            ))}
        </div>
    );
}

export default AvatarGroup;
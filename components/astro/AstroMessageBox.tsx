'use client'

import clsx from "clsx";
import Avatar from "../Avatar";
import { format } from "date-fns";
import { Astro, User } from "@prisma/client";
import { IoLogoOctocat } from 'react-icons/io5'

interface AstroMessageBoxProps {
    data: Astro & {
        sender: User
    }
}

const AstroMessageBox: React.FC<AstroMessageBoxProps> = ({ data }) => {

    const container = clsx(
        "flex gap-3 p-4",
        data.messageBySender && "justify-end"
    );

    const avatar = clsx(data.messageBySender && 'order-2')

    const body = clsx(
        "flex flex-col gap-2",
        data.messageBySender && "items-end"
    );

    const message = clsx(
        "text-sm w-fit overflow-hidden rounded-2xl py-2 px-3",
        data.messageBySender ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-700 dark:text-zinc-100',
    )

    return (
        <div className={container}>
            <div className={avatar}>
                {data.messageBySender && <Avatar user={data.sender} />}
                {data.messageByAstro && <IoLogoOctocat className="text-zinc-200" size={25} />}

            </div>
            <div className={body}>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500 dark:text-zinc-300">
                        {data.messageBySender && data.sender.name}
                        {data.messageByAstro && "Astro"}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-zinc-400">
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div className={message}>
                    <div>
                        {data.messageByAstro && data.messageByAstro}
                        {data.messageBySender && data.messageBySender}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AstroMessageBox;
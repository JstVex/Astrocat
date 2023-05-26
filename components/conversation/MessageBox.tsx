'use client'

import { FullMessageType } from "@/types";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Avatar from "../Avatar";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
    data: FullMessageType,
    previousMessage?: FullMessageType | null,
    isLast?: boolean
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, previousMessage, isLast }) => {
    const session = useSession();

    const [imageModalOpen, setIsImageModalOpen] = useState(false);

    const isOwn = session?.data?.user?.email === data?.sender?.email;
    const seenList = (data.seen || [])
        .filter((user) => user.email !== data?.sender?.email)
        .map((user) => user.name)
        .join(', ')

    const container = clsx(
        "flex gap-3 px-4 ",
        isOwn && "justify-end",
        previousMessage?.sender.id !== data.sender.id && "pt-5 pb-2",
        previousMessage?.sender.id === data.sender.id && "pb-2",
        previousMessage?.sender.id === data.sender.id && !isOwn && "ml-[48px] md:ml-[54px]",
        previousMessage?.sender.id === data.sender.id && isOwn && "mr-[48px] md:mr-[54px]"
    );

    const avatar = clsx(isOwn && 'order-2')

    const body = clsx(
        "flex flex-col gap-2",
        isOwn && "items-end"
    );

    const message = clsx(
        "text-sm w-fit overflow-hidden",
        isOwn ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-700 dark:text-zinc-100',
        data.image ? 'rounded-md p-0' : 'rounded-2xl py-2 px-3'
    )


    return (
        <div className={container}>
            {previousMessage?.sender.id !== data.sender.id &&
                <div className={avatar}>
                    <Avatar user={data.sender} />
                </div>
            }

            <div className={body}>
                {previousMessage?.sender.id !== data.sender.id &&
                    <div className="flex items-center gap-1">
                        <div className="text-sm text-gray-50 dark:text-zinc-300">
                            {data.sender.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-zinc-400">
                            {format(new Date(data.createdAt), 'p')}
                        </div>
                    </div>
                }

                <div className={message}>
                    <ImageModal
                        src={data.image}
                        isOpen={imageModalOpen}
                        onClose={() => setIsImageModalOpen(false)}
                    />
                    {data.image ? (
                        <Image
                            onClick={() => setIsImageModalOpen(true)}
                            src={data.image}
                            alt="Image"
                            width="288"
                            height="288"
                            className="object-cover cursor-pointer hover:scale-110 transition translate"
                        />
                    ) : (
                        <div>
                            {data.body}
                        </div>
                    )}
                </div>
                {isLast && isOwn && seenList.length > 0 && (
                    <div className="text-xs font-light text-gray-500 dark:text-zinc-400">
                        {`seen by ${seenList}`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageBox;
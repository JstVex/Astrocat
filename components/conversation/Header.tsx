'use client'

import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "../Avatar";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "../AvatarGroup";
import useActiveList from "@/hooks/useActiveList";

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
};

const Header: React.FC<HeaderProps> = ({ conversation }) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return isActive ? 'Active' : 'Offline';
    }, [conversation, isActive])

    return (
        <>
            <ProfileDrawer
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 md:px-6 justify-between items-center shadow-sm dark:bg-zinc-900 dark:border-zinc-700">
                <div className="flex gap-3 items-center">
                    <Link href='/conversations' className="md:hidden block text-violet-500 hover:text-violet-600 transition cursor-pointer dark:hover:text-violet-400">
                        <HiChevronLeft size={32} />
                    </Link>
                    {conversation.isGroup ? (
                        <AvatarGroup users={conversation.users} />
                    ) : (
                        <Avatar user={otherUser} />
                    )}
                    <div className="flex flex-col">
                        <div className="dark:text-zinc-100">
                            {conversation.name || otherUser.name}
                        </div>
                        <div className="text-sm font-light text-zinc-400">
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                    className="text-violet-500 cursor-pointer hover:text-violet-600 transition dark:hover:text-violet-400"
                />
            </div>
        </>
    );
}

export default Header;
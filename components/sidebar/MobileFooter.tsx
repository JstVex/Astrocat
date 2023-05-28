'use client';

import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import { useState } from "react";
import SettingsModal from "./SettingsModal";

interface MobileFooterProps {
    currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
    const routes = useRoutes();
    const { isOpen } = useConversation();
    const [modalOpen, setModalOpen] = useState(false);

    const pathname = usePathname();

    if (isOpen) {
        return null;
    }

    if (pathname?.includes('/astro')) {
        return null;
    }

    return (
        <>
            <SettingsModal
                isOpen={modalOpen}
                currentUser={currentUser}
                onClose={() => setModalOpen(false)}
            />
            <div
                className="
                fixed 
                justify-between 
                w-full 
                bottom-0 
                z-40 
                flex 
                items-center 
                bg-white 
                border-t-[1px] 
                md:hidden
                dark:bg-black
                dark:border-zinc-700
            "
            >
                {routes.map((route) => (
                    <MobileItem
                        key={route.href}
                        href={route.href}
                        active={route.active}
                        icon={route.icon}
                    // onClick={route.onClick}
                    />
                ))}
                <div onClick={() => setModalOpen(true)} className="
                py-2
                px-6
                border-x-[0.5px]
                border-zinc-300
                transition
                duration-300
              text-gray-500 
                hover:bg-gray-100
                dark:hover:bg-zinc-800
                dark:hover:text-zinc-200
                dark:border-zinc-700"
                >
                    <Avatar user={currentUser} />
                </div>

            </div>
        </>
    );
}

export default MobileFooter;
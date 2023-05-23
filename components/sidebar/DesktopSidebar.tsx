'use client'

import useRoutes from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SettingsModal
                isOpen={isOpen}
                currentUser={currentUser}
                onClose={() => setIsOpen(false)}
            />
            <div className="
                hidden 
                md:fixed 
                md:inset-y-0 
                md:left-0 
                md:z-40 
                md:w-20 
                xl:px-6
                md:overflow-y-auto 
                md:bg-white 
                md:border-r-[1px]
                md:pb-4
                md:flex
                md:flex-col
                justify-between
                dark:md:bg-black
                dark:border-zinc-700
            ">
                <nav className="mt-4 flex flex-col justify-between">
                    <ul role="list" className="flex flex-col items-center space-y-1">
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                                onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </nav>
                <nav className="mt-4 flex flex-col justify-between items-center">
                    <div className="cursor-pointer hover:opacity-90 transition" onClick={() => setIsOpen(true)}>
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default DesktopSidebar;
'use client'

import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Link from "next/link";
import { IoLogoOctocat } from 'react-icons/io5'
import { useState } from "react";
import SettingsDrawer from "./SettingsDrawer";

const AstroHeader = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <>
            <SettingsDrawer
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
            />
            <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 md:px-6 justify-between items-center shadow-sm dark:bg-zinc-900 dark:border-zinc-700">
                <div className="flex gap-3 items-center">
                    <Link href='/astro' className="md:hidden block text-violet-500 hover:text-violet-600 transition cursor-pointer dark:hover:text-violet-400">
                        <HiChevronLeft size={32} onClick={() => setSettingsOpen(true)} />
                    </Link>
                    <IoLogoOctocat size={40} className="dark:text-zinc-100" />
                    <div className="flex flex-col">
                        <div className="dark:text-zinc-100">
                            Astro
                        </div>
                        <div className="text-sm font-light text-gray-400 dark:text-zinc-400">
                            Always available
                        </div>
                    </div>
                </div>
                {/* <HiEllipsisHorizontal
                size={32}
                onClick={() => setDrawerOpen(true)}
                className="text-violet-500 cursor-pointer hover:text-violet-600 transition dark:hover:text-violet-400"
            /> */}
            </div>
        </>
    );
}

export default AstroHeader;
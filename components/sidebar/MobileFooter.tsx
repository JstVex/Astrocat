'use client';

import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { usePathname } from "next/navigation";

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    const pathname = usePathname();

    if (isOpen) {
        return null;
    }

    if (pathname?.includes('/astro')) {
        return null;
    }

    return (
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
                    onClick={route.onClick}
                />
            ))}
        </div>
    );
}

export default MobileFooter;
import Link from "next/link";
import { HiChat } from 'react-icons/hi';
import { HiUsers } from 'react-icons/hi2';

const NavFooter = () => {
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
            <Link
                href={'/conversations'}
                className="
                group 
                flex 
                gap-x-3 
                text-sm 
                leading-6 
                font-semibold 
                w-full 
                justify-center 
                p-4 
                py-6
                border-x-[0.5px]
                border-zinc-300
                transition
                duration-300
              text-gray-500 
                hover:text-black 
                hover:bg-gray-100
                dark:text-zinc-200
                dark:hover:bg-zinc-800
                dark:hover:text-zinc-200
                 dark:border-zinc-700
            ">
                <HiChat className="h-6 w-6" />
            </Link>
            <Link
                href={'/users'}
                className="
                group 
                flex 
                gap-x-3 
                text-sm 
                leading-6 
                font-semibold 
                w-full 
                justify-center 
                p-4 
                py-6
                transition
                duration-300
              text-gray-500 
                hover:text-black 
                hover:bg-gray-100
                dark:text-zinc-200
                dark:hover:bg-zinc-800
                dark:hover:text-zinc-200
            ">
                <HiUsers className="h-6 w-6" />
            </Link>
        </div>
    );
}

export default NavFooter;
import Link from "next/link";
import { AiOutlinePlus } from 'react-icons/ai'

const AstroIntroduce = () => {
    return (
        <aside className='fixed hidden inset-y-0 pb-20 md:pb-0 md:left-20 md:w-80 md:block overflow-y-auto md:border-r border-gray-200 left-0 dark:bg-zinc-900 dark:border-zinc-700'>
            <div className='px-5'>
                <div className='flex-col'>
                    <div className='text-2xl font-bold py-4 animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500'>
                        Astro
                    </div>
                    <Link href='/astro/new'>
                        <div className="flex items-center rounded-md my-4 p-4 w-full border dark:border-zinc-700 dark:hover:bg-zinc-800">
                            <AiOutlinePlus className="text-zinc-100" size={25} />
                            <div className="ml-5 dark:text-zinc-100">
                                Start a new chat
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </aside>
    );
}

export default AstroIntroduce;
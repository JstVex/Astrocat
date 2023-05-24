import Link from "next/link";
import { AiOutlinePlus } from 'react-icons/ai'

const AstroState = () => {
    return (
        <div className="px-4 h-full flex justify-center items-center bg-zinc-100 dark:bg-zinc-900">
            <div className="">
                <h3 className='mt-2 text-4xl text-center font-semibold animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500'>
                    Astro is here!
                </h3>
                <div className="text-md mt-5 text-center dark:text-zinc-300">
                    Astro will be your companion in your journey through your life
                </div>
                <div className="text-sm mt-5 dark:text-zinc-300">
                    What Astro can do
                </div>
                <ul className="text-sm mt-1 ml-10 dark:text-zinc-300">
                    <li>Encourage you</li>
                    <li>Cheer you up</li>
                    <li>Be your bestfriend</li>
                    <li>Play fetch with you</li>
                </ul>
                <Link href='/astro/new' className="md:hidden">
                    <div className="flex items-center rounded-md my-4 p-4 w-full border dark:border-zinc-700 dark:hover:bg-zinc-800">
                        <AiOutlinePlus className="text-zinc-100" size={25} />
                        <div className="ml-5 dark:text-zinc-100">
                            Start a new chat
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AstroState;
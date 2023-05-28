'use client'

import { IoTrash } from "react-icons/io5";
import DeleteAstro from "./DeleteAstro";
import { useState } from "react";

const AstroIntroduce = () => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    return (
        <>
            <DeleteAstro
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
            />
            <aside className='fixed hidden  inset-y-0 pb-20 md:pb-0 md:left-20 md:w-80 md:block overflow-y-auto md:border-r border-gray-200 left-0 dark:bg-zinc-900 dark:border-zinc-700'>
                <div className='px-5'>
                    <div className='h-screen flex flex-col items-center justify-around'>
                        <div className='text-3xl text-center font-bold py-4 animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500'>
                            Astro is here!
                        </div>
                        <div className="text-sm text-zinc-800 dark:text-zinc-300 text-center space-y-4">

                            <div className="text-xl">
                                🚀🐱
                            </div>

                            <div className="">
                                Astro is a friendly, adventurous space cat AI who is always there to brighten your conversations.
                            </div>

                            <div>
                                With a positive outlook, encouraging spirit, and sympathetic ear, Astro brings a cosmic touch to your chat experience.
                            </div>

                            <div>
                                Embark on a journey with Astro and explore the galaxy of joyful, adventurous chats!
                            </div>


                            <div className="text-xl text-center">
                                🐱🚀
                            </div>

                        </div>
                        <div className="flex gap-10 my-8">
                            {/* <div onClick={() => setConfirmOpen(true)} className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-90">
                                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center ">
                                    <IoTrash size={20} />
                                </div>
                                <div className="text-sm font-light text-neutral-600 dark:text-zinc-400">
                                    Delete
                                </div>
                            </div> */}
                            <div onClick={() => setConfirmOpen(true)} className="flex items-center rounded-md my-4 p-4 w-full cursor-pointer border border-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
                                <IoTrash className="text-zinc-800 dark:text-zinc-100" size={25} />
                                <div className="ml-5 dark:text-zinc-100">
                                    Delete the conversation
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </aside>
        </>
    );
}

export default AstroIntroduce;
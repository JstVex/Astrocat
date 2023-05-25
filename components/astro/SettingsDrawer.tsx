'use client'

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { IoClose, IoTrash, IoLogoOctocat } from 'react-icons/io5'
import NavFooter from "./NavFooter"
import DeleteAstro from "./DeleteAstro"

interface SettingsDrawerProps {
    isOpen: boolean,
    onClose: () => void
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ isOpen, onClose }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    return (
        <>
            <DeleteAstro
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
            />
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 w-screen bg-black bg-opacity-40" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-zinc-900">
                                            <div className="px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 outline-none ring-1 ring-violet-500 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-600 dark:hover:text-zinc-500"
                                                            onClick={onClose}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <IoClose size={24} aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-6">
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-2">
                                                        <IoLogoOctocat size={40} className="dark:text-zinc-100" />
                                                    </div>
                                                    <div className="text-xl animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500">
                                                        Astro
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-zinc-400">
                                                        Always available
                                                    </div>
                                                    <div className="w-full px-0 pt-10">
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
                                                    </div>
                                                    <div className="mt-16 flex gap-10 my-8">
                                                        <div onClick={() => setConfirmOpen(true)} className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-90">
                                                            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center ">
                                                                <IoTrash size={20} />
                                                            </div>
                                                            <div className="text-sm font-light text-neutral-600 dark:text-zinc-400">
                                                                Delete
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavFooter />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default SettingsDrawer;
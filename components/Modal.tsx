'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen?: boolean,
    onClose: () => void,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

    return (
        <Transition.Root
            show={isOpen}
            as={Fragment}
        >
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="
                        fixed 
                        inset-0 
                        bg-gray-500 
                        bg-opacity-75 
                        transition-opacity
                        dark:bg-zinc-800
                        dark:bg-opacity-75
                        "
                    />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="
                        flex 
                        min-h-full 
                        items-center 
                        justify-center 
                        p-4 
                        text-center 
                        sm:p-0
                        "
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="
                                    relative 
                                    transform 
                                    overflow-hidden 
                                    rounded-lg 
                                    bg-white
                                    px-4 
                                    pb-4
                                    pt-5 
                                    text-left 
                                    shadow-xl 
                                    transition-all
                                    w-full
                                    sm:my-8 
                                    sm:w-full 
                                    sm:max-w-lg 
                                    sm:p-6
                                    dark:bg-zinc-900
                                "
                            >
                                <div
                                    className="
                                        absolute 
                                        right-0 
                                        top-0 
                                        block
                                        pr-4 
                                        pt-4 
                                        z-10
                                    "
                                >
                                    <button
                                        type="button"
                                        className="
                                            rounded-md bg-white text-gray-400 hover:text-gray-500 outline-none ring-1 ring-violet-500 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-600 dark:hover:text-zinc-500
                                        "
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <IoClose className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Modal;
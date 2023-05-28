'use client'

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import { Input } from "../Inputs/Input";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "../Button";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from 'react-icons/bs'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

interface SettingsModalProps {
    isOpen?: boolean,
    currentUser: User,
    onClose: () => void
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, currentUser, onClose }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { theme, setTheme } = useTheme();
    const systemTheme = 'dark'

    let currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setTheme('light')
        }
        if (currentTheme === 'light') {
            setTheme('dark')
        }
    }

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
        }
    });

    const image = watch('image');

    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        })
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post(`/api/settings`, data)
            .then(() => {
                router.refresh();
                onClose();
            })
            .catch(() => toast.error('Something went wrong'))
            .finally(() => setIsLoading(false))
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/40 pb-6 dark:border-zinc-600">
                        <h2 className="text-xl font-semibold leading-7 text-gray-900 dark:text-zinc-100">
                            Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-zinc-500">
                            Edit your public information
                        </p>
                        <div className="mt-6 flex gap-x-8">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">
                                    Photo
                                </label>
                                <div className="mt-2 relative group ">
                                    <Image
                                        src={image || currentUser?.image || '/images/placeholder.jpg'}
                                        width='80'
                                        height='80'
                                        className="rounded-full group-hover:opacity-40"
                                        alt="Avatar"
                                    />
                                    <CldUploadButton
                                        options={{ maxFiles: 1 }}
                                        onUpload={handleUpload}
                                        uploadPreset="vwlb8nzx"
                                    >
                                        <button
                                            disabled={isLoading}
                                            className="flex opacity-0 justify-center rounded-md px-3 py-2 text-xs dark:text-zinc-100 text-zinc-800 absolute top-4 left-0  font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 group-hover:opacity-100"
                                        >
                                            Change avatar
                                        </button>
                                    </CldUploadButton>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Input
                                    disabled={isLoading}
                                    label="Name"
                                    id="name"
                                    errors={errors}
                                    required
                                    register={register}
                                    align={true}
                                />
                            </div>

                        </div>
                        <div className="flex items-center justify-end">

                            <Button
                                disabled={isLoading}
                                type='submit'
                            >
                                Save
                            </Button>
                        </div>
                    </div>

                </div>
            </form>
            <div className="flex mt-5 items-center gap-x-1 md:gap-x-12">
                <div onClick={toggleTheme} className="rounded-md border border-zinc-600 px-3 md:px-4 py-3 text-zinc-300 cursor-pointer flex-1 hover:bg-zinc-50 hover:dark:bg-zinc-800">
                    <div className="flex items-center gap-x-2 md:gap-x-3">
                        {theme === 'dark' ? (
                            <BsSun className="text-zinc-800 dark:text-zinc-100" size={20} />
                        ) : (
                            <BsMoon className="text-zinc-800 dark:text-zinc-100" size={20} />
                        )}

                        <div className="text-sm md:text-md text-zinc-800 dark:text-zinc-100">
                            Change Theme
                        </div>

                    </div>

                </div>

                <div onClick={() => signOut()} className="rounded-md border border-zinc-600 px-3 md:px-4 py-3 text-zinc-300 cursor-pointer flex-1 hover:bg-zinc-50 hover:dark:bg-zinc-800">
                    <div className="flex items-center gap-x-3">
                        <HiArrowLeftOnRectangle className="text-zinc-800 dark:text-zinc-100" size={20} />
                        <div className="text-sm md:text-md text-zinc-800 dark:text-zinc-100">
                            Logout
                        </div>
                    </div>
                </div>

            </div>

        </Modal>
    );
}

export default SettingsModal;

{/* <Button
                                            disabled={isLoading}
                                            secondary
                                            type="button"
                                        >
                                            <span className="dark:text-zinc-100 ">
                                                Change
                                            </span>
                                        </Button> */}
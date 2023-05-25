'use client';

import React, { useCallback, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import { Button } from '@/components/Button';
import { toast } from 'react-hot-toast';

interface DeleteAstroProps {
    isOpen?: boolean;
    onClose: () => void;
}

const DeleteAstro: React.FC<DeleteAstroProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = useCallback(() => {
        setIsLoading(true);

        axios.delete(`/api/astro`)
            .then(() => {
                onClose();
                router.refresh();
            })
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false))
    }, [router, onClose]);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="sm:flex sm:items-start">
                <div
                    className="
                        mx-auto 
                        flex 
                        h-12 
                        w-12 
                        flex-shrink-0 
                        items-center 
                        justify-center 
                        rounded-full 
                      bg-red-50
                        sm:mx-0 
                        sm:h-10 
                        sm:w-10
                    "
                >
                    <FiAlertTriangle
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                    />
                </div>
                <div
                    className="
                        mt-3 
                        text-center 
                        sm:ml-4 
                        sm:mt-0 
                        sm:text-left
                    "
                >
                    <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 dark:text-zinc-100"
                    >
                        Delete conversation with Astro
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-zinc-400">
                            Are you sure you want to delete the current conversation with Astro?
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 flex justify-center sm:justify-end">
                <Button
                    disabled={isLoading}
                    danger
                    onClick={onDelete}
                >
                    Delete
                </Button>
            </div>
        </Modal>
    );
}

export default DeleteAstro;
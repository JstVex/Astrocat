'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    placeholder?: string,
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
    id,
    type,
    required,
    register,
    placeholder,
    errors
}) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none dark:bg-zinc-800 dark:text-zinc-100"
            />
        </div>
    );
}

export default MessageInput;
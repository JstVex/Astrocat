'use client'

import React from "react"
import clsx from "clsx"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}

export const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx("form-input block w-full my-1.5 rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6 dark:bg-zinc-800/50 dark:ring-zinc-600 dark:text-zinc-50 dark:placeholder:text-zinc-200", errors[id] && "focus:ring-rose-500", disabled && "opacity-50 cursor-default")}
                />
            </div>
        </div>
    )
}
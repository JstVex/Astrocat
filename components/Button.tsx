'use client'

import clsx from "clsx"

interface ButtonProps {
    type?: string,
    children?: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    fullWidth?: boolean,
    secondary?: boolean,
    danger?: boolean
}

export const Button: React.FC<ButtonProps> = ({ type, children, onClick, disabled, fullWidth, secondary, danger }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx("flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", disabled && "opacity-50 cursor-default", fullWidth && "w-full", secondary ? "text-zinc-900" : "text-white", danger && "bg-rose-500 hover:bg-roe-600 focus-visible:outline-rose-600", !secondary && !danger && "bg-violet-500 hover:bg-violet-600 focus-visible:outline-violet-600")}
        >
            {children}
        </button>
    )
}
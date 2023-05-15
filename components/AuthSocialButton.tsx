import { IconType } from "react-icons"

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void
}

export const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex w-full justify-center rounded-md bg-white px-4 py-3 text-zinc-500 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 focus:outline-offset-0"
        >
            <Icon className="text-xl" />
        </button>
    )
}
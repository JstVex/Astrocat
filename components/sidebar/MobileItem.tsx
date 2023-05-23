import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <Link
            onClick={handleClick}
            href={href}
            className={clsx(`
                group 
                flex 
                gap-x-3 
                text-sm 
                leading-6 
                font-semibold 
                w-full 
                justify-center 
                p-4 
                transition
                duration-300
              text-gray-500 
                hover:text-black 
                hover:bg-gray-100
                dark:text-zinc-200
                dark:hover:bg-zinc-800
                dark:hover:text-zinc-200
            `,
                active && 'bg-gray-100 text-black dark:bg-zinc-800',
            )}>
            <Icon className="h-6 w-6" />
        </Link>
    );
}

export default MobileItem;
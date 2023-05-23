export default function EmptyState() {
    return (
        <div className="px-4 py-10 h-full flex justify-center items-center bg-zinc-100 dark:bg-zinc-900">
            <div className="text-center">
                <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-800 dark:text-zinc-50">
                    Select a chat or start a new conversation
                </h3>
            </div>
        </div>
    )
}
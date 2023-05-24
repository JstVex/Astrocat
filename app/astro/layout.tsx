import AstroIntroduce from "@/components/astro/AstroIntroduce"
import Sidebar from "@/components/sidebar/Sidebar"

export default async function Userslayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <AstroIntroduce />
                {children}
            </div>
        </Sidebar>
    )
}
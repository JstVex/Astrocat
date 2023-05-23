import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"
import getCurrentUser from "@/actions/getCurrentUser"

export default async function Sidebar({ children }: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!} />
            <MobileFooter />
            <main className="md:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}


import AstroChat from "@/components/astro/AstroChat";
import AstroState from "@/components/astro/AstroState";

export default function AstroCat() {
    return (
        <div className="h-full  md:block md:pl-80">
            {/* @ts-expect-error Server Component */}
            <AstroChat />
        </div>
    )
}
import AstroBody from "./AstroBody";
import AstroForm from "./AstroForm";
import AstroHeader from "./AstroHeader";

const AstroChat = () => {
    return (
        <div className="h-full bg-zinc-100 dark:bg-zinc-900">
            <div className="h-full flex flex-col">
                <AstroHeader />
                <AstroBody />
                <AstroForm />
            </div>
        </div>
    );
}

export default AstroChat;
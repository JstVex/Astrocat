import AstroBody from "./AstroBody";
import AstroForm from "./AstroForm";
import AstroHeader from "./AstroHeader";
import getAstroMessages from "@/actions/getAstroMessages";

const AstroChat = async () => {
    const messages = await getAstroMessages();

    return (
        <div className="h-full bg-white dark:bg-zinc-900">
            <div className="h-full flex flex-col">
                <AstroHeader />
                <AstroBody messages={messages} />
                <AstroForm />
            </div>
        </div>
    );
}

export default AstroChat;
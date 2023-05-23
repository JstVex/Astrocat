import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Body from "@/components/conversation/Body";
import Form from "@/components/conversation/Form";
import Header from "@/components/conversation/Header";

interface IParams {
    conversationId: string,
}

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className='md:pl-80 h-full'>
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }

    return (
        <div className="md:pl-80 h-full dark:bg-zinc-900">
            <div className="h-full flex flex-col">
                <Header conversation={conversation} />
                <Body initialMessages={messages} />
                <Form />
            </div>
        </div>
    )
};

export default ConversationId;
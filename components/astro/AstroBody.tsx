'use client'

import { Astro, User } from "@prisma/client";
import AstroMessageBox from "./AstroMessageBox";

interface AstroBodyProps {
    messages: (Astro & {
        sender: User
    })[]
}

const AstroBody: React.FC<AstroBodyProps> = ({ messages = [] }) => {

    return (
        <div className="flex-1 overflow-y-auto">
            <h3 className="text-zinc-100">
                {messages.map((message) => {
                    return (
                        <AstroMessageBox
                            key={message.id}
                            data={message}
                        />
                    )
                })}
            </h3>
        </div>
    );
}

export default AstroBody;
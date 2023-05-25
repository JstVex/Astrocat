'use client'

// import useConversation from "@/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "@/components/conversation/MessageInput";
// import { CldUploadButton } from "next-cloudinary";

const AstroForm = () => {
    // const { conversationId } = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', { shouldValidate: true });

        axios.post('/api/astro', {
            ...data
        })
            .then(() => console.log('data is', data))
            .catch((error) => console.log('axios error', error.response.data))
    }

    return (
        <div className="py-4 px-4 bg-white border-t flex items-center gap-2 md:gap-4 w-full dark:bg-zinc-900 dark:border-zinc-700">
            {/* <CldUploadButton
                options={{ maxFiles: 1 }
                }
                onUpload={handleUpload}
                uploadPreset="vwlb8nzx"
            >
                <HiPhoto size={30} className="text-violet-500" />
            </CldUploadButton> */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 md:gap-4 w-full">
                <MessageInput id="message" register={register} errors={errors} required placeholder="Message here" />
                <button type="submit" className="rounded-full p-2 bg-violet-500 cursor=pointer hover:bg-violet-500 transition">
                    <HiPaperAirplane size={18} className="text-white" />
                </button>
            </form>
        </div >
    );
}

export default AstroForm;
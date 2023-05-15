"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Inputs/Input";
import { Button } from "./Button";
import { AuthSocialButton } from "./AuthSocialButton";
import { BsGithub, BsGoogle } from 'react-icons/bs'

type Variant = "login" | "register";

export default function AuthForm() {
    const [variant, setVariant] = useState<Variant>("login");
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === "login") {
            setVariant("register");
        } else {
            setVariant("login");
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            paddword: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'register') {

        }

        if (variant === 'login') {

        }
    }

    const socialActions = (action: String) => {
        setIsLoading(true);
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'register' && (
                        <Input label="Name" id="name" register={register} errors={errors} disabled={isLoading} />
                    )}

                    <Input label="Email" id="email" type="email" register={register} errors={errors} disabled={isLoading} />

                    <Input label="Password" id="password" type="password" register={register} errors={errors} disabled={isLoading} />

                    <Button disabled={isLoading} fullWidth type="submit">
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </Button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                        <AuthSocialButton onClick={() => socialActions('github')} icon={BsGithub} />
                        <AuthSocialButton onClick={() => socialActions('google')} icon={BsGoogle} />
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-zinc-500">
                    <div>
                        {variant === 'login' ? 'New to Astrocat?' : 'Already have an account?'}
                    </div>
                    <div className="underline cursor-ppinter" onClick={toggleVariant}>
                        {variant === 'login' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

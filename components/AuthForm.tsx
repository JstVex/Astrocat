"use client";

import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Inputs/Input";
import { Button } from "./Button";
import { AuthSocialButton } from "./AuthSocialButton";
import { BsGithub, BsGoogle } from 'react-icons/bs'
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from 'next-auth/react'


type Variant = "login" | "register";

export default function AuthForm() {
    const session = useSession();
    const router = useRouter();

    const [variant, setVariant] = useState<Variant>("login");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/users')
        }
    }, [session?.status, router])

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
            axios.post('/api/register', data)
                .then(() => signIn('credentials', data))
                .catch(() => toast.error('Something went wrong'))
                .finally(() => setIsLoading(false))
        }

        if (variant === 'login') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials');
                    }

                    if (callback?.ok && !callback?.error) {
                        toast.success('Logged in successfully!');
                        router.push('/users')
                    }
                })
                .finally(() => setIsLoading(false));
        }
    }

    const socialActions = (action: string) => {
        setIsLoading(true);

        signIn(action, {
            redirect: false
        })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully!')
                }
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-zinc-800/50">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'register' && (
                        <Input label="Name" id="name" register={register} errors={errors} disabled={isLoading} />
                    )}

                    <Input label="Email" id="email" type="email" register={register} errors={errors} disabled={isLoading} />

                    <Input label="Password" id="password" type="password" register={register} errors={errors} disabled={isLoading} />

                    <div className="mt-6">
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>

                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-zinc-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500 dark:bg-zinc-800 dark:text-zinc-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                        <AuthSocialButton onClick={() => socialActions('github')} icon={BsGithub} />
                        <AuthSocialButton onClick={() => socialActions('google')} icon={BsGoogle} />
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-zinc-500 dark:text-zinc-400">
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

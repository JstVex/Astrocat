import AuthForm from "@/components/AuthForm"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center py-12 sm:px-6 md:px-8 bg-zinc-100 dark:bg-zinc-900'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <div className="">
          logo
        </div> */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Start your journey with Astrocat!
        </h2>
      </div>
      <AuthForm />
    </main>
  )
}

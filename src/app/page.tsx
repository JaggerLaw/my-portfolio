import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="relative mx-auto flex min-h-screen w-full max-w-8xl flex-col px-8 py-10 sm:px-12 lg:px-16">
        
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Jake Gardner
        </h1>

        <p className="">
          I am an extremely <strong>passionate</strong> developer, I work on web development alongside 
          game development, and when i have some spare time i like to tinker with hardware, soldering and such.
        </p>

      </main>
    </div>
  );
}

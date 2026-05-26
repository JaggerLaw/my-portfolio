import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="relative mx-auto flex min-h-screen w-full max-w-8xl flex-col px-8 py-10 sm:px-12 lg:px-16">
        <div className="container-main">
          <div className="navbar flex items-start justify-between">
            <div className="navbar-name">
              <span>
                Hey I'm <br></br>
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
                Jake Gardner
              </h1>
            </div>

            <div className="navbar-links flex text-end">
              <ul className="flex gap-8 text-lg font-medium text-zinc-600 dark:text-zinc-400 pt-5">
                <li><Link href="#about-anchor">About</Link></li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="description mt-32 text-center mx-auto max-w-lg sm:text-2xl">
            <p id="about-anchor">
              I am an extremely <strong>passionate</strong> New Zealand
              developer with a bachelors in Computer and Information Sciences, I
              am a web developer and in my spare time, game developer, and when
              i have some more spare time i like to tinker with hardware,
              soldering, arduino || Rasp pi projects, modding. <br></br>
              <br></br>
              My expertise is in Full-stack web applications with React,
              Node.js, and .Net Core. for game development projects i like using
              Unity with C#, and currently i am learning Unreal, although i
              already have a strong knowledge of C++, it is still very
              challenging and that's what i love about it, if you want to see
              and not just hear about my passion from here, then send me an
              email and let's have a chat !
            </p>
          </div>
          <div className="career-and-experience-title mt-100 sm:text-5xl flex justify-center pb-10">
            <h1>My Career &</h1>
            <h1>Experience</h1>
          </div>
          <div className="career-and-experience flex justify-center gap-6">
            
            <div
              className="web-development-career outline-2 outline-blue-500 
            outline-offset-2 w-1/3 h-50 rounded-xl"
            ></div>

            <div
              className="game-development-career outline-2 outline-blue-500 
            outline-offset-2 w-1/3 h-50 rounded-xl"
            ></div>

          </div>
        </div>
      </main>
    </div>
  );
}

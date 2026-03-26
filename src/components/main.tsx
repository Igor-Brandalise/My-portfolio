import { Download, MapPin } from "lucide-react";

export function Main() {
  return (
    <main className=" reveal relative mx-auto w-[85%] md:w-[70%]  flex flex-col justify-center md:flex-row text-[#e5e5e5] items-center  pt-20 pb-30 lg:pt-35  gap-12 ">
      <section className="flex flex-col flex-1 mt-8 z-40">
        <span
          className="mt-6 mb-6 h-9 rounded-[30px] inline-flex items-center justify-center w-60 bg-red-950/80 border border-red-500/50 text-[#ff3b3b]
                  text-sm font-medium tracking-wide 
                 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
        >
          🚀 Welcome to my portfolio
        </span>

        <h1 className=" typing-title text-3xl font-bold text-[#FAFAF9] sm:text-4xl z-10">
          Front-end <span className="text-[#ff3b3b]">developer</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[#A8A29E] leading-relaxed tracking-wide md:max-w-[30em]">
          Hi, I'm Igor Brandalise. Developer since 2023, focused on TypeScript,
          React, Next.js, and Node.js. I'm currently building modern projects to
          land my first role in tech, with the long-term goal of evolving into a
          Tech Lead. Dedicated to continuous learning and clean code.
        </p>

        <a
          href="/document/Igor Brandalise - CV.pdf"
          download
          className="z-50 mt-8 block md:w-fit"
        >
          <button
            className="group relative px-8 h-14 inline-flex items-center justify-center gap-3 
               bg-[#ff3b3b] text-black font-extrabold rounded-[15px] z-50
               animate-bounce hover:animate-none transition-all duration-300
               shadow-[0_0_15px_rgba(255,59,59,0.3)] 
               hover:shadow-[0_0_35px_rgba(255,59,59,0.7)] w-[95%] md:w-auto"
          >
            <Download
              size={22}
              className="transition-transform group-hover:scale-110"
            />
            <span className="uppercase tracking-wider text-sm">
              Download CV
            </span>

            <div className="absolute inset-0 rounded-[15px] bg-linear-to-b from-white/20 to-transparent pointer-events-none"></div>
          </button>
        </a>
      </section>

      <section className="hidden md:hidden  lg:flex relative w-fit">
        <img
          src="/pf.jpeg"
          alt="Igor Brandalise"
          className="h-[300px] w-[300px] object-cover rounded-[10px] "
        />

        <div
          className="flex items-center absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 
                bg-[#ff3b3b] text-black p-2 z-10 text-[14px] font-bold rounded-sm gap-2
                shadow-[0_4px_10px_rgba(255,59,59,0.3)] 
                hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <MapPin size={15} />
          SC, Brazil
        </div>
      </section>
    </main>
  );
}

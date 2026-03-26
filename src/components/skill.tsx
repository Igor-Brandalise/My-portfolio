export function Skill() {
  return (
    <main className="reveal flex flex-col xl:flex-row justify-between z-50 pt-40 w-full px-6 pb-25 sm:max-w-[80%] mx-auto gap-12">
      <section className="flex flex-col flex-1 ">
        <h1 className="text-[#ff3b3b] text-3xl md:text-6xl font-bold leading-tight">
          Technologies <br />
          <span className="text-[#FAFAF9]">& Skills</span>
        </h1>
        <div className="h-1.5 w-20 bg-[#ff3b3b] mt-6 mb-16 rounded-full"></div>

        <div className="text-amber-50">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#ff3b3b] pl-4 uppercase tracking-widest">
            Languages
          </h2>

          <ul className="space-y-4 ml-2 text-xl ">
            <li className="font-extrabold">
              <span className="text-[#ff3b3b]">/</span> Portuguese:{" "}
              <span className="font-normal text-zinc-400">Native</span>
            </li>
            <li className="font-extrabold">
              <span className="text-[#ff3b3b]">/</span> English:{" "}
              <span className="font-normal text-zinc-400">Intermediate</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex-1 flex flex-wrap xl:justify-end ">
        <ul className="grid grid-cols-4 sm:grid-cols-4 gap-3 p-2 sm:gap-4 md:p-6 bg-[#121212]/45 border border-white/5 rounded-[30px] backdrop-blur-sm relative h-fit w-fit mx-auto lg:mx-0 ">
          
          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-html-64.png" alt="HTML" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              HTML 5
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-css-64.png" alt="CSS" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              CSS 3
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-javascript-64.png" alt="JS" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[8px] md:text-[10px] transition-all duration-300 text-center uppercase">
              JavaScript
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-typescript-64.png" alt="TS" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[8px] md:text-[10px] transition-all duration-300 text-center uppercase">
              TypeScript
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-reagir-64.png" alt="React" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              React
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-git-64.png" alt="Git" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              Git
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-github-64.png" alt="GitHub" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              GitHub
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-tailwind-css-64.png" alt="Tailwind" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[8px] md:text-[10px] transition-all duration-300 text-center uppercase">
              Tailwind
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-node.js-64.png" alt="Node" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              NodeJs
            </span>
          </li>

          <li className="group relative bg-[#1A1A1A] border border-white/10 aspect-square w-20 sm:w-22 flex items-center justify-center rounded-[15px] md:rounded-[20px] transition-all duration-300 hover:border-[#ff3b3b]/50 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,59,59,0.2)] overflow-hidden">
            <img src="/skill/icons8-nextjs-64.png" alt="Next" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-0 transition-all duration-500"/>
            <span className="absolute opacity-0 group-hover:opacity-100 text-[#ff3b3b] font-bold text-[9px] md:text-xs transition-all duration-300 text-center uppercase">
              NextJs
            </span>
          </li>

          <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-[#ff3b3b]/40 rounded-tr-[15px] md:rounded-tr-[20px] pointer-events-none"></div>
        </ul>
      </section>
    </main>
  );
}
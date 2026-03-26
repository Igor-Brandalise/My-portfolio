import { ExternalLink } from "lucide-react";

export function Project() {
  const projects = [
    {
      name: "BrandaOs",
      url: "https://branda-os.vercel.app/",
      img: "/projects/brandaos.png",
      alt: "branda os",
      stack: "React • TypeScript • Tailwind",
    },
    {
      name: "Portfólio",
      url: "https://my-portfolio-flame-eight-82.vercel.app/",
      img: "/projects/portfolio.png",
      alt: "portfólio",
      stack: "React • TypeScript • Tailwind",
    },
    {
      name: "Todo List",
      url: "https://todo-list-seven-rho-99.vercel.app/",
      img: "/projects/todolist.png",
      alt: "todo list",
      stack: "React • JavaScript • CSS",
    },
    {
      name: "My Links",
      url: "https://my-links-lilac.vercel.app/",
      img: "/projects/mylinks.png",
      alt: "my links",
      stack: "React • Tailwind • TypeScript",
    },
    {
      name: "MailSync",
      url: "https://mailsync-two.vercel.app/",
      img: "/projects/mailsync.png",
      alt: "mailsync",
      stack: "HTML • JavaScript • CSS",
    },
    {
      name: "Planner",
      url: "https://planner-ten-vert.vercel.app/",
      img: "/projects/planner.png",
      alt: "planner",
      stack: "HTML • JavaScript • CSS",
    },
  ];

  return (
    <main className="reveal flex flex-col pb-35 relative mx-auto w-[85%] md:w-[70%] mt-30">
      <section className="flex flex-col items-center lg:flex-row lg:justify-between z-30">
        <h1 className="text-4xl lg:text-[50px] font-extrabold text-[#e5e5e5]">
          <span className="text-[#ff3b3b]">My</span> Projects
        </h1>

        <a href="https://github.com/Igor-Brandalise" target="_blank">
          <button className=" relative overflow-hidden bg-[#121212]/80 border  border-white/10 text-white font-bold mt-5 lg:mt-0 py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-95">
            <span className="absolute inset-0  from-transparent via-red-600/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>

            <span className="relative z-10 flex items-center gap-2">
              See all my projects
              <ExternalLink size={17}/>
            </span>
          </button>
        </a>
      </section>

      <section className="flex justify-center items-center z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 w-full">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] h-56 lg:h-60 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff3b3b]/60 hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition duration-500"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-[#ff3b3b] text-sm font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-white font-semibold text-lg">
                  {project.name}
                </p>

                <span className="text-zinc-400 text-sm">{project.stack}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export function Project() {
  const projects = [
    {
      name: "Portfólio",
      url: "https://my-portfolio-jet-one-16.vercel.app/",
      img: "/projects/icons8-portfólio-50.png",
      alt: "portfólio logo",
    },
    {
      name: "MailSync",
      url: "https://mailsync-two.vercel.app/",
      img: "/projects/icons8-online-registration-66.png",
      alt: "registration",
    },
    {
      name: "Planner",
      url: "https://planner-ten-vert.vercel.app/",
      img: "/projects/icons8-planejador-50.png",
      alt: "planner",
    },
    {
      name: "Profile Card",
      url: "https://profile-card-zeta-eight.vercel.app/",
      img: "/projects/icons8-profile-card-50.png",
      alt: "profile card",
    },
    {
      name: "Todo List",
      url: "https://todo-list-seven-rho-99.vercel.app/",
      img: "/projects/icons8-todo-list-50.png",
      alt: "todo-list",
    },
    {
      name: "Buscador de CEP",
      url: "https://buscador-de-cep-ruby.vercel.app/",
      img: "/projects/icons8-pesquisar-50.png",
      alt: "lupa",
    },
  ];
  return (
    <main className="flex flex-col  lg:ml-15 xl:ml-28 pl-[1.8rem] mt-10 lg:mt-20">
      <section className="flex flex-col lg:flex-row lg:justify-between z-30">
        <h1 className="text-[40px] lg:text-[50px] font-extrabold text-white ">
          <span className="text-red-600">My</span> Projects
        </h1>

        <a href="https://github.com/Igor-Brandalise" target="_blank">
          <p className="text-white text-[20px] font-bold mt-5 lg:mr-32 hover:text-red-600 transition-colors duration-250 ease-in-out">
            See all my projects {">"}{" "}
          </p>
        </a>
      </section>

      <section className="flex justify-center items-center lg:block lg:ml-30  z-50">
        <div className="grid grid-cols-1 grid-rows-7  lg:grid-rows-4 lg:grid-cols-2 gap-16 lg:gap-22 lg: items-center mt-20 ">
          {projects.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <div
                key={project.name}
                className="card flex flex-col gap-2 justify-center items-center bg-(--bg-pers) border-zinc-700 border rounded-2xl p-4  w-65 h-40 lg:w-100 lg:h-55 shadow transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-12 h-12 object-contain"
                />
                <p className="text-white font-medium">{project.name}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

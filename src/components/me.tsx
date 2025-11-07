export function About() {
  return (
    <main className="flex flex-col gap-16 px-6 py-10 lg:ml-15 xl:ml-28 lg:max-w-[70%] md:mr-10 mx-auto text-white relative z-30 pb-30">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">
          About{" "}
          <span id="me" className="text-red-600">
            me
          </span>
        </h1>
        <p className="text-lg leading-6">
          Olá, meu nome é Igor Brandalise, e sou apaixonado pelo mundo da
          tecnologia e da programação. Tenho 18 anos e comecei minha jornada no
          desenvolvimento web em 2023. Desde então, venho me dedicando a
          aprender e a explorar diferentes ferramentas e linguagens, sempre
          buscando transformar ideias em soluções práticas e funcionais. Meu
          objetivo atual é conquistar meu primeiro emprego na área, onde possa
          aplicar meus conhecimentos, aprender com profissionais experientes e
          crescer como desenvolvedor. No futuro, almejo me tornar um Tech Lead,
          liderando equipes e contribuindo para projetos inovadores que façam a
          diferença.
        </p>
      </section>

      <section id="curso" className="space-y-8">
        <h2 className="text-4xl font-semibold border-b-2 border-zinc-400 inline-block pb-1">
          Cursos
        </h2>

        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative before:content-['-'] before:text-5xl before:text-[#fafaf9] before:mr-2">
            <img
              src="/otaviomirandalogo-2.webp"
              alt="Logo"
              className="ml-[0.6em] w-10 h-10 rounded"
            />
            Curso de JavaScript e TypeScript (Fullstack)
          </h3>
          <h4 className="text-lg font-bold text-zinc-200">
            Luiz Otávio Miranda
          </h4>
          <p className="leading-6 text-base">
            O Curso de JavaScript e TypeScript do Básico ao Avançado oferece um
            aprendizado sobre o desenvolvimento full stack. O curso ensina
            JavaScript moderno (ES6+), com aplicações em frameworks e
            bibliotecas populares como React, Redux, Node.js, Express, MongoDB e
            MySQL/MariaDB. Inclui também o aprendizado de TypeScript, segurança,
            API REST, Testes com Jest e Padrões de Projeto. Os alunos
            desenvolvem projetos práticos como um CRUD, sistemas de login e um
            blog utilizando NextJS e Strapi, além de aprender sobre deploy,
            infraestrutura e bancos de dados.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative before:content-['-'] before:text-5xl before:text-[#fafaf9] before:mr-2">
            <img
              src="/cursoemvideo.webp"
              alt="Logo"
              className="ml-[0.6em] w-10 h-10 rounded"
            />
            Curso de HTML e CSS
          </h3>
          <h4 className="text-lg font-bold text-zinc-200">Curso em Vídeo</h4>
          <p className="leading-6 text-base">
            O Curso de HTML e CSS, do Curso em Vídeo, oferece uma abordagem
            prática e detalhada para quem quer aprender a desenvolver páginas
            web. O curso cobre a estruturação de conteúdo com HTML, como usar
            tags semânticas e criar links, listas e formulários, além de
            explorar o CSS para estilização, trabalhando com cores, fontes,
            espaçamentos e layouts.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative before:content-['-'] before:text-5xl before:text-[#fafaf9] before:mr-2">
            <img
              src="/cursoemvideo.webp"
              alt="Logo"
              className="ml-[0.6em] w-10 h-10 rounded"
            />
            Curso de JavaScript
          </h3>
          <h4 className="text-lg font-bold text-zinc-200">Curso em Vídeo</h4>
          <p className="leading-6 text-base">
            Um curso notável que concluí foi o curso de Javascript ministrado
            por Gustavo Guanabara, instrutor experiente e renomado na área,
            conhecido por sua incrível metodologia de ensino. Este curso me
            proporcionou uma compreensão abrangente de Javascript, que também
            abordou lógica de programação, ajudando-me a desenvolver sites
            dinâmicos e interativos.
          </p>
        </div>
      </section>
    </main>
  );
}

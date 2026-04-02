export function About() {
  return (
    <main className="reveal relative mx-auto w-[90%] lg:w-[60%] mt-40 flex flex-col text-[#e5e5e5] z-30 pb-30 ">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">
          About{" "}
          <span id="me" className="text-[#ff3b3b]">
            me
          </span>
        </h1>

        <div className="flex flex-col text-lg gap-5  ">
          <p className="mt-3">
            Hello, my name is Igor Brandalise, and I'm passionate about the
            world of technology and programming. I'm 18 years old and started my
            web development journey in 2023.
          </p>
          <p>
            Since then, I've dedicated myself to learning and exploring
            different tools and languages, always seeking to transform ideas
            into practical and functional solutions. Currently, I’m also
            studying Software Engineering at university while continuing to
            deepen my knowledge in web development.
          </p>
          <p>
            My current goal is to get my first job in the field, where I can
            apply my knowledge, learn from experienced professionals, and grow
            as a developer.
          </p>
          <p>
            In the future, I aspire to become a Tech Lead, leading teams and
            contributing to innovative projects that make a difference.
          </p>
        </div>
      </section>

      <section id="curso" className="mt-10">
        <h2 className="text-4xl font-semibold border-b-2 border-zinc-400 inline-block pb-1">
          Courses
        </h2>

        <div className="space-y-2 mt-10">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative ">
            <img
              src="/otaviomirandalogo-2.webp"
              alt="Luiz Otávio Miranda Logo"
              className=" w-10 h-10 rounded"
            />
            Course of JavaScript and TypeScript (Fullstack)
          </h3>
          <h4 className="text-sm font-bold text-[#ff3b3b]">Luiz Otávio Miranda</h4>
          <p className="leading-6 text-base text-[#FAFAF9]">
            The Basic to Advanced JavaScript and TypeScript Course offers a
            comprehensive learning experience in full-stack development. The
            course teaches modern JavaScript (ES6+), with applications in
            popular frameworks and libraries such as React, Redux, Node.js,
            Express, MongoDB, and MySQL/MariaDB. It also includes learning
            TypeScript, security, REST API, Jest testing, and design patterns.
            Students develop practical projects such as a CRUD application,
            login systems, and a blog using NextJS and Strapi, in addition to
            learning about deployment, infrastructure, and databases.
          </p>
        </div>

        <div className="space-y-2 mt-10">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative ">
            <img
              src="/cursoemvideo.webp"
              alt="Curso em Vídeo Logo"
              className=" w-10 h-10 rounded"
            />
            Course of HTML and CSS
          </h3>
          <h4 className="text-sm font-bold text-[#ff3b3b]">Curso em Vídeo</h4>
          <p className="leading-6 text-base text-[#FAFAF9]">
            The Course of HTML and CSS, from Curso em Vídeo, offers a practical
            and detailed approach for those who want to learn how to develop web
            pages. The course covers the structuring of content with HTML, how
            to use semantic tags and create links, lists and forms, as well as
            exploring CSS for styling, working with colors, fonts, spacing and
            layouts.
          </p>
        </div>

        <div className="space-y-2 mt-10">
          <h3 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold relative ">
            <img
              src="/cursoemvideo.webp"
              alt="Curso em Vídeo Logo"
              className=" w-10 h-10 rounded"
            />
            Course of JavaScript
          </h3>

          <h4 className="text-sm font-bold text-[#ff3b3b]">Curso em Vídeo</h4>
          <p className="leading-6 text-base text-[#FAFAF9]">
            A remarkable course I completed was the Javascript course taught by
            Gustavo Guanabara, an experienced and renowned instructor in the
            field, known for his incredible teaching methodology. This course
            provided me with a comprehensive understanding of Javascript, which
            also covered programming logic, helping me to develop dynamic and
            interactive websites.
          </p>
        </div>
      </section>
    </main>
  );
}

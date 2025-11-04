export function Main() {
  return (
    <main className="flex flex-col md:flex-row text-amber-50 z-50 items-center">
      <section className="flex flex-col pl-[1.8rem] pt-30 md:pt-38">
        <h1 className="z-40 text-[2.5rem] font-bold md:text-[4.2rem]">
          Hi There, <br /> I'm Igor{" "}
          <span className="text-red-600">Brandalise</span>
        </h1>

        <h2 className="pt-4 font-bold text-[1.4rem]">Front-end developer</h2>

        <p className="pt-4 font-medium mr-4 indent-1.5 max-w-2xl">
          Olá, meu nome é Igor Brandalise, sou apaixonado no mundo da tecnologia
          e na área de programação. Comecei a estudar programação web em 2023 e
          me sinto cada vez mais inspirado a seguir minha carreira na área. Meu
          objetivo atual é conquistar meu primeiro emprego na área e futuramente
          me tornar um Tech Lead.
        </p>

        <button className="bg-amber-50 font-bold mt-8 rounded-[10px] text-black w-28 h-10">
          Donwload CV
        </button>
      </section>

      <section className=" h-auto p-7 md:pl-30 md:mt-34 ">
        <img
          src="../../public/igor.jpeg"
          alt="Igor Brandalise"
          className="md:h-[300px] md:w-[300px] rounded-[50%] w-[250px] h-[250px]"
        />
      </section>

      <section className="transform scale-0 hidden xl:scale-100 lg:bg-(--bg-pers) lg:border border-(--b-color) lg:rounded-[60px] lg:p-2 lg:items-center lg:h-100 lg:flex lg:flex-col lg:w-24 lg:m-4 lg:mt-37 lg:pt-10 lg:ml-30 lg:gap-6">
        <a href="https://github.com/Igor-Brandalise" target="_blank">
          <img
            src="../../public/icons8-github-48.png"
            alt="github logo"
            height="60px"
            width="60px"
          />
        </a>

        <a href="https://instagram.com/igor_brandalise" target="_blank">
          <img
            src="../../public/icons8-instagram-50.png"
            alt="instagram logo"
            height="60px"
            width="60px"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/igor-brandalise-a08280302/"
          target="_blank"
        >
          <img
            src="../../public/icons8-linkedin-50.png"
            alt="linkedin logo"
            height="60px"
            width="60px"
          />
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=brandaliseigor123@gmail.com"
          target="_blank"
        >
          <img
            src="../../public/icons8-gmail-64.png"
            alt="gmail logo"
            height="60px"
            width="60px"
          />
        </a>
      </section>
    </main>
  );
}

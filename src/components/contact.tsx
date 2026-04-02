export function Contacts() {
  return (
    <main className="reveal flex flex-col items-center z-50 pt-35 min-h-screen px-4">
      <div className="w-full sm:max-w-[60%] self-center">
        <h1 className="text-[#FAFAF9] text-3xl md:text-[40px] font-bold tracking-tight">
          Contact <span className="text-[#ff3b3b]">Me</span>
        </h1>
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-14 mb-20 max-w-[58em]">
        <a
          href="https://github.com/Igor-Brandalise"
          target="_blank"
          className="group"
        >
          <li className="bg-[#121212]/40 backdrop-blur-md border border-white/5 h-36 w-36 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 group-hover:border-[#ff3b3b]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
            <img
              src="/icons8-github-64.png"
              alt="Github logo"
              className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[#FAFAF9] text-sm md:text-md mt-4 font-medium opacity-70 group-hover:opacity-100">
              GitHub
            </p>
          </li>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=brandaliseigor123@gmail.com"
          target="_blank"
          className="group"
        >
          <li className="bg-[#121212]/40 backdrop-blur-md border border-white/5 h-36 w-36 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 group-hover:border-[#ff3b3b]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
            <img
              src="/icons8-gmail-novo-64.png"
              alt="Gmail logo"
              className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[#FAFAF9] text-sm md:text-md mt-4 font-medium opacity-70 group-hover:opacity-100">
              Gmail
            </p>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/igor-brandalise"
          target="_blank"
          className="group"
        >
          <li className="bg-[#121212]/40 backdrop-blur-md border border-white/5 h-36 w-36 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 group-hover:border-[#ff3b3b]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
            <img
              src="/icons8-linkedin-64.png"
              alt="LinkedIn logo"
              className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[#FAFAF9] text-sm md:text-md mt-4 font-medium opacity-70 group-hover:opacity-100">
              LinkedIn
            </p>
          </li>
        </a>

        <a
          href="https://discord.com/users/746485641927327826"
          target="_blank"
          className="group"
        >
          <li className="bg-[#121212]/40 backdrop-blur-md border border-white/5 h-36 w-36 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 group-hover:border-[#ff3b3b]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
            <img
              src="/icons8-logo-discord-64.png"
              alt="Discord logo"
              className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[#FAFAF9] text-sm md:text-md mt-4 font-medium opacity-70 group-hover:opacity-100">
              Discord
            </p>
          </li>
        </a>

        <a href="/document/Igor Brandalise - CV.pdf" download className="group">
          <li className="bg-[#121212]/40 backdrop-blur-md border border-white/5 h-36 w-36 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 group-hover:border-[#ff3b3b]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,59,59,0.15)]">
            <img
              src="/icons8-currículo-64.png"
              alt="Resume"
              className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[#FAFAF9] text-sm md:text-md mt-4 font-medium opacity-70 group-hover:opacity-100">
              Resume
            </p>
          </li>
        </a>
      </ul>
    </main>
  );
}

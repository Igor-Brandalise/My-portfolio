export function Contacts() {
  return (
    <main className="flex justify-center pb-25 mt-20">
      <ul className="z-50 flex flex-col gap-10">
        <a href="https://github.com/Igor-Brandalise" target="_blank">
          <li className="blur-custom border-red-800 border rounded-[7px] flex justify-center items-center p-4 w-[40vh] h-18 lg:w-[60vh] ">
            <img src="/icons8-github-48.png" alt="" />
          </li>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=brandaliseigor123@gmail.com"
          target="_blank"
        >
          <li className="blur-custom border-red-800 border rounded-[7px] flex justify-center items-center p-4 w-[40vh] h-18 lg:w-[60vh] ">
            <img src="/icons8-gmail-64.png" alt="" />
          </li>
        </a>
        <a href="https://instagram.com/igor_brandalise" target="_blank">
          <li className="blur-custom border-red-800 border rounded-[7px] flex justify-center items-center p-4 w-[40vh] h-18 lg:w-[60vh] ">
            <img src="/icons8-instagram-50.png" alt="" />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/igor-brandalise-a08280302/"
          target="_blank"
        >
          <li className="blur-custom border-red-800 border rounded-[7px] flex justify-center items-center p-4 w-[40vh] h-18 lg:w-[60vh] ">
            <img src="/icons8-linkedin-50.png" alt="" />
          </li>
        </a>
        <a href="/Igor-Brandalise-CV.pdf" download>
          <li className="blur-custom border-red-800 border rounded-[7px] flex justify-center items-center p-4 w-[40vh] h-18 lg:w-[60vh]  text-amber-50 font-extrabold text-[20px]">
            Download Resume
          </li>
        </a>
      </ul>
    </main>
  );
}

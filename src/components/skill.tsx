export function Skill() {
  return (
    <main className="flex flex-col relative  lg:ml-15 xl:ml-28 pb-20  ">
      <h1 className="z-50 text-white mt-2 lg:mt-1 p-[1.8rem] text-[3rem] font-bold flex-wrap">
        Technologies <span className="text-red-600">&</span> Skills
      </h1>

      <section className="pl-[1.8rem] z-40   p-5 mb-5">
        <ul className="grid grid-cols-[repeat(3,auto)] lg:justify-end lg:mr-80 gap-8 lg:gap-5">
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-html-50.png"
              alt="html logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src=" /skill/icons8-css-50.png"
              alt="css logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-javascript-48.png"
              alt="javascript logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-typescript-50.png"
              alt="typescript logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-react-48.png"
              alt="react logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-git-50.png"
              alt="git logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-github-50.png"
              alt="github logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className=" items-center justify-center w-23 h-23">
            <img
              src="https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FA5252"
              alt="Tailwind css"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
          <li className="items-center justify-center ">
            <img
              src="/skill/icons8-figma-50.png"
              alt="figma logo"
              className="p-5 border-zinc-700 border bg-(--bg-pers) rounded-[20px]"
            />
          </li>
        </ul>
      </section>

      <section className="z-40 text-amber-50 pl-[1.8rem]">
        <h2 className="text-[30px] font-medium">Languages</h2>
        <ul className="pl-3 pt-4 text-[17px] lg:pt-2">
          <li className="font-extrabold">
            {" "}
            - Portuguese: <span className="font-normal">Native</span>
          </li>
          <li className="font-extrabold ">
            {" "}
            - English: <span className="font-normal">Intermediate</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

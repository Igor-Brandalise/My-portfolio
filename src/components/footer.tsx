export function Footer() {
  return (
    <footer className="reveal mt-auto text-white bg-[#121212]/95  z-50 w-full bottom-0 flex justify-between  border-t-custom h-18 absolute items-center">
      <div className="w-[85%] md:w-[70%] flex justify-between relative mx-auto">
        <span>&copy; Igor Brandalise</span>
        <span>
          Icons by{" "}
          <a
            href="https://icons8.com"
            target="_blank"
            className="text-amber-50 hover:text-[#ff3b3b] "
          >
            {" "}
            Icons8
          </a>
        </span>
      </div>
    </footer>
  );
}

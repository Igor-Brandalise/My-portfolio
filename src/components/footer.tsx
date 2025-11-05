export function Footer() {
  return (
    <footer className="text-white blur-custom z-50 w-full bottom-0 flex justify-between p-4 border-t-custom h-16 fixed items-center">
      <span className="md:ml-4">&copy; Igor Brandalise</span>
      <span className="md:mr-4">
        Icons by{" "}
        <a
          href="https://icons8.com"
          target="_blank"
          className="text-amber-50 hover:text-red-600"
        >
          {" "}
          Icons8
        </a>
      </span>
    </footer>
  );
}

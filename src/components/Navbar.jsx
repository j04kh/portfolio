import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-12 px-3 bg-zinc-900 z-20 bg-opacity-75 fixed flex items-center justify-between backdrop-blur-sm drop-shadow-md ">
      <a href="#">
        <h1 className="font-light">
          {"<"}
          <span className="font-bold">JH</span>
          {" />"}
        </h1>
      </a>
      <Link href="https://github.com/j04kh/portfolio">
        <a target="_blank" className="mt-2">
          <Image
            src={`/icons/github.png`}
            alt="github"
            height={25}
            width={25}
            className="rounded-full"
          />
        </a>
      </Link>
    </header>
  );
};

export default Navbar;

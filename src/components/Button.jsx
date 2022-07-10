import Link from "next/link";

const Button = ({ title, url, primary }) => {
  return primary ? (
    <Link href={url}>
      <a
        className="w-48 px-5 py-2 mx-2 my-1 dark:bg-slate-800 bg-sky-900 rounded-full text-center hover:transition duration-50 ease-in transform hover:bg-slate-900 focus:outline-zinc-300 transition-all duration-50"
        target="_blank"
      >
        <p className="text-xs font-medium text-gray-300">{title}</p>
      </a>
    </Link>
  ) : (
    <Link href={url}>
      <a
        className="w-48 px-5 py-2 mx-2 my-1 dark:bg-zinc-800 bg-slate-600 rounded-full text-center hover:transition duration-50 ease-in transform hover:bg-slate-900 focus:outline-zinc-300 transition-all duration-50"
        target="_blank"
      >
        <p className="text-xs font-medium text-gray-300">{title}</p>
      </a>
    </Link>
  );
};

export default Button;

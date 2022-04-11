import Link from "next/link";

const Button = ({ title, url, primary }) => {
  return primary ? (
    <Link href={url}>
      <a
        className="w-full px-5 py-2 mx-2 bg-slate-900 rounded-md text-center hover:transition duration-300 ease-in transform hover:bg-slate-700 focus:outline-zinc-300"
        target="_blank"
      >
        <p className="text-xs font-medium text-gray-300">{title}</p>
      </a>
    </Link>
  ) : (
    <Link href={url}>
      <a
        className="w-full px-5 py-2 mx-2 bg-zinc-900 rounded-md text-center hover:transition duration-300 ease-in transform hover:bg-zinc-700 focus:outline-zinc-300"
        target="_blank"
      >
        <p className="text-xs font-medium text-gray-300">{title}</p>
      </a>
    </Link>
  );
};

export default Button;

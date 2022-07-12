import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-[250px] mt-8 mb-2">
      <h1 className="text-xl font-semibold">Let&apos;s get in touch!</h1>
      <div className="mt-5 flex justify-evenly items-center text-xs font-semibold">
        <Link href="https://github.com/j04kh">
          <a
            className="w-[100px] bg-gray-800 text-gray-100 py-2 rounded-sm"
            target="_blank"
          >
            GITHUB
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/j04kh/">
          <a
            className="w-[100px] bg-sky-700 text-gray-100 py-2 rounded-sm"
            target="_blank"
          >
            LINKEDIN
          </a>
        </Link>
      </div>
      <p className="mt-4 text-xs font-light dark:font-thin">
        joaquinhernandezph@gmail.com
      </p>
    </div>
  );
};

export default Contact;

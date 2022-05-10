import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-[250px] mt-8 mb-2">
      <h1 className="text-xl font-semibold">Let&apos;s get in touch!</h1>
      <div className="mt-5 flex justify-evenly items-center">
        <Link href="https://github.com/j04kh">
          <a target="_blank">
            <Image
              src={`/icons/github.png`}
              alt="github"
              height={50}
              width={50}
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/j04kh/">
          <a target="_blank">
            <Image
              src={`/icons/linkedin.png`}
              alt="linkedin"
              height={50}
              width={50}
              className="rounded-lg"
            />
          </a>
        </Link>
      </div>
      <p className="mt-4 text-xs font-thin">joaquinhernandezph@gmail.com</p>
    </div>
  );
};

export default Contact;

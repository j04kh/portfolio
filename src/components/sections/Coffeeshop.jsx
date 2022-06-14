import Image from "next/image";
import Button from "../Button";

const Coffeeshop = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl h-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl font-semibold mb-5">Coffeeshop</h1>
      <div className="w-[60%] md:w-full max-w-sm">
        <Image
          src="/projects/coffeeshop.png"
          width={922}
          height={1080}
          alt="Coffeeshop overview"
        />
      </div>
      <h2 className="text-sm mt-6">
        Coffeeshop e-commerce with shopping cart functionality, search and
        filters by different criteria. Light/dark mode and toast notifications.
        <br />
        Built with Next.js, ChakraUI and Redux.
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center">
        <Button
          title="VIEW DEMO"
          url="https://coffeeshop-zeta.vercel.app/"
          primary
        />
        <Button title="REPOSITORY" url="https://github.com/j04kh/coffeeshop" />
      </div>
    </section>
  );
};

export default Coffeeshop;

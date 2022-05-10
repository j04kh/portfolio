import Image from "next/image";
import Button from "../Button";

const Rickandmorty = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl h-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl font-semibold">Rick and Morty</h1>
      <div className="w-full my-16 max-w-md">
        <Image
          src="/projects/rickandmorty.png"
          width={646}
          height={409}
          alt="Rick and Morty overview"
        />
      </div>
      <h2 className="text-sm mt-6">
        3D web based on the Rick and Morty TV series. Explore characters,
        episodes and locations.
        <br />
        Built with React, TailwindCSS, React Three Fiber and GraphQL.
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center">
        <Button
          title="VIEW DEMO"
          url="https://rickandmorty-3d.vercel.app/"
          primary
        />
        <Button
          title="REPOSITORY"
          url="https://github.com/j04kh/rickandmorty"
        />
      </div>
    </section>
  );
};

export default Rickandmorty;

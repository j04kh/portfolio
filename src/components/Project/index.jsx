import Image from "next/image";
import Button from "./Button";

const Project = ({ name, description, image, deploy, repo }) => {
  return (
    <article className="w-full max-w-[300px] m-3 flex flex-col bg-zinc-800 rounded-lg">
      <Image
        alt="Project overview"
        height={480}
        width={640}
        src={`/projects/${image}.png`}
      />
      <div className="w-full px-4 py-2 flex flex-1 flex-col">
        <h1 className="font-medium text-md">{name}</h1>
        <h2 className="text-xs font-thin">{description}</h2>
        <div className="w-full h-12 mt-2 flex items-center justify-evenly left-0 bottom-0">
          <Button primary title="DEMO" url={deploy} />
          <Button title="REPOSITORY" url={repo} />
        </div>
      </div>
    </article>
  );
};

export default Project;

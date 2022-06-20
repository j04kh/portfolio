import Image from "next/image";
import Button from "../Button";

const Tesla = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl h-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl font-semibold mb-5">Tesla Model 3</h1>
      <div className="w-[60%] md:w-full max-w-sm">
        <Image
          src="/projects/tesla.png"
          width={689}
          height={614}
          alt="Tesla project overview"
        />
      </div>
      <h2 className="text-sm mt-6">
        Tesla Model 3 Specs page with animated 3D model.
        <br />
        Built with React Three Fiber and TailwindCSS.
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center">
        <Button
          title="VIEW DEMO"
          url="https://tesla-model3-3d.vercel.app/"
          primary
        />
        <Button
          title="REPOSITORY"
          url="https://github.com/j04kh/tesla-model3-3d"
        />
      </div>
    </section>
  );
};

export default Tesla;

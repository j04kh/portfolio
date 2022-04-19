import dynamic from "next/dynamic";
import ArrowDown from "../ArrowDown";
import { motion } from "framer-motion";

const Macbook = dynamic(() => import("../Macbook"), {
  ssr: false,
});

const Home = () => {
  return (
    <motion.section
      className="h-screen w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-full pt-0 mb-32 flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
        <div>
          <h1 className="text-xl">Hello, I&apos;m</h1>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Joaquin Hernandez
          </h1>
          <h2 className=" text-sm mt-1 font-light">FRONTEND DEVELOPER</h2>
        </div>
        <div className="w-[300px] h-72">
          <Macbook />
        </div>
      </div>
      <ArrowDown />
    </motion.section>
  );
};

export default Home;

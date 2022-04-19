import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
// import Projects from "../components/sections/Projects";
import dynamic from "next/dynamic";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const Projects = dynamic(() => import("../components/sections/Projects"), {
  ssr: false,
});

export default function Portfolio() {
  const date = new Date();
  return (
    <div className="w-full h-full min-w-screen min-h-screen px-5 bg-zinc-900 flex flex-col items-center font-Montserrat text-gray-100">
      <Head>
        <title>Joaquin Hernandez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta name="author" content="Joaquin Hernandez" />
      </Head>
      <Navbar />
      <AnimatePresence>
        <Home />
      </AnimatePresence>
      <Projects />
      <About />
      <footer className="w-screen mb-2 mt-10 text-center text-xs font-light">
        <p>{`© ${date.getFullYear()} Joaquín Hernández.`}</p>
      </footer>
    </div>
  );
}

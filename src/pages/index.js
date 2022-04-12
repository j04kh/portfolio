import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import Head from "next/head";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../components/sections/Projects"), {
  ssr: false,
});

const About = dynamic(() => import("../components/sections/About"), {
  ssr: false,
});

export default function Portfolio() {
  const date = new Date();
  return (
    <div className="w-full h-full min-w-screen min-h-screen px-5 bg-zinc-900 flex flex-col items-center font-Montserrat text-gray-100">
      <Head>
        <title>Joaquin Hernandez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta name="author" content="Joaquin Hernandez" />
      </Head>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <footer className="w-screen mb-2 mt-10 text-center text-xs font-light">
        <p>{`© ${date.getFullYear()} Joaquín Hernández.`}</p>
      </footer>
    </div>
  );
}

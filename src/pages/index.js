import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Head from "next/head";

export default function Portfolio() {
  const date = new Date();
  return (
    <div className="w-full h-full min-w-screen min-h-screen px-5 bg-zinc-900 flex flex-col items-center font-Montserrat text-gray-100">
      <Head>
        <title>Joaquín Hernández</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
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

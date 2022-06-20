import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import Head from "next/head";
import dynamic from "next/dynamic";

const Avweather = dynamic(() => import("../components/sections/Avweather"));
const Rickandmorty = dynamic(() =>
  import("../components/sections/Rickandmorty")
);
const Coffeeshop = dynamic(() => import("../components/sections/Coffeeshop"));
const About = dynamic(() => import("../components/sections/About"));
const Tesla = dynamic(() => import("../components/sections/Tesla"));

export default function Portfolio() {
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
      <Coffeeshop />
      <Avweather />
      <Tesla />
      <Rickandmorty />
      <About />
    </div>
  );
}

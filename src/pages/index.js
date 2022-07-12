import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useContext } from "react";
import ThemeContext from "../context";

const Avweather = dynamic(() => import("../components/sections/Avweather"));
const Rickandmorty = dynamic(() =>
  import("../components/sections/Rickandmorty")
);
const Coffeeshop = dynamic(() => import("../components/sections/Coffeeshop"));
const About = dynamic(() => import("../components/sections/About"));
const Tesla = dynamic(() => import("../components/sections/Tesla"));

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <div className="w-full h-full min-w-screen min-h-screen px-5 selection:text-gray-200 selection:bg-gray-600 bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center font-Montserrat text-zinc-900 dark:text-gray-100 transition-all ease-in duration-50 ">
        <Head>
          <title>Joaquín Hernández</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
    </main>
  );
}

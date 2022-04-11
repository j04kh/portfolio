import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../components/sections/Projects"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <div className="w-full h-full min-w-screen min-h-screen px-5 bg-zinc-900 flex flex-col items-center font-Montserrat text-gray-100">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

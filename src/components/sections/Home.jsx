import dynamic from "next/dynamic";

const Macbook = dynamic(() => import("../Macbook"), {
  ssr: false,
});

const Home = () => {
  return (
    <section className="h-screen w-full">
      <div className="h-full pt-0 mb-32 flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
        <div>
          <h1 className="text-xl">Hello, I'm</h1>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Joaquin Hernandez
          </h1>
          <h2 className=" text-sm mt-1 font-light">FRONTEND DEVELOPER</h2>
        </div>
        <div className="w-[300px] h-72">
          <Macbook />
        </div>
      </div>
    </section>
  );
};

export default Home;

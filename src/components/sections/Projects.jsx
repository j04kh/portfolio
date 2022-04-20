import Project from "../Project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl h-full min-h-screen pt-16 lg:flex lg:flex-col lg:justify-center"
    >
      <h1 className="text-3xl font-semibold text-center lg:text-4xl">
        Projects
      </h1>
      <div className="flex flex-col items-center py-5 lg:px-12 lg:grid lg:grid-cols-2 lg:place-items-center">
        <Project
          name="Coffeeshop"
          description="E-commerce built with Next.js and ChakraUI"
          image="overview-coffeeshop"
          deploy="http://coffeeshop-zeta.vercel.app/"
          repo="https://github.com/j04kh/coffeeshop"
        />
        <Project
          name="AvWeather"
          description="Aeronautical Weather App built with React.js"
          image="overview-avweather"
          deploy="https://avweather.vercel.app/"
          repo="https://github.com/j04kh/avweather"
        />
        <Project
          name="Rick and Morty"
          description="3D App built with R3F and GraphQL"
          image="overview-rickandmorty"
          deploy="http://rickandmorty-3d.vercel.app/"
          repo="https://github.com/j04kh/rickandmorty"
        />
        <Project
          name="Tesla Model3 Specs"
          description="3D page built with R3F and TailwindCSS"
          image="overview-tesla"
          deploy="https://tesla-model3-3d.vercel.app/"
          repo="https://github.com/j04kh/tesla-model3-3d"
        />
      </div>
    </section>
  );
};

export default Projects;

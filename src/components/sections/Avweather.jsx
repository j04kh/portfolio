import Image from "next/image";
import Button from "../Button";
import AvWeatherOverview from "../../../public/projects/avweather.png";

const Avweather = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl h-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl font-semibold mb-5">AvWeather</h1>
      <div className="w-[60%] md:w-full max-w-sm">
        <Image src={AvWeatherOverview} alt="Avweather overview" />
      </div>
      <h2 className="text-sm mt-6">
        Aviation Weather Application. Search airports by ICAO code and get
        real-time meteorological reports with a Google Maps view of the airport.
        <br />
        Built with React and TailwindCSS.
        <br />
      </h2>
      <p className="mt-3 text-xs font-light italic ">
        Not familiar with ICAO codes? Try{" "}
        <span className="font-semibold">SUMU</span>
      </p>

      <div className="mt-5 flex flex-col items-center justify-center">
        <Button url="http://avweather.vercel.app/" title="VIEW DEMO" primary />
        <Button url="https://github.com/j04kh/avweather" title="REPOSITORY" />
      </div>
    </section>
  );
};

export default Avweather;

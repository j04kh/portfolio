import Image from "next/image";
import Contact from "./Contact";

const About = () => {
  const skills = [
    { key: "html", title: "HTML" },
    {
      key: "css",
      title: "CSS",
    },
    {
      key: "js",
      title: "JavaScript",
    },
    {
      key: "ts",
      title: "TypeScript",
    },
    {
      key: "react",
      title: "ReactJS",
    },
    {
      key: "next",
      title: "NextJS",
    },
    {
      key: "tailwind",
      title: "Tailwind",
    },
    {
      key: "chakra",
      title: "ChakraUI",
    },
    {
      key: "mongodb",
      title: "MongoDB",
    },
    {
      key: "graphql",
      title: "GraphQL",
    },
  ];
  return (
    <section className="w-full max-w-3xl h-full min-h-screen pt-16 flex flex-col justify-center items-center text-center">
      <div className="h-36 w-36 mb-5">
        <Image
          src="/avatar.png"
          height={480}
          width={480}
          layout="responsive"
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <h1 className="text-xl font-semibold">Joaquín Hernández</h1>
      <p className="my-4 text-center text-sm">
        A computer engineering student and Frontend Developer based in
        Montevideo, Uruguay. <br />
        I describe myself as a detail-oriented person who enjoys learning new
        technologies and creating modern web apps. <br />
        While offline, I spend most of my spare time flying airplanes, taking
        photos or playing music.
      </p>
      <h2 className="text-lg font-semibold md:mt-6">Skills</h2>
      <div className="w-full mt-4 flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.title} className="mx-2 my-2">
            <Image
              src={`/skills/${skill.key}.png`}
              alt={skill.title}
              height={60}
              width={60}
              className="rounded-lg"
            />
            <p className="text-xs font-thin text-center">{skill.title}</p>
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
};

export default About;

import Image from "next/image";
import Contact from "../Contact";
import skills from "../../../public/skills/skills.json";
import Avatar from "../../../public/avatar.png";

const About = () => {
  return (
    <section className="w-full max-w-4xl h-full min-h-screen mt-5 relative flex flex-col justify-center items-center text-center">
      <div className="h-36 w-36 mb-5">
        <Image
          src={Avatar}
          alt="A picture of me"
          className="rounded-full"
          placeholder="blur"
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
      <h2 className="text-lg font-semibold">Skills</h2>
      <div className="w-full mt-2 flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.title} className="mx-2 my-2">
            <Image
              src={`/skills/${skill.key}.png`}
              alt={skill.title}
              height={50}
              width={50}
              className="rounded-lg"
            />
            <p className="text-xs font-light dark:font-thin text-center">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
};

export default About;

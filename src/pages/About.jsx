import { skills, education } from "../data";
import { Education, Skill } from "../components";

const About = () => {
  return (
    <main className="p-4 md:container md:mx-auto">
      <h2 className="text-2xl md:text-6xl font-bold font-poppins border-b-4 border-black my-2 md:my-6">
        About Me
      </h2>
      <h3 className="text-xl md:text-3xl font-semibold tracking-tight mt-6 uppercase">
        Education
      </h3>
      <section>
        {education.map((eduData) => {
          return <Education {...eduData} key={eduData.id} />;
        })}
      </section>
      <section>
        <h3 className="text-xl md:text-3xl font-semibold tracking-tight mt-6 uppercase">
          Skills
        </h3>
        {skills.map((skillData) => {
          return <Skill {...skillData} key={eduData.id} />;
        })}
      </section>
    </main>
  );
};

export default About;

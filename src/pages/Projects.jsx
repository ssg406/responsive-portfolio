import { projects } from "../data";
import { Project } from "../components";

const Projects = () => {
  return (
    <main className="md:container md:mx-auto p-4">
      <h2 className="text-2xl md:text-6xl font-bold font-poppins border-b-4 border-black my-2 md:my-6">
        Projects
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        {projects.map((projectData) => {
          return <Project {...projectData} key={projectData.id} />;
        })}
      </div>
    </main>
  );
};

export default Projects;

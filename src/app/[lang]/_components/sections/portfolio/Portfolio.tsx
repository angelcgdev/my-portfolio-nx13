import ProjectCard from "../../ProjectCard/ProjectCard";
import { SectionWrapper, SectionTitle } from "../../Section";
import { CommonProps } from "../Welcome";
import { Filter } from "./Filter";
import { Project } from "@/models/project.model";
interface Props extends CommonProps {
  projects: Project[];
}
export const PortfolioSection = ({ dictionary,projects }: Props) => {
  return (
    <SectionWrapper id="#portfolio">
      <SectionTitle>{dictionary.portfolio.title}</SectionTitle>
      <div className="flex flex-col gap-5">
        <Filter />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard
                img={project.tumbnailurl?? project.imageSrc}
                name={project.title}
                description={project.description}
                slug={project.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

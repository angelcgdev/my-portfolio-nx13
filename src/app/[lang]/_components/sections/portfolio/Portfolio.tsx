import { projects } from "@/app/[lang]/api/db";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { SectionWrapper, SectionTitle } from "../../Section";
import { CommonProps } from "../Welcome";
import { Filter } from "./Filter";

export const PortfolioSection = ({ dictionary }: CommonProps) => {
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

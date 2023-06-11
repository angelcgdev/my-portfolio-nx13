'use client';
import { ProjectResponse } from "@/app/[lang]/api/project/route";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { SectionWrapper, SectionTitle } from "../../Section";
import { CommonProps } from "../Welcome";
import { Categories, Filter, categories } from "./Filter";
import { useEffect } from "react";

interface Props extends CommonProps {
  projects: ProjectResponse[];
}
export const PortfolioSection = ({ dictionary,projects }: Props) => {
  const handleCategoryChange = (category: Categories)=>{
    for (let index = 0; index < categories.length; index++) {
      const tab = document.getElementById(`tab-${categories[index]}`);
      tab?.classList.add('hidden');
    }
    document.getElementById(`tab-${category}`)?.classList.remove('hidden');
    
  }

  useEffect(() => {
    handleCategoryChange('All');
  }, [])
  
  return (
    <SectionWrapper id="portfolio">
      <SectionTitle>{dictionary.portfolio.title}</SectionTitle>
      <div className="flex flex-col gap-5">
        <Filter onChange={handleCategoryChange}/>
          {projects.map((tab, index) => (
            <ul key={`tab-${categories[index]}`} id={`tab-${categories[index]}`} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {
                tab.data.map((project, index)=>(
                  <li key={index}>
                    <ProjectCard
                      img={project.imageUrl}
                      name={project.title}
                      imgBlur={project.tumbnailurlBlur}
                      description={project.description}
                      slug={project.slug}
                    />
                  </li>
                ))
              }
            </ul>
          ))}
      </div>
    </SectionWrapper>
  );
};

import { Locale } from "@/app/[lang]/i18n-config";
import { Categories } from './Filter';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { projects } from "@/app/[lang]/api/db";
function getProjects(props:{lang: Locale, filter: Categories}) {
  if(props.filter==='All'){
    return projects;
  }
    return projects.filter(project=>project.categories.includes(props.filter));
  }
export async function ListFiltered ({lang = 'en', filter='All'}:{lang: Locale, filter: Categories}) {
    const projectsData = getProjects({lang, filter });

  return (
    <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3">
        {
        projectsData.map((project, index)=>(
            <li key={index}>
            <ProjectCard
                img={project.imageUrl}
                name={project.title}
                imgBlur={project.tumbnailurlBlur}
                description={project.categories}
                slug={project.slug}
            />
            </li>
        ))
        }
    </ul>
  )
}

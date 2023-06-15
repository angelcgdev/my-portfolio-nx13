import { Locale } from "@/app/[lang]/i18n-config";
import { Categories } from './Filter';
import { ProjectResponse } from '@/app/[lang]/api/project/route';
import ProjectCard from '../../ProjectCard/ProjectCard';

async function getProjects(props:{lang: Locale, filter: Categories}): Promise<ProjectResponse> {
  const domain = process.env.NEXT_PUBLIC_SITE_URL;
    let url = `${domain}/${props.lang}/api/project`;
    if(props.filter!='All'){
      url = `/${props.lang}/api/project?category=${props.filter}`;
    }
    const res = await fetch(url, {method: 'GET'});
    if(!res.ok) {
        throw new Error(`Faild to fetch data ${url}`);
    }
    return res.json();
  }
export async function ListFiltered ({lang = 'en', filter='All'}:{lang: Locale, filter: Categories}) {
    const projectsData = await getProjects({lang, filter });

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
        projectsData.data.map((project, index)=>(
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

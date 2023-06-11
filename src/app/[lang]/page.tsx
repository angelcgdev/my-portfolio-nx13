import {
  About,
  ContactSection,
  ExperienceSection,
  PortfolioSection,
  Welcome,
} from "@/components/sections";
import { getDictionary } from "./dictionaries";
import { Locale } from "./i18n-config";
import { Toaster } from "@/components/Toaster";
import { ExperienceResponse } from "./api/experience/route";
import { ProjectResponse } from "./api/project/route";
import { Categories } from "./_components/sections/portfolio/Filter";

export interface InternationlizationProps {
  params: { lang: Locale; slug?: string };
}

async function getExperience(lang: Locale): Promise<ExperienceResponse> {
  const domain = process.env.HOSTNAME;
  const url = `${domain}/${lang}/api/experience`;
  const res = await fetch(url, {method: 'GET', });
  if(!res.ok) {
    throw new Error(`Faild to fetch data ${url}`);
  }
  return res.json();
}
async function getProjects(props:{lang: Locale, filter: Categories}): Promise<ProjectResponse> {
  const domain = process.env.HOSTNAME;
  let url = `${domain}/${props.lang}/api/project`;
  if(props.filter!='All'){
    url = `${domain}/${props.lang}/api/project?category=${props.filter}`;
  }
  const res = await fetch(url, {method: 'GET'});
  if(!res.ok) {
    throw new Error(`Faild to fetch data ${url}`);
  }
  return res.json();
}

export default async function Page({
  params: { lang },
}: InternationlizationProps) {
  const dictionaryData = getDictionary(lang);
  const experienceData = getExperience(lang);
  const projectsData = getProjects({lang, filter: 'All'});
  const projectsFrontData = getProjects({lang, filter: 'Frontend'});
  const projectsBackData = getProjects({lang, filter: 'Backend'});
  const [dictionary, { data: experiences }, ...projects] = await Promise.all([dictionaryData, experienceData, projectsData, projectsFrontData, projectsBackData])

  return (
    <>
      <Toaster />
      <Welcome dictionary={dictionary} />
      <About dictionary={dictionary} />
      <ExperienceSection dictionary={dictionary}  experiences={experiences} locale={lang}/>
      <PortfolioSection dictionary={dictionary} projects={projects}/>
      <ContactSection dictionary={dictionary} />
    </>
  );
}

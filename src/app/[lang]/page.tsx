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
async function getProjects(lang: Locale): Promise<ProjectResponse> {
  const domain = process.env.HOSTNAME;
  const url = `${domain}/${lang}/api/project`;
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
  const experienceData = await getExperience(lang);
  const projectsData = await getProjects(lang);
  const [dictionary, { data: experiences }, { data: projects}] = await Promise.all([dictionaryData, experienceData, projectsData])

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

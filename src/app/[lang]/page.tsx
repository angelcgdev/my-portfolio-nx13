import {
  About,
  ContactSection,
  ExperienceSection,
  PortfolioSection,
  Welcome,
} from "./_components/sections";
import { getDictionary } from "./dictionaries";
import { Locale } from "./i18n-config";
import { Toaster } from "./_components/Toaster";
import { experienceResponse } from "./api/experience/route";

export interface InternationlizationProps {
  params: { lang: Locale; slug?: string };
}

async function getData(lang: Locale): Promise<experienceResponse> {
  const environment = process.env.environment;
  const domainProd = process.env.HOSTNAMEPROD;
  const domainDev = process.env.HOSTNAMEDEV;
  const res = await fetch(`${environment==='production'?domainProd:domainDev}/${lang}/api/experience`, {method: 'GET', headers: { 'Accept-Language': lang}});
  if(!res.ok) {
    throw new Error('Faild to fetch data');
  }
  
  return res.json();
}

export default async function Page({
  params: { lang },
}: InternationlizationProps) {
  const dictionary = await getDictionary(lang);
  const { data } = await getData(lang);

  return (
    <>
      <Toaster />
      <Welcome dictionary={dictionary} />
      <About dictionary={dictionary} />
      <ExperienceSection dictionary={dictionary}  experiences={data} locale={lang}/>
      <PortfolioSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </>
  );
}

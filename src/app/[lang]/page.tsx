import {
  About,
  ContactSection,
  ExperienceSection,
  PortfolioSection,
  Welcome,
} from "./components/sections";
import { getDictionary } from "./dictionaries";
import { Locale } from "./i18n-config";
import { Toaster } from "./components/Toaster";
import { experienceResponse } from "./api/experience/route";

export interface InternationlizationProps {
  params: { lang: Locale; slug?: string };
}

async function getData(lang: Locale): Promise<experienceResponse> {
  const res = await fetch(`http://localhost:3000/${lang}/api/experience`, {method: 'GET', headers: { 'Accept-Language': lang}});
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
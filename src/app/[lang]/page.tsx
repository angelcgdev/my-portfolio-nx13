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
  const domain = process.env.HOSTNAME;
  const url = `${domain}/${lang}/api/experience`;
  console.log({url});
  const res = await fetch(url, {method: 'GET', headers: { 'Accept-Language': lang}});
  if(!res.ok) {
    throw new Error(`Faild to fetch data ${url}`);
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

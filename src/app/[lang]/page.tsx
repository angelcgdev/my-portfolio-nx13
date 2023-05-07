import {
  About,
  ContactSection,
  Experience,
  PortfolioSection,
  Welcome,
} from "./components/sections";
import { getDictionary } from "./dictionaries";
import { Locale } from "./i18n-config";
import { Toaster } from "./components/Toaster";
export interface InternationlizationProps {
  params: { lang: Locale; slug?: string };
}
export default async function Page({
  params: { lang },
}: InternationlizationProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Toaster />
      <Welcome dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <PortfolioSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </>
  );
}

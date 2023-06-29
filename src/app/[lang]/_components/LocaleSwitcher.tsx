"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { i18n } from "../i18n-config";
import en from "@/app/[lang]/dictionaries/en.json";
import es from "@/app/[lang]/dictionaries/es.json";

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const { lang } = useParams();
  const path = redirectedPathName();
  function getNewLocale(lang: string) {
    return lang === i18n.locales[0] ? i18n.locales[1] : i18n.locales[0];
  }
  function redirectedPathName() {
    if (!lang) return "/";
    let newPath = pathName;
    const newLocale = getNewLocale(lang);
    newPath = newPath.replace(lang, `${newLocale}`);
    return newPath;
  }
  return (
    <div className="flex flex-row gap-2 items-center">
      <Link href={path} lang={getNewLocale(lang)} className="mr-1">
        {en.header["lang-switch"]}
      </Link>
      <hr className="border border-borderc h-4"/>
      <Link href={path} lang={getNewLocale(lang)} className="ml-1">
        {es.header["lang-switch"]}
      </Link>
    </div>
  );
};

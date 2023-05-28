"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { i18n } from "../i18n-config";
import { useEffect, useState } from "react";
import en from "@/app/[lang]/dictionaries/en.json";
import es from "@/app/[lang]/dictionaries/es.json";

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const { lang } = useParams();
  const [dictionary, setDictionary] = useState(es);
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

  useEffect(() => {
    if (lang === i18n.locales[0]) {
      setDictionary(en);
    } else {
      setDictionary(es);
    }
  }, [lang]);
  return (
    <Link href={path} lang={getNewLocale(lang)}>
      {dictionary.header["lang-switch"]}
    </Link>
  );
};

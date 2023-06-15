'use client';
import { SectionWrapper, SectionTitle } from "../../Section";
import { Categories, Filter } from "./Filter";
import { Suspense, useEffect, useState } from "react";
import { Locale } from "@/app/[lang]/i18n-config";
import { ListFiltered } from "./ListFiltered";
import { CommonProps } from "../Welcome";
import { ListFilteredSkeleton } from "./ListFilteredSkeleton";

interface Props extends CommonProps {
  lang: Locale
}


export const PortfolioSection = ({ lang,dictionary }: Props) => {
  const [category, setCategory] = useState<Categories>('All');
  const handleCategoryChange = (category: Categories)=>{
    setCategory(category);
  }

  useEffect(() => {
    handleCategoryChange('All');
  }, [])
  
  return (
    <SectionWrapper id="portfolio">
      <SectionTitle>{dictionary.portfolio.title}</SectionTitle>
      <div className="flex flex-col gap-5">
        <Filter onChange={handleCategoryChange}/>
        <Suspense fallback={<ListFilteredSkeleton/>}>
          {/* @ts-expect-error Server Component */}
          <ListFiltered lang={lang} filter={category}/>
          {/* <ListFilteredSkeleton/> */}
        </Suspense>
      </div>
    </SectionWrapper>
  );
};

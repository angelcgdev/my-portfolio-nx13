import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LeftSide, SectionTitle, SectionTools } from "@/components/Section";
import { Metadata } from "next";
import { BackButton } from "@/components/BackButton";
import { InternationlizationProps } from "../../page";
import { getDictionary } from "../../dictionaries";
import { Locale } from "../../i18n-config";
import { ProjectBySlugResponse } from "../../api/project/[slug]/route";


async function getProject(lang: Locale, slug: string):Promise<ProjectBySlugResponse> {
  const domain = process.env.HOSTNAME;
  const res = await fetch(`${domain}/${lang}/api/project/${slug}`, { cache: 'no-store'});
  if(!res.ok){
    throw new Error(`Faild to fetch data`);
  }
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string, lang: Locale };
}): Promise<Metadata> {
  const { data: project} = await getProject(params.lang, params.slug);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: `${project.title}, project from my portfolio.`,
    keywords: project.tools,
  };
}

export default async function Page({ params }: InternationlizationProps) {
  let projectData = await getProject(params.lang, params.slug!);
  const dictionaryData = await getDictionary(params.lang);
  const [dictionary, {data: project}] = await Promise.all([dictionaryData, projectData])
  if (!project) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="flex flex-col gap-4 !p-5">
          <BackButton dictionary={dictionary} />
          <figure className="relative aspect-video rounded-md overflow-hidden">
            <Image
              src={project.imageUrl}
              className="  object-cover"
              alt="project cover"
              blurDataURL={project.tumbnailurlBlur}
              placeholder={project.tumbnailurlBlur?'blur':'empty'}
              fill={true}
            />
          </figure>
          <div>
            <SectionTitle>{project!.title}</SectionTitle>
            <SectionTools tools={project?.tools} />
            <LeftSide type="full">
              <p className="text-body">{project!.longDescription}</p>
            </LeftSide>
          </div>
        </div>
      </section>
    </>
  );
}

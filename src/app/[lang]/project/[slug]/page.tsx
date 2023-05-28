import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type en from "@/app/[lang]/dictionaries/en.json";
import { LeftSide, SectionTitle, SectionTools } from "../../_components/Section";
import { loadProyect } from "@/lib/load-proyect";
import { Metadata } from "next";
import { BackButton } from "../../_components/BackButton";
import { InternationlizationProps } from "../../page";
import { getDictionary } from "../../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await loadProyect(params.slug);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: `${project.title}, project from my portfolio.`,
    keywords: project.tools,
  };
}

async function getProject(slug: string) {
  const project = await loadProyect(slug);
  return project;
}
export default async function Page({ params }: InternationlizationProps) {
  let project = await getProject(params.slug ?? "");
  if (!project) {
    notFound();
  }
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <section>
        <div className="flex flex-col gap-4 !p-5">
          <BackButton dictionary={dictionary} />
          <figure className="relative aspect-video rounded-md overflow-hidden">
            <Image
              src={project!.imageSrc}
              className="  object-cover"
              alt="project cover"
              fill={true}
            />
          </figure>
          <div>
            <SectionTitle>{project!.title}</SectionTitle>
            <SectionTools tools={project!.tools} />
            <LeftSide type="full">
              <p className="text-body">{project!.longDescription}</p>
            </LeftSide>
          </div>
        </div>
      </section>
    </>
  );
}

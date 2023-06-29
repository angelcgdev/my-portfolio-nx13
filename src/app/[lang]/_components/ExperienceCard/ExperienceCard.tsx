import { Experience } from "@/models/experience.model";
import React from "react";
import { Locale } from "../../i18n-config";

interface Props { experience: Experience, locale: Locale }

export const ExperienceCard = ({ experience, locale }: Props) => {
  const { responsabilities, company, to, role, from, isCurrent } = experience;
  function dateFormated(date: string) {
    return (new Date(Date.parse(date))).toLocaleDateString(locale, { year: "numeric", month: "long" })
  }

  return (
    <article
      role="article"
      className="text-body items-start rounded-md border-2 border-borderc p-4 flex flex-col lg:flex-row gap-0 md:gap-2"
    >
      <p className="text-sm lg:leading-7 description uppercase w-56">{dateFormated(from)} — {isCurrent ? 'Currently' : dateFormated(to!)}</p>
      <div className="flex-1">
        <h3 className="font-medium">
          {role} ·
          <span className="font-medium"> {company}</span>
        </h3>
        <p className="description text-sm md:text-base">Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="rounded-md bg-primary/20 text-primary px-3 py-1 text-sm">HTML</span>
          <span className="rounded-md bg-primary/20 text-primary px-3 py-1 text-sm">CSS</span>
          <span className="rounded-md bg-primary/20 text-primary px-3 py-1 text-sm">React</span>
          <span className="rounded-md bg-primary/20 text-primary px-3 py-1 text-sm">Flutter</span>
          <span className="rounded-md bg-primary/20 text-primary px-3 py-1 text-sm">NodeJS</span>
        </div>
      </div>
    </article>
  );
};

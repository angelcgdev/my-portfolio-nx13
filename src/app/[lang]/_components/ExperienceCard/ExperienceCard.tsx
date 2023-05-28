import { Experience } from "@/models/experience.model";
import React from "react";
import { Locale } from "../../i18n-config";

interface Props { experience: Experience, locale: Locale }

export const ExperienceCard = ({ experience, locale }: Props) => {
  const { responsabilities, company, to, role, from, isCurrent } = experience;
  function dateFormated(date: string){
    return (new Date(Date.parse(date))).toLocaleDateString(locale, {year: "numeric", month: "long"})
  }

  return (
    <article
      role="article"
      className="text-body items-start rounded-md border-2 border-borderc p-4 duration-300"
    >
      <div>
        <h3 className="font-medium">
          {role}
          <span className="text-primary-variant"> {company}</span>
        </h3>
        <p className="text-sm">{dateFormated(from)} - {isCurrent?'Currently':dateFormated(to!)}</p>
      </div>
      <ul aria-label="Activities" className="decorated">
        {responsabilities?.map((responsability, i) => (
          <li key={`activity-${i}`}>
            <p className="description">{responsability}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

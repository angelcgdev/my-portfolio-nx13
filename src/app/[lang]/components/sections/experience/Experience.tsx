import data from "@/data/local/yourData";
import { ExperienceCard } from "../../ExperienceCard/ExperienceCard";
import { SectionTitle, SectionWrapper } from "../../Section";
import { CommonProps } from "../Welcome";
import { Experience } from "@/models/experience.model";
import { Locale } from "@/app/[lang]/i18n-config";

export interface Props extends CommonProps {
  experiences: Experience[];
  locale: Locale
}

export const ExperienceSection = ({ dictionary, experiences, locale }: Props) => {
  return (
    <SectionWrapper id="#experience">
      <SectionTitle>{dictionary.experience.title}</SectionTitle>
      <ul className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <li key={`experience-${experience.id}`}>
            <ExperienceCard experience={experience} locale={locale}/>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

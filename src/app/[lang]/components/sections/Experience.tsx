import data from "@/data/local/yourData";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";
import { SectionTitle, SectionWrapper } from "../Section";
import { CommonProps } from "./Welcome";

export const Experience = ({ dictionary }: CommonProps) => {
  return (
    <SectionWrapper id="#experience">
      <SectionTitle>{dictionary.experience.title}</SectionTitle>
      <ul className="flex flex-col gap-4">
        {data.experience.map((experience) => (
          <li key={`experience-${experience.id}`}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

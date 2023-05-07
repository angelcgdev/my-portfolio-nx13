import data from "@/data/local/yourData";
import { SectionTitle, SectionWrapper } from "../Section";
import { CommonProps } from "./Welcome";

export const About = ({ dictionary }: CommonProps) => {
  return (
    <SectionWrapper id="#about">
      <SectionTitle>{dictionary.about.title}</SectionTitle>
      <div>
        <p className="description mb-4 text-body">
          {dictionary.about.description}
        </p>
        <p className="description mb-2 text-body">
          {dictionary.about["recien-technologies"].title + ":"}
        </p>
        <ul className="decorated w-5/5 ms:w-4/5 lg:w-3/py-5 w-5/5  ms:w-4/5 ml-0 grid grid-cols-1 gap-3 text-lg sm:grid-cols-2 lg:w-3/5">
          {data.technologies.map((technology, i) => (
            <li key={i}>
              <p className="description  text-body">{technology}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

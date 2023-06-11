import { SectionTitle } from "../../Section/SectionTitle";
import { SectionWrapper } from "../../Section/SectionWrapper";
import Socials from "../../Socials";
import { CommonProps } from "../Welcome";
import { Form } from "./components/Form";

export const ContactSection = ({ dictionary }: CommonProps) => {
  return (
    <SectionWrapper id="contact">
      <SectionTitle>{dictionary.contact.title}</SectionTitle>
      <div>
        <p className="description text-body">
          {dictionary.contact.description}
        </p>
        <div className="grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2">
          <Form dictionary={dictionary} />
          <div className="grid grid-cols-1 place-content-center gap-4">
            <Socials className="md:justify-center" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

import React from "react";
import Link from "next/link";
import data from "@/data/local/yourData";

interface Props {
  className: string;
}

const Socials = ({ className }: Props) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {data.socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="button"
          role="button"
          target="button"
        >
          {social.title}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

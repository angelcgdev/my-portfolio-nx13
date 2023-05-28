import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface Props {
  img: string;
  name: string;
  description: string;
  imgBlur?: string;
  slug: string;
}

const ProjectCard = ({ img, name, description, slug, imgBlur }: Props) => {
  return (
    <Link
      key={name}
      href={"/project/" + slug}
      role="link"
      aria-label={`Project ${name}`}
    >
      <article role="article" className={styles.wrapper}>
        <figure className={styles["cover-wrapper"]}>
          <Image
            alt="project cover"
            className={styles["cover"]}
            src={img}
            blurDataURL={imgBlur}
            placeholder={imgBlur?'blur':'empty'}
            fill={true}
          />
        </figure>
        <div className={styles.body}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;

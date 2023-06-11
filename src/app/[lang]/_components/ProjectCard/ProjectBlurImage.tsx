'use client';
import Image, { ImageLoaderProps } from 'next/image';
import styles from "./ProjectCard.module.css";

interface Props {
    img: string;
}

const imageLoader = ({ src, width, quality }:ImageLoaderProps) => {
  return `${src}/${width}x${width}`
}
export const ProjectBlurImage = ({ img }:Props) => {
  return (
    <figure className={styles["cover-wrapper"]}>
      <Image
          alt="project cover"
          loader={imageLoader}
          className={`${styles["cover"]} `}
          src={img}
          fill={true}
      />
    </figure>
  )
}

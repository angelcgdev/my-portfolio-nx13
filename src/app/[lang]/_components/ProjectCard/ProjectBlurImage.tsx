'use client';
import Image from 'next/image';
import React from 'react'
import styles from "./ProjectCard.module.css";
interface Props {
    imgBlur?: string;
    img: string;
}
export const ProjectBlurImage = ({ img, imgBlur }:Props) => {
  return (
    <figure className={styles["cover-wrapper"]}>
      <div className={`w-full h-full scale-125 bg-cover bg-center blur-md`} style={{backgroundImage: `url('${imgBlur}')`}}/>
      <Image
          alt="project cover"
          onLoadingComplete={(e)=>{e.classList.remove('opacity-0')}}
          className={`${styles["cover"]} opacity-0`}
          src={img}
          fill={true}
      />
    </figure>
  )
}

'use client';

import { Project } from "@/models/project.model";
import Image from "next/image";

export const BlurImage = ({project}:{project: Project}) => {
  return (
    
    <figure className="relative aspect-video rounded-md overflow-hidden">
      <div className={`w-full h-full scale-125 bg-cover bg-center blur-md`} style={{backgroundImage: `url('${project.tumbnailurlBlur}')`}}/>
      <Image
        src={project.imageUrl}
        className="object-cover opacity-0"
        onLoadingComplete={(e)=>{e.classList.remove('opacity-0')}}
        alt="project cover"
        blurDataURL={`data:image/svg+xml;base64,${project.tumbnailurlBlur}`}
        placeholder={project.tumbnailurlBlur?'blur':'empty'}
        fill={true}
      />
    </figure>
  )
}

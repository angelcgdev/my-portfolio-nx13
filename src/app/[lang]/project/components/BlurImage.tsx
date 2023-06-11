'use client';
import { Project } from "@/models/project.model";
import Image, { ImageLoaderProps } from "next/image";


const imageLoader = ({ src, width, quality }:ImageLoaderProps) => {
  return `${src}/${width}x${width}`
}
export const BlurImage = ({project}:{project: Project}) => {

  return (
    <figure className="relative aspect-video rounded-md overflow-hidden">
      <Image
        src={project.imageUrl}
        className="object-cover"
        loader={imageLoader}
        alt="project cover"
        fill={true}
      />
    </figure>
  )
}

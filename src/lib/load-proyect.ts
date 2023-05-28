// import "server-only";
import { projects } from "@/app/[lang]/api/db";
import { Project } from "../models/project.model";

export async function loadProyect(slug: string) {
  // Call an external API endpoint to get posts
  const even = (element: Project) => element.slug === slug;
  const proyect = projects.find(even);

  return proyect;
}

import { Project } from "@/models/project.model";
import { NextResponse } from "next/server";
import { projects } from "../../db";
import { CommonParams, Context, Response } from "../../models";

interface Params extends CommonParams {
    slug: string,
}

export type ProjectBySlugResponse = Response<Project>;

export async function GET(request: Request, { params }: Context<Params>) {
    const even = (project: Project) => project.slug === params.slug;
    const project = projects.find(even);
    if(project){
        const response: ProjectBySlugResponse = {
            data: project
        }
        return NextResponse.json(response);
    }
    const response: Response = { error: 'not found' }
    return NextResponse.json(response,{status: 404});

}
import { NextRequest, NextResponse } from "next/server";
import { Context, Response } from "../models";
import { Project } from "@/models/project.model";
import { projects } from "../db";


export type ProjectResponse = Response<Project[]>;
export async function GET(req: NextRequest, { params }: Context) {

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category')
    const projectsFiltered = category? projects.filter((project)=>project.description.includes(category)): projects;
    const response:ProjectResponse = { data: projectsFiltered, message: category };
    return NextResponse.json(response);
}
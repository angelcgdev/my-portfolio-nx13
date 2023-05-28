import { NextRequest, NextResponse } from "next/server";
import { Context, Response } from "../models";
import { Project } from "@/models/project.model";
import { projects } from "../db";


export type ProjectResponse = Response<Project[]>;
export async function GET(req: NextRequest, { params }: Context) {
    const response:ProjectResponse = { data: projects };
    return NextResponse.json(response);
}
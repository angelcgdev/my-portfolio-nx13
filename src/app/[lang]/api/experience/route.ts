import { NextResponse } from "next/server";
import { Context, Response } from "../models";
import { Experience } from "@/models/experience.model";
import { experiencesEn, experiencesEs } from "../db";

export type ExperienceResponse = Response<Experience[]>;

export async function GET(req: Request, { params }: Context) {
    const response:ExperienceResponse = { data: params.lang==="en"?experiencesEn:experiencesEs };
    return NextResponse.json(response);
}
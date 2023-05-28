import { NextRequest, NextResponse } from "next/server";
import { Response } from "../models";
import { Experience } from "@/models/experience.model";
import { headers } from 'next/headers';
import { Locale } from "@/app/[lang]/i18n-config";
import { experiencesEn, experiencesEs } from "../db";

export type experienceResponse = Response<Experience[]>;

export async function GET(req: NextRequest) {
    const lang = (headers().get('Accept-Language') as (Locale | null)) ;
    console.clear();
    console.log('=========>>');
    console.log(lang);
    console.log('=========>>');
    const response:experienceResponse = { data: lang==="en"?experiencesEn:experiencesEs };
    return NextResponse.json(response);
}
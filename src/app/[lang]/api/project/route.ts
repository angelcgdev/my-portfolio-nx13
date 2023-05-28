import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { headers, body} = req.clone()
    console.log({headers, body});
    return NextResponse.json({true: true, false: false, req});
}
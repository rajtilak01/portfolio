import { NextRequest, NextResponse } from "next/server";
import Projects from "../../../models/projects"
import { dbconnect } from "@/dbconfig/db";

export async function GET(req: NextRequest) {
    try {

        await dbconnect();
        const project = await Projects.find({});

        return NextResponse.json({
            data: project,
        },
        {status: 200}
    )
    } catch (error) {
        console.error("Error in getting projects api", error);
        return NextResponse.json({
            message: "Error in getting projects api",
            error: error
        },
        {status: 401}
    )
    }
}
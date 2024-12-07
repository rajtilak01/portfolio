import { dbconnect } from "@/dbconfig/db";
import Projects from "@/models/projects";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {

        await dbconnect();

        const { name, description, imageUrl, deployedUrl, tags } = await req.json();
        
        if (!name || !description) {
            return NextResponse.json({
                message: "Missing required fields",
                error: "Name and description are required"
            }, { status: 400 });
        }
        
        const project = new Projects({
            name: name,
            description: description,
            deployedUrl: deployedUrl,
            imageUrl: imageUrl,
            tags: tags,
        });

        await project.save();

        return NextResponse.json({message: "Success saved project decsription", data: project}, { status: 200 });
    } catch (error) {
        console.error("Error in saving project", error);
        return NextResponse.json({
            message: "Error in saving project",
            error: error
        },
        {status: 402}
    )
    }
}   
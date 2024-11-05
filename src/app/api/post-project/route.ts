import Projects from "@/models/projects";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, description, imageUrl, deployedUrl } = await req.json();
        const project = new Projects({
            name: name,
            description: description,
            deployedUrl: deployedUrl,
            imageUrl: imageUrl,
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
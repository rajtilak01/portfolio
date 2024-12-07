// get-project/route.ts
import { NextRequest, NextResponse } from "next/server";
import Projects from "../../../models/projects"
import { dbconnect } from "@/dbconfig/db";
import mongoose from "mongoose";

// Prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
    try {
        console.log("GET /api/get-project called");
        
        await dbconnect();
        console.log("Database connected successfully");

        // Clear any existing model to prevent stale data
        if (mongoose.models.Project) {
            delete mongoose.models.Project;
        }
        
        const project = await Projects.find({}).lean(); // Use lean() for better performance
        console.log(`Found ${project.length} projects`);

        // Add cache control headers
        const response = NextResponse.json({
            data: project,
            timestamp: new Date().toISOString(), // Add timestamp for debugging
        }, {
            status: 200,
        });

        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        
        return response;

    } catch (error: any) {
        console.error("Detailed error in getting projects:", {
            message: error.message,
            stack: error.stack,
            time: new Date().toISOString()
        });

        return NextResponse.json({
            message: "Error in getting projects api",
            error: error.message,
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
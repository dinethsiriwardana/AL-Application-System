import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      "GET - /api": "Routes",
      "GET - /api/[index]": "Check the Student Type / Student Details",
      "POST - /api/[index]/presonal-info": "Add Student's Personal Info",
      "POST - /api/[index]/ParentInfo": "Add Student's Parent Info",
      "POST - /api/[index]/OLResults": "Add Student's OL Results",
      "POST - /api/[index]/ALSubject": "Add Student's AL Subjects",
      "POST - /api/[index]/OldSchool": "Add Student's Old School Info",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

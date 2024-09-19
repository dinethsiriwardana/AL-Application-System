import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("GET request - student list");
    await dbConnect();
    const studentList = await ExistingStudent.find({});
    return NextResponse.json({
      studentList: studentList,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

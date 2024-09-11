import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const studentList = await ExistingStudent.find({});
    return NextResponse.json({
      studentList: studentList,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

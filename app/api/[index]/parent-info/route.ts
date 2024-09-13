import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import { calculateAge } from "@/app/utl/calage";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  index: string;
}
export async function POST(req: NextRequest, { params }: { params: Params }) {
  const { index } = params;

  try {
    await dbConnect();

    const reqData = await req.json();

    const studentData = new ExistingStudent();
    studentData.parentInfo = reqData;

    const result = await ExistingStudent.findOneAndUpdate(
      { olindexno: index },
      { $set: { parentInfo: studentData.parentInfo } }
    );

    return NextResponse.json({ message: "Data added successfully", result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

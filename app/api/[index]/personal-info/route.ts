import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import { calculateAge } from "@/app/utl/calage";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  index: string;
}
export async function POST(req: NextRequest, { params }: { params: Params }) {
  const { index } = params;

  //   const student = await req.json();

  try {
    await dbConnect();

    const reqData = await req.json();

    const studentData = new ExistingStudent();
    studentData.personalInfo = reqData;
    studentData.personalInfo.age = calculateAge(
      studentData.personalInfo.birthday
    );

    console.log(studentData);

    const result = await ExistingStudent.findOneAndUpdate(
      { olindexno: index },
      { $set: { personalInfo: studentData.personalInfo } }
    );

    return NextResponse.json({ message: "Data added successfully", result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

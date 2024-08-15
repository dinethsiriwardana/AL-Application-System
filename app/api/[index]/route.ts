import dbConnect from "@/app/database/database";
import { NextRequest, NextResponse } from "next/server";
import StudentList from "@/app/models/student_list";
import { promisify } from "util";
import redis from "redis";
import { CasheSingleton } from "@/app/database/data/CasheSingleton";
import ExistingStudent from "@/app/models/e_student";

interface Params {
  index: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const cashe = CasheSingleton.getInstance();

    const { index } = params;
    if (cashe.getStudent().length === 0) {
      console.log("No student in the cashe");
      await dbConnect();
      const studentList = await StudentList.find({});
      cashe.addStudent(studentList[0].indexno);
    }

    const studentList = cashe.getStudent();
    if (studentList.includes(parseInt(index))) {
      const studentdetails = await ExistingStudent.find({
        indexno: parseInt(index),
      });

      return NextResponse.json({
        studentType: "Existing Student",
        studentdetails: studentdetails[0],
      });
    }
    return NextResponse.json({ studentType: "New Student" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

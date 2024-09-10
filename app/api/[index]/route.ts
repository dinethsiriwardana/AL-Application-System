import dbConnect from "@/app/database/database";
import { NextRequest, NextResponse } from "next/server";
import StudentList from "@/app/models/student_list";
import { promisify } from "util";
import redis from "redis";
import { CasheSingleton } from "@/app/database/data/CasheSingleton";
import ExistingStudent from "@/app/models/e_student";
import { StudentType } from "@/app/utl/studenttype";

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
    const studentdetails = await ExistingStudent.find({
      olindexno: parseInt(index),
    });
    if (studentList.includes(parseInt(index))) {
      return NextResponse.json({
        studentType: "ExistingStudent",
        studentdetails: studentdetails[0],
      });
    } else {
      return NextResponse.json({
        studentType: "NewStudent",
        studentdetails: studentdetails[0],
      });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function POST(req: NextRequest, { params }: { params: Params }) {
  const { index } = params;

  try {
    await dbConnect();

    const studentData = await req.json();

    if (!studentData) {
      return NextResponse.json({ error: "No data found" });
    }

    const newStudent = new ExistingStudent();
    newStudent.olindexno = index;
    newStudent.personalInfo = studentData.personalInfo;
    newStudent.alSubjects = studentData.alSubjects;
    newStudent.olResults = studentData.olResults;
    newStudent.parentInfo = studentData.parentInfo;
    newStudent.email = studentData.email;
    newStudent.oldSchool = studentData.oldSchool;
    newStudent.oldclass = studentData.oldclass;
    newStudent.appid =
      studentData.oldclass.indexno == 0 ? `N${index}` : `E${index}`;

    const result = await newStudent.save();

    return NextResponse.json({ message: "Data added successfully", result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";
import OLResultTemplete from "@/app/models/ol_result";

import { NextRequest, NextResponse } from "next/server";

interface Params {
  index: string;
}

// get result
export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { index } = params;
  try {
    await dbConnect();
    const trimmedIndex = index.trim();

    // const result = await OLResultTemplete.find({});
    const result = await OLResultTemplete.find({ indexno: parseInt(index) });

    console.log(result);
    return NextResponse.json({
      studentdetails: result,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err });
  }
}

export async function POST(req: NextRequest, { params }: { params: Params }) {
  const { index } = params;
  try {
    await dbConnect();
    const olresult = await req.json();

    const studentData = new ExistingStudent();
    if (!olresult) {
      const result = await OLResultTemplete.find({ indexno: index });
      // save data
      studentData.olResults.first_attempt = result;
      const out = await ExistingStudent.findOneAndUpdate(
        { olindexno: index },
        { $set: { olResults: studentData.studentData.ol_result.first_attempt } }
      );
      return NextResponse.json({ message: "Data added successfully", out });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err });
  }
}

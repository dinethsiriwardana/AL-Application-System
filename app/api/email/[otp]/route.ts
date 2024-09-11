import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";
import { OTPSingleton } from "@/app/database/data/OTPSingleton";
import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";

interface Params {
  otp: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { otp } = params;
  // try {
  await dbConnect();
  const otpSingleton = OTPSingleton.getInstance();

  otpSingleton.getStudent();
  const email = otpSingleton.getEmail(otp);

  if (!email) {
    throw new Error("Invalid OTP");
  }

  const studentdetails = await ExistingStudent.find({
    email: email,
  });

  return NextResponse.json({
    studentdetails: studentdetails[0],
  });
  // } catch (err: any) {
  // return NextResponse.json({ error: err });
  // }
}

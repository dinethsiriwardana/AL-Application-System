import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";
import { OTPSingleton } from "@/app/database/data/OTPSingleton";
import dbConnect from "@/app/database/database";
import ExistingStudent from "@/app/models/e_student";

interface Params {
  otp: string;
}

export async function POST(req: NextRequest, { params }: { params: Params }) {
  try {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const reqData = await req.json();
    const email = reqData.email;

    if (!username || !password) {
      throw new Error("Missing email credentials");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // Use SSL

      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: username,
        pass: password,
      },
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpSingleton = OTPSingleton.getInstance();

    otpSingleton.addOTP(otp, email);

    const mail = await transporter.sendMail({
      from: username,
      to: email,
      replyTo: myEmail,
      subject: `AL Application OTP for ${email}`,
      html: `
      <p>OTP: ${otp} </p>
      `,
    });

    console.log(otpSingleton.getStudent());
    console.log(otpSingleton.getEmail(otp));

    return NextResponse.json({ message: "Success: email was sent", otp });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const otpSingleton = OTPSingleton.getInstance();

  const studentDetails = Array.from(otpSingleton.getStudent()).reduce(
    (obj, [key, value]) => {
      obj[key] = value;
      return obj;
    },
    {} as Record<string, string>
  );

  console.log(studentDetails);
  return NextResponse.json({
    studentdetails: studentDetails,
  });
}

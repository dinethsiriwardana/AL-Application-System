import { NextRequest, NextResponse } from "next/server";
import jsPDF from "jspdf";
import nodemailer from "nodemailer";
import { Readable } from "stream";
import ExistingStudent from "@/app/models/e_student";
import dbConnect from "@/app/database/database";

// Define interfaces for our data structures
interface PersonalInfo {
  fullname: string;
  birthday: string;
  nic_number: string;
  address: string;
  contact_number: string;
}

interface OLResults {
  first_attempt: {
    [key: string]: string;
  };
}

interface ALSubject {
  subject: string;
  medium: string;
}

interface ALSubjects {
  stream: string;
  subject: ALSubject[];
}

interface Student {
  personalInfo: PersonalInfo;
  olResults: OLResults;
  alSubjects: ALSubjects;
  email: string;
}

interface Params {
  index: string;
}

// Assuming ExistingStudent is a Mongoose model

export async function GET(
  req: NextRequest,
  { params }: { params: Params }
): Promise<NextResponse> {
  try {
    const { index } = params;

    dbConnect();

    const studentdetails = await ExistingStudent.find({
      olindexno: parseInt(index),
    });

    if (!studentdetails || studentdetails.length === 0) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const student = studentdetails[0] as Student;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text("Student Details", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Name: ${student.personalInfo.fullname}`, 20, 40);
    doc.text(
      `Date of Birth: ${new Date(
        student.personalInfo.birthday
      ).toLocaleDateString()}`,
      20,
      50
    );
    doc.text(`NIC Number: ${student.personalInfo.nic_number}`, 20, 60);
    doc.text(`Address: ${student.personalInfo.address}`, 20, 70);
    doc.text(`Contact Number: ${student.personalInfo.contact_number}`, 20, 80);

    doc.setFontSize(14);
    doc.text("O/L Results:", 20, 100);
    let yPosition = 110;
    const olResults = student.olResults.first_attempt;
    Object.entries(olResults).forEach(([subject, grade]) => {
      if (subject !== "_id" && grade) {
        doc.text(`${subject}: ${grade}`, 20, yPosition);
        yPosition += 10;
      }
    });

    doc.setFontSize(14);
    doc.text("A/L Subjects:", 20, yPosition + 10);
    yPosition += 20;
    doc.text(`Stream: ${student.alSubjects.stream}`, 20, yPosition);
    yPosition += 10;
    student.alSubjects.subject.forEach((sub) => {
      doc.text(`${sub.subject} (${sub.medium})`, 20, yPosition);
      yPosition += 10;
    });

    // Generate PDF as a buffer
    const pdfBuffer = doc.output("arraybuffer");

    await sendEmailWithAttachment(student.email, Buffer.from(pdfBuffer));

    return NextResponse.json(
      { message: "PDF generated and email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function sendEmailWithAttachment(
  email: string,
  pdfBuffer: Buffer
): Promise<void> {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  if (!username || !password || !myEmail) {
    throw new Error("Email configuration is missing");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password,
    },
  });

  const mail = await transporter.sendMail({
    from: username,
    to: email,
    replyTo: myEmail,
    subject: `Your AL Application Details`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <h2>Your AL Application Details</h2>
          <p>Please find attached a PDF containing your application details.</p>
        </div>
      `,
    attachments: [
      {
        filename: "application_details.pdf",
        content: pdfBuffer,
      },
    ],
  });

  console.log("Email sent: ", mail.messageId);
}

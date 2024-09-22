import mongoose, { Document, Schema } from "mongoose";

export interface IStudentList extends Document {
  //   list of indexno
  indexno: number[];
}

// Create Mongoose schema
const StudentListSchema = new Schema<IStudentList>({
  indexno: { type: [Number], required: true },
});

// Create Mongoose model
const StudentList =
  mongoose.models.StudentList ||
  mongoose.model<IStudentList>("StudentList", StudentListSchema);

export default StudentList;

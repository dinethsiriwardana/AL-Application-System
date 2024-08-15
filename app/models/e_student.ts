import mongoose, { Document, Schema } from "mongoose";

export interface IEStudent extends Document {
  indexno: string;
  olClass: string;
  olClassTeacher: string;
  personalInfo: IPersonalInfo;
  olResults: IOLResults;
  parentInfo: IParent;
  alSubjects: IALSubject;
}

// Create Mongoose schema
const BasketSchema = new Schema<IBasket>({
  subject: { type: String, required: true },
  grade: { type: String, required: true },
});

const ParentInfoSchema = new Schema<IParentInfo>({
  name: { type: String, required: true },
  nicNumber: { type: Number, required: true },
  contactNumber: { type: Number, required: true },
  address: { type: String, required: true },
  job: { type: String, required: true },
});

const PersonalInfoSchema = new Schema<IPersonalInfo>({
  fullname: { type: String, required: true },
  nameWithInitials: { type: String, required: true },
  birthday: { type: Date, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  nicNumber: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  whatsappNumber: { type: Number, required: true },
  distanceToSchool: { type: Number, required: true },
  transportMethod: { type: String, required: true },
  scholarship: { type: String, required: true },
});

const OLAttemptSchema = new Schema<IOLAttempt>({
  index_no: { type: Number, required: true },
  maths: { type: Number, required: true },
  science: { type: Number, required: true },
  english: { type: Number, required: true },
  history: { type: Number, required: true },
  religion: { type: Number, required: true },
  sinhala: { type: Number, required: true },
  baskets: { type: [BasketSchema], required: true },
});

const OLResultsSchema = new Schema<IOLResults>({
  first_attempt: { type: OLAttemptSchema, required: true },
  second_attempt: { type: OLAttemptSchema, required: false },
});

const ALSubjectSchema = new Schema<IALSubject>({
  subject: { type: String, required: true },
  grades: { type: [BasketSchema], required: true },
});

const ParentSchema = new Schema<IParent>({
  father: { type: ParentInfoSchema, required: false },
  mother: { type: ParentInfoSchema, required: false },
  guardian: { type: ParentInfoSchema, required: false },
});

const ExistingStudentSchema = new Schema<IEStudent>({
  indexno: { type: String, required: true },
  olClass: { type: String, required: true },
  olClassTeacher: { type: String, required: true },
  personalInfo: { type: PersonalInfoSchema, required: true },
  olResults: { type: OLResultsSchema, required: true },
  parentInfo: { type: ParentSchema, required: true },
  alSubjects: { type: ALSubjectSchema, required: true },
});

const ExistingStudent =
  mongoose.models.ExistingStudent ||
  mongoose.model<IEStudent>("ExistingStudent", ExistingStudentSchema);

export default ExistingStudent;

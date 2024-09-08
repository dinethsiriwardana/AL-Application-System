import mongoose, { Document, Schema } from "mongoose";

export interface INewStudent extends Document {
  indexno: string;
  olClass: string;
  olClassTeacher: string;
  personalInfo: IPersonalInfo;
  olResults: IOLResults;
  parentInfo: IParent;
  alSubjects: IALStream;
  oldSchool: IOldSchool;
}

const OldSchoolSchema = new Schema<IOldSchool>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  zonal: { type: String, required: true },
  divisional: { type: String, required: true },
  district: { type: String, required: true },
});

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

const ALSubjectSchema = new Schema<IALStream>({
  subject: { type: String, required: true },
  grades: { type: [BasketSchema], required: true },
});

const ParentSchema = new Schema<IParent>({
  father: { type: ParentInfoSchema, required: false },
  mother: { type: ParentInfoSchema, required: false },
  guardian: { type: ParentInfoSchema, required: false },
});

const NewStudentSchema = new Schema<INewStudent>({
  indexno: { type: String, required: true },
  olClass: { type: String, required: true },
  olClassTeacher: { type: String, required: true },
  personalInfo: { type: PersonalInfoSchema, required: true },
  olResults: { type: OLResultsSchema, required: true },
  parentInfo: { type: ParentSchema, required: true },
  alSubjects: { type: ALSubjectSchema, required: true },
  oldSchool: { type: OldSchoolSchema, required: true },
});

const NewStudent =
  mongoose.models.NewStudent ||
  mongoose.model<INewStudent>("NewStudent", NewStudentSchema);

export default NewStudent;

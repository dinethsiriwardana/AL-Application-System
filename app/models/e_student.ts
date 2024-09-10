import mongoose, { Document, Schema } from "mongoose";

export interface IEStudent extends Document {
  appid: String;
  olindexno: Number;
  email: String;
  personalInfo: IPersonalInfo;
  olResults: IOLResults;
  parentInfo: IParent;
  alSubjects: IALStream;
  oldSchool: IOldSchool;
  oldclass: IOldClass;
  time: Date;
}

// Create Mongoose schema
const BasketSchema = new Schema<IBasket>({
  subject: { type: String, required: false },
  grade: { type: String, required: false },
});

const ParentInfoSchema = new Schema<IParentInfo>({
  name: { type: String, required: false },
  nic_number: { type: String, required: false },
  contact_number: { type: Number, required: false },
  address: { type: String, required: false },
  job: { type: String, required: false },
});

const PersonalInfoSchema = new Schema<IPersonalInfo>({
  fullname: { type: String, required: false },
  name_with_initials: { type: String, required: false },
  birthday: { type: Date, required: false },
  age: { type: Number, required: false },
  sex: { type: String, required: false },
  nic_number: { type: Number, required: false },
  address: { type: String, required: false },
  email: { type: String, required: false },
  contact_number: { type: Number, required: false },
  whatsapp_number: { type: Number, required: false },
  distance_to_school: { type: Number, required: false },
  transport_method: { type: String, required: false },
  scholarship: { type: String, required: false },
});

const OLAttemptSchema = new Schema<IOLAttempt>({
  index_no: { type: Number, required: false },
  mathematics: { type: String, required: false },
  science: { type: String, required: false },
  english: { type: String, required: false },
  history: { type: String, required: false },
  religion: { type: String, required: false },
  language: { type: String, required: false },
  firstsubname: { type: String, required: false },
  firstsubgrade: { type: String, required: false },
  secondsubname: { type: String, required: false },
  secondsubgrade: { type: String, required: false },
  thirdsubname: { type: String, required: false },
  thirdsubgrade: { type: String, required: false },
});

const OLResultsSchema = new Schema<IOLResults>({
  first_attempt: { type: OLAttemptSchema, required: false },
  second_attempt: { type: OLAttemptSchema, required: false },
});

const ALSubjectSchema = new Schema<IALStream>({
  stream: { type: String, required: false },
  subject: { type: [], required: false },
});

const ParentSchema = new Schema<IParent>({
  father: { type: ParentInfoSchema, required: false },
  mother: { type: ParentInfoSchema, required: false },
  guardian: { type: ParentInfoSchema, required: false },
});

const OldSchoolSchema = new Schema<IOldSchool>({
  name: { type: String, required: false },
  address: { type: String, required: false },
  zonal: { type: String, required: false },
  divisional: { type: String, required: false },
  district: { type: String, required: false },
});

const OldClassSchema = new Schema<IOldClass>({
  indexno: { type: Number, default: 0 }, // Assuming 0 is an appropriate default value for a number
  olClass: { type: String, default: "" }, // Default empty string
  olClassTeacher: { type: String, default: "" }, // Default empty string
});

const ExistingStudentSchema = new Schema<IEStudent>({
  appid: { type: String, required: false },
  olindexno: { type: String, required: true },
  email: { type: String, required: true },
  personalInfo: { type: PersonalInfoSchema, default: {} },
  olResults: { type: OLResultsSchema, default: {} },
  parentInfo: { type: ParentSchema, default: {} },
  alSubjects: { type: ALSubjectSchema, default: {} },
  oldSchool: { type: OldSchoolSchema, default: {} },
  oldclass: { type: OldClassSchema, default: {} },
  time: { type: Date, default: Date.now },
});

const ExistingStudent =
  mongoose.models.ExistingStudent ||
  mongoose.model<IEStudent>("ExistingStudent", ExistingStudentSchema);

export default ExistingStudent;

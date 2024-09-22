import mongoose, { Document, Schema } from "mongoose";

export interface IOLResultTemplete extends Document {
  name: string;
  index_no: string;
  mathematics: string;
  science: string;
  english: string;
  history: string;
  religion: string;
  language: string;
  firstsubname: string;
  firstsubgrade: string;
  secondsubname: string;
  secondsubgrade: String;
  thirdsubname: string;
  thirdsubgrade: string;
}

// Create Mongoose schema
const OLResultTempleteSchema = new Schema<IOLResultTemplete>({
  name: { type: String, required: false },
  index_no: { type: String, required: false },
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

// Create model from the schema
const OLResultTemplete =
  mongoose.models.olresult ||
  mongoose.model<IOLResultTemplete>("olresult", OLResultTempleteSchema);

export default OLResultTemplete;

import mongoose from "mongoose";
const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected?.toString()) {
    console.log("Connection Connected");
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!);

  connection.isConnected = db.connections[0].readyState;
  console.log("Connection Connected");
}

export default dbConnect;

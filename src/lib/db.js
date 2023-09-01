import mongoose from "mongoose";

export async function db() {
  try {
    await mongoose.connect(process.env.MOGNODB_LOCAL_URI);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.log(err);
  }
}

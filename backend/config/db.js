import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB Connected"))
}
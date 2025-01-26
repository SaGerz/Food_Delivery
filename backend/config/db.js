import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://tupacSayur:010102@cluster0.uschaps.mongodb.net/food-del')
    .then(() => console.log("DB Connected"))
}
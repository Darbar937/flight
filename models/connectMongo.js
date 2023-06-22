import mongoose from "mongoose";

const connectMongo = async() => mongoose.connect(process.env.mongo);

export default connectMongo;
import {Schema, model, models} from "mongoose";

const centreSchema = new Schema({
    city: String,
    address: String,
    name: String,
    timings: String,
    count: Number
})

const Centre = models.Centre || model("Centre", centreSchema);

export default Centre;
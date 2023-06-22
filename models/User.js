import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String,
    admin: Boolean,
})

const User = models.User || model("User", userSchema);

export default User;
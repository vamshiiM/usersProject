import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, default: 0 }
})

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
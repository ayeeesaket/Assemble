import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type:String
    },
    dob:{
        type: Date,
    },
    badge: {
        type: String,
        enum: ["newbie", "sniper", "rusher", "assaulter"],
        default: "newbie",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String
    },
    canChangeEmail: {
        type: Boolean,
        default: false,
    },
    canChangePassword: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 13);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare( password, this.password)
}

export const User = mongoose.model("User", userSchema);
import asyncHandler from "../utils/asyncHandler.js";
import ApiError  from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import ApiResponse  from "../utils/ApiResponse.js";
import { COOKIE_OPTIONS } from "../constants.js";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../utils/nodemailer/email.js";

const registerUser = asyncHandler( async (req,res) => {
    const { username, email, password } = req.body;
    if (!(username || email || password)) {
        throw new ApiError(400, "All Fields Are Required.")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });
    if (existedUser) {
        throw new ApiError(409, "User Already Exists.")
    }

    const verificationCode = (Math.floor(100000 + Math.random() * 900000)).toString();

    try {
        const user = await User.create({
            username,
            email,
            password,
            verificationCode
        });
        await sendVerificationEmail(user.email, user.verificationCode);
        return res
            .status(201)
            .json(new ApiResponse(201, user, "User Created Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const generateToken = async (user) => {
    try {
        const token = await jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        );
        return token;
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
};

const loginUser = asyncHandler( async (req,res) => {
    const { username, password } = req.body;
    if (!(username || password)) {
        throw new ApiError(400, "All Fields Are Required.")
    }

    const user = await User.findOne({ username });
    if (!user) {
        throw new ApiError(404, "User Not Found.")
    }

    if (!user.isVerified) {
        await User.findByIdAndDelete(user._id);
        throw new ApiError(401, "User Not Verified.")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid Credentials.")
    }

    const token = await generateToken(user);
    if (!token) {
        throw new ApiError(500, "Token Generation Failed.")
    }
    try {
        return res
            .cookie("token", token, COOKIE_OPTIONS)
            .status(200)
            .json(new ApiResponse(200, null, "User Logged In Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const verifyCode = asyncHandler( async (req, res) => {
    const { email, code } = req.body;
    if (!(email || code)) {
        throw new ApiError(400, "All Fields Are Required.")
    }
    const userFound = await User.findOne({ email });
    if (!userFound) {
        throw new ApiError(404, "User Not Found.")
    }
    if (userFound.verificationCode !== code) {
        throw new ApiError(401, "Invalid Verification Code.")
    }
    try {
        const isVerified = await userFound.updateOne({ isVerified: true });
        return res
            .status(200)
            .json(new ApiResponse(200, isVerified, "User Verified Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const logoutUser = asyncHandler( async (req,res) => {
    try {
        return res
            .clearCookie("token")
            .status(200)
            .json(new ApiResponse(200, null, "User Logged Out Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const changePassword = asyncHandler( async (req,res) => {
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword || newPassword)) {
        throw new ApiError(400, "All Fields Are Required.")
    }
    const user = req.user;
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid Credentials.")
    }
    if (oldPassword === newPassword) {
        throw new ApiError(400, "Old Password And New Password Cannot Be Same.")
    }
    try {
        user.password = newPassword;
        await user.save({
            validateBeforeSave: false,
        });
        return res
            .status(200)
            .json(new ApiResponse(200, null, "Password Changed Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const changeUsername = asyncHandler( async (req,res) => {
    const { newUsername } = req.body;
    if (!newUsername) {
        throw new ApiError(400, "All Fields Are Required.")
    }
    const user = req.user;
    const existedUser = await User.findOne({ username: newUsername });
    if (existedUser) {
        throw new ApiError(409, "Username Already Exists.")
    }
    if (user.username === newUsername) {
        throw new ApiError(400, "Old Username And New Username Cannot Be Same.")
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { username: newUsername },
            { new: true }
        ).select("-password");
        return res
            .status(200)
            .json(new ApiResponse(200, updatedUser, "Username Changed Successfully."));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

export {
    registerUser,
    loginUser,
    logoutUser,
    verifyCode,
    changePassword,
    changeUsername
};
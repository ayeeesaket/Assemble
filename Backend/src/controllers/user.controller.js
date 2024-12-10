import asyncHandler from "../utils/asyncHandler.js";
import ApiError  from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import ApiResponse  from "../utils/ApiResponse.js";
import { COOKIE_OPTIONS } from "../constants.js";
import jwt from "jsonwebtoken";

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

    try {
        const user = await User.create({
            username,
            email,
            password
        });
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

export {
    registerUser,
    loginUser,
    logoutUser
};
import { User } from "../models/user.models.js";
import ApiResponse from "../utils//ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    const {email, username, password} = req.body;

    if (!email || !username || !password) {
        throw new ApiError(404, "All Fields Are Required.");
    }

    const user = new User({
        email: email,
        username: username,
        password: password,
    });
    await user.save();
});

export {
    registerUser
};
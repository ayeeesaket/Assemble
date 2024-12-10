import  asyncHanlder from "../utils/asyncHandler.js";
import  ApiError  from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import  ApiResponse  from "../utils/ApiResponse.js";


const registerUser = asyncHanlder( async (req,res)=>{
    const { username , email , password , age } = req.body;

    if (
        [username,email,password].some((field)=>
            field?.trim()===""
        )
    ) {
        throw new ApiError(400,"all fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username },{ email }]
    })

    if(existedUser){
        throw new ApiError(409,"User already exists")
    }

    const user = await User.create({
        email,
        username,
        password,
        age
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createdUser){
        throw new ApiError(500,"Internal Sever error")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User creation success")
    )
})

export { registerUser }
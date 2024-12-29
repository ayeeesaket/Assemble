import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Tournament } from "../models/tournament.models.js";

const createTournaments = asyncHandler(async(req,res)=>{

    const {name,
        matchDate,
        matchTime,
        registrationEndDate,
        totalSlots,
        prizePool,
        type,
        game,
        entryFee,
        description,
        instructions,} = req.body;

    const now = new Date();
    if(new Date(registrationEndDate) <= now){
        throw new ApiError(400,"Registration end date must be in future!")
    }

    if (new Date(matchDate) <= new Date(registrationEndDate)) {
        throw new ApiError(400,"Match must be after registration ends!")
    }

    try {
        const tournament = await Tournament.create({
            name,
            matchDate,
            matchTime,
            registrationEndDate,
            totalSlots,
            prizePool,
            type,
            game,
            entryFee,
            description,
            instructions,
        })
    
        return res
        .status(201)
        .json( new ApiResponse(201,tournament,"Tournament Created Successfully!!"))

    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error")
    }
})



export { createTournaments }
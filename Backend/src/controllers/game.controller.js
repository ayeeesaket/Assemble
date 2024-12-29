import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Game } from "../models/gameId.models.js";

const addBgmiId = asyncHandler(async (req, res) => {
    const { bgmiId } = req.body;
    const user = req.user;

    if (!bgmiId) {
        throw new ApiError(400, "All fields are required");
    }

    try {
        await Game.findOneAndUpdate(
            { owner: user._id },
            { bgmiId: bgmiId },
            { new: true }
        );
        return res
            .status(201)
            .json(new ApiResponse(201, null, "Bgmi id added Sucessfully!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
})

const addFreeFireId = asyncHandler(async (req, res) => {
    const { freeFireId } = req.body;
    const user = req.user;

    if (!freeFireId) {
        throw new ApiError(400, "All fields are required");
    }

    try {
        await Game.findOneAndUpdate(
            { owner: user._id },
            { freefireId: freeFireId },
            { new: true }
        );
        return res
            .status(201)
            .json(new ApiResponse(201, null, "FreeFire id added Sucessfully!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
})

const addValorantId = asyncHandler(async (req, res) => {
    const { valorantId } = req.body;
    const user = req.user;
    // console.log(valorantId.riotId);

    if (!valorantId.tagline || !valorantId.riotId) {
        throw new ApiError(400, "All fields are required");
    }

    try {
        await Game.findOneAndUpdate(
            { owner: user._id },
            {
                valorantId: {
                    riotId: valorantId.riotId,
                    tagline: valorantId.tagline
                }
            },
            { new: true }
        );
        return res
            .status(201)
            .json(new ApiResponse(201, null, "Valorant id added Sucessfully!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
})

const addCodmId = asyncHandler(async (req, res) => {
    const { codmId } = req.body;
    const user = req.user;

    if (!codmId) {
        throw new ApiError(400, "All fields are required");
    }

    try {
        await Game.findOneAndUpdate(
            { owner: user._id },
            { codmId: codmId },
            { new: true }
        );
        return res
            .status(201)
            .json(new ApiResponse(201, null, "Call of Duty Mobile id added Sucessfully!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
})

const addAsphaltId = asyncHandler(async (req, res) => {
    const { asphaltId } = req.body;
    const user = req.user;

    if (!asphaltId) {
        throw new ApiError(400, "All fields are required");
    }

    try {
        await Game.findOneAndUpdate(
            { owner: user._id },
            { asphaltId: asphaltId },
            { new: true }
        );
        return res
            .status(201)
            .json(new ApiResponse(201, null, "Asphalt id added Sucessfully!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
})

const getGameId = asyncHandler(async (req, res) => {
    const user = req.user;

    try {
        const game
            = await Game.findOne({ owner: user._id });
        return res
            .status(200)
            .json(new ApiResponse(200, game, "Game Ids fetched successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }

})

export {
    addBgmiId,
    addFreeFireId,
    addCodmId,
    addValorantId,
    addAsphaltId,
    getGameId
};
import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
    bgmi_id: {
        type: String,
        default: "",
    },
    codm_id: {
        type: String,
        default: "",
    },
    valorant_id: {
        riot_id: {
            type: String,
        },
        tagline: {
            type: String,
        },
    },
    freefire_id: {
        type: String,
        default: "",
    },
    asphalt9_id: {
        type: String,
        default: "",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
});

export const Game = mongoose.model("Game", gameSchema);
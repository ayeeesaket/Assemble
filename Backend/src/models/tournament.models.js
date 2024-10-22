import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true 
    },
    banner: {
        type: String 
    },
    game: {
        type: String,
        required: true 
    },
    player_registered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }],
    rules: {
        type: String 
    },
    prize_pool: {
        type: Number 
    },
    streaming_platform: {
        type: String 
    },
    registration_end_time: {
        type: Date 
    },
    start_time: { 
        type: Date 
    },
    format: { 
        type: String 
    },
    result: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Result' 
    },
    date: { 
        type: Date, 
        default: Date.now 
    }

},{timestamps:true});

export const Tournament = mongoose.model("Tournament",tournamentSchema);
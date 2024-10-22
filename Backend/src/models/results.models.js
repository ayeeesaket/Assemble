import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    game:{
        type:String,
        required:true,
    },
    playerRanking:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }],
    tournament_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tournament' },
},{timestamps:true});

export const Result =  mongoose.model("Result",resultSchema);
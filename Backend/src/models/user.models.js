import mongoose from mongoose;

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
    password: {
        type: String,
        required: true,
    },
    tournament_registered:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Tournament'
    }
},
{timestamps:true}
);

export const User = mongoose.model("User",userSchema);
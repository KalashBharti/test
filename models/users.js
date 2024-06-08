import mongoose from "mongoose"

const userSchema = mongoose.Schema({

    name: {
        type: String,
       
    },
    email: {
        type: String,
        unique: true
    }
},
{
    timeStamp: true
})

export default mongoose.model("User", userSchema)
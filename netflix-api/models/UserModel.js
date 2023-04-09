const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        max : 50,

    },
    LikedMovies: Array,
});

mongoose.exports=mongoose.model("users",userSchema)
const Mongoose=require("mongoose")
const postSchema=Mongoose.Schema(
    {
        userId:{
            type:Mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        Message:String,
        postedDate:Date
    }
)
var postModel=Mongoose.model("post",postSchema)
module.exports=postModel

const mongoose= require("mongoose")
const courseSchema= new mongoose.Schema(
    {
        course_id:{
            type:String,
            unique:true,
            required:[true,"course_id is required"]
        },
        title:{
            type:String,
            required:[true,"title is required"]
        },
        desciption:{
            type:String,
            required:[true,"desciption is required"]
        },
       
        instructor_id:{
            type:String,
            required:[true,"instructor_id is required"]
        },
        duration_weeks:{
            type:Number,
            required:[true,"duration_weeks is required"]
        },
        
        price:{
            type:Number,
            required:[true,"price is required"]
        },



    }
)
const courseCollection= mongoose.model("courses",courseSchema)
module.exports=courseCollection;
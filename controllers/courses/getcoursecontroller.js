const courseCollection = require("../../models/courseSchema");
const mongoose = require("mongoose");
const { options } = require("../../routes/rootroute");

const getcoursecontroller = async (req, res) => {
  try {
    let courses;
    const { id, title, instructor_id, duration_weeks, price } = req.params;
    if (id) {
      courses = await courseCollection.aggregate([
        {
          $match: {
            course_id: id
          },
        },
      ]);
    } 
    else if(title){
        const searchTitle = title.toLowerCase();
        courses = await courseCollection.find({
            title:{$regex :`^${searchTitle}` , $options:"i"}
        });
    }
    else if(instructor_id){
        const searchinstructor_id = instructor_id.toLowerCase();
        courses = await courseCollection.find({
            instructor_id:{$regex :`^${searchinstructor_id}` , $options:"i"}
        });
    }
    else if(duration_weeks){
        courses = await courseCollection.find({
            duration_weeks:duration_weeks
        });
    }
    else if(price){
        courses = await courseCollection.find({
            price:price
        });
    }
    else {
      courses = await courseCollection.find();
    }
    // if(!courses || courses.length==0){
    //     return res.status(404).json({message:"course not found"})
    // }
    res.status(200).send(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = getcoursecontroller;

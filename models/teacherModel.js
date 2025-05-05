const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
{
registered_by: {
type: mongoose.Schema.Types.ObjectId, 
ref: "admin",
},
teacher_name: {
type: String, 
},
qualification: {
type: String, 
},
address: {
type: String, 
},
contact_no: {
type: Number, 
},
 gender: {
type: String, 
},
previous_school: {
type: String, 
},
age: {
type: Number, 
},
email: {
type: String, 
},
estimated_salary: {
type: Number, 
},
subjectToTeach: {
type: String, 
},
},
);





module.exports = mongoose.model("teacher", teacherSchema);

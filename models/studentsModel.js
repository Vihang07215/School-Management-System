const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
{
registered_by: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: admin",
},
classname: {
type: String, 
},
roll_no: {
type: Number, 
},
address: {
type: String, 
},
parents_name: {
type: String, 
},
contact_no: {
type: String, 
},
gender: {
type: String, 
},
previous_dues: {
type: Number, 
},
age: {
type: Number, 
},
student_name: {
type: String, 
},
email: {
type: String, 
},
registration_fees: {
type: String, 
},
},
);





module.exports = mongoose.model("students", studentsSchema);

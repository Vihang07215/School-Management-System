const mongoose = require("mongoose");

const nonteachingstaffSchema = new mongoose.Schema(
{
registered_by: {
type: mongoose.Schema.Types.ObjectId, 
ref: "admin",
},
staff_name: {
type: String, 
},
staffId: {
type: String, 
},
qualification: {
type: String, 
},
address: {
type: String, 
},
contact_no: {
type: String, 
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
work: {
type: String, 
},
},
);





module.exports = mongoose.model("nonteachingstaff", nonteachingstaffSchema);

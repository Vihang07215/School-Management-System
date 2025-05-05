const mongoose = require("mongoose");

const studentfeesSchema = new mongoose.Schema(
{
accountant: {
type: String, 
},
student_name: {
type: String, 
},
classname: {
type: String, 
},
roll_no: {
type: String, 
},
month_name: {
type: String, 
},
year: {
type: String, 
},
monthly_fees: {
type: Number, 
},
hostel_fees: {
type: Number, 
},
laboratory_fees: {
type: Number, 
},
computer_fees: {
type: Number, 
},
exam_fees: {
type: Number, 
},
miscellaneous: {
type: Number, 
},
},
);





module.exports = mongoose.model("studentfees", studentfeesSchema);

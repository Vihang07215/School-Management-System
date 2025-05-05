const mongoose = require("mongoose");

const studentattendanceSchema = new mongoose.Schema(
{
class_teacher: {
type: String, 
},
attendance_date: {
type: Date, 
default : "Date.now()", 
},
classname: {
type: String, 
},
student_name: {
type: String, 
},
roll_no: {
type: Number, 
},
classname_student: {
type: String, 
},
present: {
type: Boolean, 
default : false, 
},
},
);





module.exports = mongoose.model("studentattendance", studentattendanceSchema);

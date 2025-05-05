const mongoose = require("mongoose");

const teacheattendanceSchema = new mongoose.Schema(
{
admin: {
type: mongoose.Schema.Types.ObjectId, 
ref: "admin",
},
attendance_date: {
type: Date, 
default : Date.now(), 
},
teacher_name: {
type: String, 
},
present: {
type: Boolean, 
default : false, 
},
},
);





module.exports = mongoose.model("teacheattendance", teacheattendanceSchema);

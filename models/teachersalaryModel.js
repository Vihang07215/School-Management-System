const mongoose = require("mongoose");

const teachersalarySchema = new mongoose.Schema(
{
admin: {
type: mongoose.Schema.Types.ObjectId, 
ref: "admin",
},
teacher_name: {
type: String, 
},
salaryForTheYear: {
type: String, 
},
salaryForTheMonth: {
type: String, 
},
salaryAmount: {
type: Number, 
},
},
);





module.exports = mongoose.model("teachersalary", teachersalarySchema);

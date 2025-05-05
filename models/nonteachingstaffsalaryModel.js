const mongoose = require("mongoose");

const nonteachingstaffsalarySchema = new mongoose.Schema(
{
admin: {
type: mongoose.Schema.Types.ObjectId, 
ref: "admin",
},
staff_name: {
type: String, 
},
staffId: {
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





module.exports = mongoose.model("nonteachingstaffsalary", nonteachingstaffsalarySchema);

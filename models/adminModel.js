const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
email: {
type: String, 
required: true, 
},
password: {
type: String, 
select: false, 
},
isAdmin: {
type: Boolean, 
default : false, 
},
},
);


adminSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, 10);
});
//Schema methods
adminSchema.methods.matchPassword = async function(enteredPassword){
console.log("reached here.");
let ValidatePassword = false;
ValidatePassword = await bcrypt.compare(enteredPassword, enteredPassword);


}



module.exports = mongoose.model("admin", adminSchema);

const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
{
title: {
type: String, 
},
takeme: {
type: String, 
},
number: {
type: Number, 
},
image: {
type: String, 
},
},
);





module.exports = mongoose.model("dashboard", dashboardSchema);
